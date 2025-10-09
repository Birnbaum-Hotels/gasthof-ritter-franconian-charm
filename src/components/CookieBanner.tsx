import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useConsent } from "@/contexts/ConsentContext";

export default function CookieBanner() {
  const { consent, hasAnswered, acceptAll, rejectNonEssential, setConsent } = useConsent();
  const [openCustomize, setOpenCustomize] = useState(false);
  const [draft, setDraft] = useState(consent);

  const visible = useMemo(() => !hasAnswered, [hasAnswered]);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-3xl">
        <Card className="p-4 shadow-lg border bg-background">
          <div className="flex flex-col gap-3">
            <div className="text-sm text-foreground">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Essenzielle Cookies sind erforderlich. 
              Mehr erfahren Sie in unserer <a href="/datenschutz" className="underline" target="_self" rel="noopener noreferrer">Datenschutzerklärung</a>.
            </div>
            {!openCustomize ? (
              <div className="flex flex-wrap gap-2 justify-end">
                <Button variant="outline" onClick={rejectNonEssential}>Nur essenziell</Button>
                <Button variant="secondary" onClick={() => { setDraft(consent); setOpenCustomize(true); }}>Anpassen</Button>
                <Button onClick={acceptAll}>Alle akzeptieren</Button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Essenziell</div>
                    <div className="text-xs text-muted-foreground">Erforderlich für die Grundfunktionen</div>
                  </div>
                  <Switch checked={true} disabled />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Analytics</div>
                    <div className="text-xs text-muted-foreground">Anonyme Statistik zur Verbesserung</div>
                  </div>
                  <Switch checked={draft.analytics} onCheckedChange={(v) => setDraft({ ...draft, analytics: v })} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Marketing</div>
                    <div className="text-xs text-muted-foreground">Personalisierte Inhalte und Angebote</div>
                  </div>
                  <Switch checked={draft.marketing} onCheckedChange={(v) => setDraft({ ...draft, marketing: v })} />
                </div>
                <div className="flex gap-2 justify-end pt-1">
                  <Button variant="outline" onClick={() => setOpenCustomize(false)}>Zurück</Button>
                  <Button onClick={() => setConsent({ ...draft, essential: true })}>Auswahl speichern</Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}


