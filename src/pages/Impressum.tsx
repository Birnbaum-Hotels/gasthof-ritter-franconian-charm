import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VacationBanner from "@/components/VacationBanner";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">
              Impressum
            </h1>
            <p className="text-muted-foreground">
              Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Betreiber</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Gasthof Ritter St. Georg</h3>
                  <p className="text-muted-foreground">
                    Inhaber: [Name des Inhabers]<br />
                    Ritter-von-Spix-Straße 7<br />
                    91054 Erlangen<br />
                    Deutschland
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-primary mb-2">Kontakt</h4>
                  <p className="text-muted-foreground">
                    Telefon: +49 (0) 9131 123456<br />
                    E-Mail: info@gasthof-ritter-st-georg.de<br />
                    Website: www.gasthof-ritter-st-georg.de
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Rechtliche Angaben</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-primary mb-2">Umsatzsteuer-ID</h4>
                  <p className="text-muted-foreground">
                    Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
                    DE[Nummer]
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-2">Handelsregister</h4>
                  <p className="text-muted-foreground">
                    Registergericht: [Gericht]<br />
                    Registernummer: [Nummer]
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-2">Aufsichtsbehörde</h4>
                  <p className="text-muted-foreground">
                    Landratsamt Erlangen-Höchstadt<br />
                    Amt für Gewerbeaufsicht<br />
                    Nägelsbachstraße 1<br />
                    91052 Erlangen
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Haftungsausschluss</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-primary mb-2">Haftung für Inhalte</h4>
                  <p className="text-muted-foreground text-sm">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-2">Haftung für Links</h4>
                  <p className="text-muted-foreground text-sm">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-2">Urheberrecht</h4>
                  <p className="text-muted-foreground text-sm">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Online-Streitbeilegung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-primary underline ml-1" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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

export default Impressum;