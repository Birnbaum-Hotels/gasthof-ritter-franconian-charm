# Gasthof Ritter St. Georg – Projekt

## Entwicklung lokal starten

Voraussetzungen: Node.js und npm installiert – Empfehlung: Installation mit `nvm` (`https://github.com/nvm-sh/nvm#installing-and-updating`).

```sh
# Repository klonen
git clone <YOUR_GIT_URL>

# In das Projektverzeichnis wechseln
cd <YOUR_PROJECT_NAME>

# Abhängigkeiten installieren
npm i

# Entwicklungsserver starten
npm run dev
```

## Verwendete Technologien

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
 
## Cookie Consent

Eine einfache, DSGVO‑freundliche Cookie-Lösung ist integriert.

- Zustand/Storage: `src/contexts/ConsentContext.tsx` (persistiert in `localStorage`).
- Banner: `src/components/CookieBanner.tsx`, eingebunden in `src/App.tsx`.
- Helper: `src/lib/consent.ts` mit `isConsentGranted('analytics' | 'marketing')`.

Beispiel:

```tsx
import { isConsentGranted } from "@/lib/consent";

if (isConsentGranted('analytics')) {
  // Analytics erst nach Einwilligung initialisieren
}
```

Hinweise:

- Standard: nur essenzielle Cookies bis zur Wahl.
- Drittskripte (Analytics, Marketing, Maps) erst nach Einwilligung laden.
- Texte/Links im Banner an Ihre Rechtsdokumente anpassen (siehe `Datenschutz`).

## Deployment

Build erzeugen und anschließend auf Ihrem Hosting/Server ausliefern.

```sh
npm run build
npm run preview
```
