import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useConsent } from "@/contexts/ConsentContext";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CookieSettingsDialog({ open, onOpenChange }: Props) {
  const { consent, setConsent, rejectNonEssential, acceptAll } = useConsent();
  const [draft, setDraft] = useState(consent);

  useEffect(() => {
    if (open) setDraft(consent);
  }, [open, consent]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Cookie-Einstellungen</DialogTitle>
          <DialogDescription>
            Wählen Sie aus, welche Kategorien Sie erlauben. Essenzielle Cookies sind erforderlich.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Essenziell</div>
              <div className="text-xs text-muted-foreground">Erforderlich für Grundfunktionen</div>
            </div>
            <Switch checked={true} disabled />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Analytics</div>
              <div className="text-xs text-muted-foreground">Anonyme Nutzungsstatistiken</div>
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
        </div>

        <DialogFooter className="gap-2 sm:gap-2">
          <Button variant="outline" onClick={rejectNonEssential}>Nur essenziell</Button>
          <Button variant="secondary" onClick={acceptAll}>Alle akzeptieren</Button>
          <Button onClick={() => { setConsent({ ...draft, essential: true }); onOpenChange(false); }}>Auswahl speichern</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


