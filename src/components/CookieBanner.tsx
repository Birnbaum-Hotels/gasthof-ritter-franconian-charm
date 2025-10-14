import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useConsent } from "@/contexts/ConsentContext";

export default function CookieBanner() {
  const { consent, hasAnswered, acceptAll, rejectNonEssential, setConsent } = useConsent();
  const [openCustomize, setOpenCustomize] = useState(false);
  const [draft, setDraft] = useState(consent);
  const firstActionRef = useRef<HTMLButtonElement | null>(null);
  const customizeRef = useRef<HTMLDivElement | null>(null);

  const visible = useMemo(() => !hasAnswered, [hasAnswered]);

  useEffect(() => {
    if (visible && firstActionRef.current) {
      firstActionRef.current.focus();
    }
  }, [visible]);

  useEffect(() => {
    if (openCustomize && customizeRef.current) {
      customizeRef.current.focus();
    }
  }, [openCustomize]);

  // Handle keyboard navigation for the banner
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      rejectNonEssential();
    }
  };

  if (!visible) return null;
  return (
    <div 
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4" 
      role="dialog" 
      aria-labelledby="cookie-banner-title" 
      aria-describedby="cookie-banner-desc" 
      aria-modal="true"
      onKeyDown={handleKeyDown}
    >
      <div className="mx-auto max-w-3xl">
        <Card className="p-4 shadow-lg border bg-background">
          <div className="flex flex-col gap-3">
            <h2 id="cookie-banner-title" className="text-lg font-semibold">Cookie-Einstellungen</h2>
            <div className="text-sm text-foreground" id="cookie-banner-desc">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Essenzielle Cookies sind erforderlich. 
              Mehr erfahren Sie in unserer <a href="/datenschutz" className="underline focus:ring-2 focus:ring-primary focus:outline-none" target="_self" rel="noopener noreferrer">Datenschutzerklärung</a>.
            </div>
            {!openCustomize ? (
              <div className="flex flex-wrap gap-2 justify-end">
                <Button 
                  ref={firstActionRef} 
                  variant="outline" 
                  onClick={rejectNonEssential}
                  aria-label="Nur essenzielle Cookies akzeptieren"
                >
                  Nur essenziell
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => { setDraft(consent); setOpenCustomize(true); }}
                  aria-label="Cookie-Einstellungen anpassen"
                >
                  Anpassen
                </Button>
                <Button 
                  onClick={acceptAll}
                  aria-label="Alle Cookies akzeptieren"
                >
                  Alle akzeptieren
                </Button>
              </div>
            ) : (
              <div className="space-y-3" ref={customizeRef} tabIndex={-1}>
                <div className="flex items-center justify-between" aria-live="polite">
                  <div id="essential-cookie-label">
                    <div className="text-sm font-medium">Essenziell</div>
                    <div className="text-xs text-muted-foreground">Erforderlich für die Grundfunktionen</div>
                  </div>
                  <Switch 
                    checked={true} 
                    disabled 
                    aria-labelledby="essential-cookie-label"
                    aria-readonly="true"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div id="analytics-cookie-label">
                    <div className="text-sm font-medium">Analytics</div>
                    <div className="text-xs text-muted-foreground">Anonyme Statistik zur Verbesserung</div>
                  </div>
                  <Switch 
                    checked={draft.analytics} 
                    onCheckedChange={(v) => setDraft({ ...draft, analytics: v })}
                    aria-labelledby="analytics-cookie-label"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div id="marketing-cookie-label">
                    <div className="text-sm font-medium">Marketing</div>
                    <div className="text-xs text-muted-foreground">Personalisierte Inhalte und Angebote</div>
                  </div>
                  <Switch 
                    checked={draft.marketing} 
                    onCheckedChange={(v) => setDraft({ ...draft, marketing: v })}
                    aria-labelledby="marketing-cookie-label"
                  />
                </div>
                <div className="flex gap-2 justify-end pt-1">
                  <Button 
                    variant="outline" 
                    onClick={() => setOpenCustomize(false)}
                    aria-label="Zurück zur Cookie-Übersicht"
                  >
                    Zurück
                  </Button>
                  <Button 
                    onClick={() => setConsent({ ...draft, essential: true })}
                    aria-label="Cookie-Auswahl speichern"
                  >
                    Auswahl speichern
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}


