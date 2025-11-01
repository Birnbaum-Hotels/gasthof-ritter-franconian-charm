import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const DEFAULT_MENU_URL =
  "https://eat.allo.restaurant/restaurant/gasthof-ritter-sankt-georg-erlangen";

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { searchParams } = new URL(req.url);
    const urlParam = searchParams.get("url") ?? DEFAULT_MENU_URL;

    let target: URL;
    try {
      target = new URL(urlParam);
    } catch {
      return new Response("Invalid URL", { status: 400, headers: corsHeaders });
    }

    // Restrict to specific host to avoid open proxy misuse
    if (target.host !== "eat.allo.restaurant") {
      return new Response("Host not allowed", { status: 400, headers: corsHeaders });
    }

    const upstream = await fetch(target.toString(), {
      headers: {
        "user-agent": req.headers.get("user-agent") ?? "Mozilla/5.0",
        "accept-language": req.headers.get("accept-language") ?? "de-DE,de;q=0.9,en;q=0.8",
      },
    });

    const headers = new Headers(upstream.headers);
    // Remove headers that prevent embedding
    headers.delete("x-frame-options");
    headers.delete("content-security-policy");
    headers.delete("content-security-policy-report-only");

    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Cache-Control", "s-maxage=300, max-age=60");

    return new Response(upstream.body, {
      status: upstream.status,
      headers,
    });
  } catch (err) {
    console.error("menu-proxy error:", err);
    return new Response("Proxy error", { status: 500, headers: corsHeaders });
  }
});