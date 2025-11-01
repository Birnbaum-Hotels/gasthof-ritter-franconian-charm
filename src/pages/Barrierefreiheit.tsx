import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accessibility, Phone, Mail } from "lucide-react";
import VacationBanner from "@/components/VacationBanner";

const Barrierefreiheit = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-6">
              <Accessibility className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">
              Barrierefreiheit
            </h1>
            <p className="text-muted-foreground">
              Unser Engagement für eine zugängliche Website und barrierefreie Gästeerfahrung
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Barrierefreiheitserklärung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Wir sind bestrebt, unsere Website für alle Benutzer zugänglich zu machen, unabhängig von ihren Fähigkeiten oder Technologien. 
                  Unsere Website wurde nach den Web Content Accessibility Guidelines (WCAG) 2.1 Level AA entwickelt und berücksichtigt die Anforderungen des Barrierefreiheitsstärkungsgesetzes (BFSG) und der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0).
                </p>
                
                <div>
                  <h4 className="font-medium text-primary mb-2">Umgesetzte Maßnahmen</h4>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>Ausreichende Farbkontraste für bessere Lesbarkeit</li>
                    <li>Alternative Texte für alle Bilder und Grafiken</li>
                    <li>Klare Überschriftenstruktur für Screenreader</li>
                    <li>Tastaturnavigation für alle interaktiven Elemente</li>
                    <li>Verständliche Sprache und klare Formulierungen</li>
                    <li>Responsive Design für verschiedene Bildschirmgrößen</li>
                    <li>Korrekte Sprachauszeichnung (lang-Attribut)</li>
                    <li>"Zum Hauptinhalt springen"-Link für Tastaturnutzer</li>
                    <li>ARIA-Attribute für verbesserte Screenreader-Unterstützung</li>
                    <li>Barrierefreie Formulare mit klaren Beschriftungen</li>
                    <li>Zugängliche Cookie-Einstellungen und Datenschutzhinweise</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-2">Konformitätsstatus</h4>
                  <p className="text-muted-foreground text-sm">
                    Diese Website ist teilweise konform mit den WCAG 2.1 Level AA-Richtlinien. Wir arbeiten kontinuierlich daran, 
                    die volle Konformität zu erreichen und alle Inhalte barrierefrei zugänglich zu machen.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-2">Bekannte Einschränkungen</h4>
                  <p className="text-muted-foreground text-sm">
                    Einige ältere PDF-Dokumente sind möglicherweise nicht vollständig barrierefrei. 
                    Wir arbeiten daran, diese Dokumente zu aktualisieren oder alternative Formate anzubieten.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-2">Feedback und Kontakt</h4>
                  <p className="text-muted-foreground text-sm">
                    Wir freuen uns über Ihr Feedback zur Barrierefreiheit unserer Website. 
                    Wenn Sie auf Probleme stoßen oder Verbesserungsvorschläge haben, kontaktieren Sie uns bitte unter:
                  </p>
                  <div className="mt-2 flex flex-col gap-2">
                    <a href="mailto:barrierefreiheit@gasthof-ritter-st-georg.de" className="text-primary hover:underline flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>barrierefreiheit@gasthof-ritter-st-georg.de</span>
                    </a>
                    <a href="tel:+4993211234567" className="text-primary hover:underline flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+49 9321 123456</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-2">Durchsetzungsverfahren</h4>
                  <p className="text-muted-foreground text-sm">
                    Wenn Sie mit unserer Antwort auf Ihr Feedback nicht zufrieden sind, können Sie sich an die 
                    Bundesfachstelle für Barrierefreiheit wenden.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Barrierefreie Ausstattung im Gasthof</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-primary mb-3">Restaurant & Gaststätte</h4>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                      <li>Stufenloser Eingang</li>
                      <li>Breite Türen und Gänge</li>
                      <li>Behindertengerechte Toilette</li>
                      <li>Unterfahrbare Tische verfügbar</li>
                      <li>Reservierte Parkplätze</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-primary mb-3">Hotel</h4>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                      <li>2 barrierefreie Zimmer</li>
                      <li>Ebenerdiger Zugang zum Hotel</li>
                      <li>Aufzug zu allen Etagen</li>
                      <li>Breite Türen und Flure</li>
                      <li>Barrierefreies Badezimmer</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-3">Tagungsräume</h4>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>Alle Räume stufenlos erreichbar</li>
                    <li>Induktionsschleifen verfügbar</li>
                    <li>Flexible Tischaufstellung</li>
                    <li>Behindertengerechte Toiletten in der Nähe</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Hilfsmittel und Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-primary mb-3">Verfügbare Hilfsmittel</h4>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                      <li>Rollstühle (auf Anfrage)</li>
                      <li>Hörverstärker für Veranstaltungen</li>
                      <li>Speisekarten in Großdruck</li>
                      <li>Persönliche Begleitung bei Bedarf</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-primary mb-3">Besondere Services</h4>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                      <li>Allergiker-freundliche Menüs</li>
                      <li>Flexible Check-in/Check-out Zeiten</li>
                      <li>Assistenzhunde willkommen</li>
                      <li>Individuelle Beratung vor Ort</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Feedback und Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Ihre Rückmeldungen zur Barrierefreiheit sind uns wichtig. Falls Sie Schwierigkeiten bei der Nutzung unserer Website haben 
                  oder Verbesserungsvorschläge für unsere Einrichtungen, kontaktieren Sie uns gerne.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-2">Telefonisch</h4>
                      <p className="text-muted-foreground text-sm">
                        +49 (0) 9131 123456<br />
                        Montag - Sonntag<br />
                        8:00 - 22:00 Uhr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-2">E-Mail</h4>
                      <p className="text-muted-foreground text-sm">
                        barrierefreiheit@gasthof-ritter-st-georg.de<br />
                        Wir antworten innerhalb von 24 Stunden
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-border">
                  <Button size="lg" variant="default" className="px-8">
                    Individuelle Beratung anfragen
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Wir beraten Sie gerne persönlich zu Ihren spezifischen Bedürfnissen
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Rechtliche Hinweise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Diese Erklärung zur Barrierefreiheit wurde am 15. Januar 2024 erstellt und basiert auf einer Selbstbewertung. 
                  Wir bemühen uns kontinuierlich um die Verbesserung der Barrierefreiheit unserer Dienstleistungen entsprechend den 
                  geltenden Gesetzen und Standards.
                </p>
                <p className="text-muted-foreground text-sm mt-4">
                  <strong>Schlichtungsstelle:</strong> Bei Problemen können Sie sich an die Schlichtungsstelle BGG wenden:<br />
                  <a href="https://www.schlichtungsstelle-bgg.de" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                    www.schlichtungsstelle-bgg.de
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Vacation Banner */}
      <VacationBanner />
    </div>
  );
};

export default Barrierefreiheit;