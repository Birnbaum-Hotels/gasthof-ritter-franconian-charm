import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VacationBanner from "@/components/VacationBanner";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-muted-foreground">
              Information über die Verarbeitung Ihrer personenbezogenen Daten
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">1. Verantwortlicher</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
                  Gasthof Ritter St. Georg<br />
                  [Name des Inhabers]<br />
                  Ritter-von-Spix-Straße 7<br />
                  91054 Erlangen<br />
                  Deutschland<br /><br />
                  Telefon: +49 (0) 9131 123456<br />
                  E-Mail: info@gasthof-ritter-st-georg.de
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">2. Datenverarbeitung beim Besuch unserer Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-primary mb-2">Server-Log-Dateien</h4>
                  <p className="text-muted-foreground text-sm">
                    Beim Besuch unserer Website werden automatisch Informationen an den Server unserer Website gesendet. 
                    Diese Informationen werden temporär in sog. Server-Log-Dateien gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 ml-4">
                    <li>IP-Adresse des anfragenden Rechners</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Name und URL der abgerufenen Datei</li>
                    <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                    <li>Verwendeter Browser und ggf. das Betriebssystem</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">3. Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. 
                  Wir unterscheiden zwischen zwei Kategorien von Cookies:
                </p>
                
                <div>
                  <h4 className="font-medium text-primary mb-2">Technisch notwendige Cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können daher nicht deaktiviert werden.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-2">Analyse- und Marketing-Cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    Diese Cookies helfen uns dabei, die Nutzung unserer Website zu verstehen und zu verbessern. 
                    Sie können diese Cookies über unser Cookie-Banner verwalten.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">4. Kontaktformular und E-Mail-Kontakt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Bei der Nutzung des Kontaktformulars oder bei E-Mail-Kontakt verarbeiten wir Ihre Daten zur Bearbeitung der Anfrage 
                  und für den Fall von Anschlussfragen. Eine Weitergabe an Dritte findet nicht statt.
                </p>
                <p className="text-muted-foreground text-sm mt-4">
                  <strong>Verarbeitete Daten:</strong> Name, E-Mail-Adresse, Telefonnummer (optional), Nachricht<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                  <strong>Speicherdauer:</strong> 3 Jahre ab Abschluss der Korrespondenz
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">5. Hotel- und Restaurant-Buchungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Für Hotel- und Tischreservierungen verarbeiten wir Ihre Daten zur Vertragserfüllung. 
                  Die Datenverarbeitung erfolgt über unseren Buchungspartner RoomRaccoon.
                </p>
                <p className="text-muted-foreground text-sm mt-4">
                  <strong>Verarbeitete Daten:</strong> Name, Adresse, E-Mail, Telefonnummer, Zahlungsdaten, Aufenthaltsdaten<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)<br />
                  <strong>Speicherdauer:</strong> 10 Jahre (handelsrechtliche Aufbewahrungspflichten)
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">6. Ihre Rechte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm ml-4 space-y-1">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                  <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">7. Datensicherheit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) 
                  in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. 
                  In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">8. Änderungen der Datenschutzerklärung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht 
                  oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
                </p>
                <p className="text-muted-foreground text-sm mt-4">
                  <strong>Stand:</strong> Januar 2024
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

export default Datenschutz;