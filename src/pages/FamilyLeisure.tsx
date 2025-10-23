import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bike, Trees, Castle, Baby, MapPin, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FamilyLeisure = () => {
  const sights = [
    "Hugenottenplatz und Hugenottenkirche",
    "Botanischer Garten und Aromagarten",
    "Kunstmuseum Erlangen",
    "Stadtmuseum",
    "Kunstpalais",
    "Markt- und Schlossplatz"
  ];

  const childrenAttractions = [
    { name: "Playmobil Funpark Zirndorf", url: "https://www.playmobil.de" },
    { name: "Freizeitland Geiselwind", url: "https://www.freizeit-land.de" },
    { name: "Erlebnispark Schloss Thurn", url: "https://www.schloss-thurn.de" },
    { name: "Atlantis Freizeitbad", url: "https://www.atlantis-bad.de" },
    { name: "Tiergarten Nürnberg", url: "https://www.tiergarten.nuernberg.de" },
    { name: "Wildgehege Hundshaupten", url: "https://www.hundshaupten.de" }
  ];

  const regionalLinks = [
    { name: "Erlangen", url: "https://www.erlangen.de" },
    { name: "Nürnberg", url: "https://www.nuernberg.de" },
    { name: "Bamberg", url: "https://www.stadt.bamberg.de" },
    { name: "Fränkische Schweiz", url: "https://www.fraenkische-schweiz.com/info/sehenswertes.html" },
    { name: "Der Berg Ruft", url: "https://www.der-berg-ruft.de" }
  ];

  const cyclingRoutes = [
    { name: "Fernwege", url: "https://www.fernwege.de" },
    { name: "Regnitzradweg", url: "https://www.regnitzradweg.de" },
    { name: "Karpfenradwege Franken", url: "https://www.karpfenradwege-franken.de" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-primary-glow">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Familie & Freizeit
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Erlangen - Der perfekte Ausgangspunkt für Ihre Erkundungen
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Freizeit und Kinder
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Erlangen, der beste Standort für Ausflüge in die Region - Erlangen ist ein echter Geheimtipp auf 
                  der Must-See-Touristenroute durch Franken. Als Mittelpunkt auf der Route von der alten Kaiserstadt 
                  Nürnberg zum historischen Bamberg ist es ein idealer Ausgangspunkt zur Erkundung der Fränkischen 
                  Schweiz – oder ein spannender Kontrast zu einem Aufenthalt in einem der zahlreichen Erholungsgebiete 
                  Frankens und der Oberpfalz.
                </p>
                <p>
                  Erlangen ist eine der wenigen gut erhaltenen barocken Idealstädte in Deutschland. Neben dem Radfahren 
                  gehören seit 1755 die Bergkirchweih zu ihren Markenzeichen, eines der schönsten Volksfeste Süddeutschlands. 
                  Zu Pfingsten lockt diese traditionelle Veranstaltung etwa eine Million Besucher aus nah und fern auf den 
                  Schlossberg. Auch Großveranstaltungen wie der Internationale Comic-Salon und das Figurentheaterfestival 
                  sind typisch für Erlangen.
                </p>
                <p>
                  Die Nähe zum Main-Donau-Kanal mit seinem Radweg ermöglicht die optimale Kombination von Freizeitaktivitäten 
                  und kulturellen Attraktionen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sights */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Castle className="w-8 h-8 text-primary" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Sehenswürdigkeiten in Erlangen
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {sights.map((sight, index) => (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6">
                      <p className="text-foreground font-medium">{sight}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground text-center text-lg">
                Sie sehen, ob Sie unsere schöne Stadt als Urlauber, Radfahrer, Geschäftsreisender oder Gruppenreisender 
                entdecken möchten - der "Ritter St. Georg" ist der ideale Ausgangspunkt für alle Ihre Pläne.
              </p>
            </div>
          </div>
        </section>

        {/* Children's Attractions */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Baby className="w-8 h-8 text-primary" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Für Kinder
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {childrenAttractions.map((attraction, index) => (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors group">
                    <CardContent className="p-6">
                      <a 
                        href={attraction.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group-hover:text-primary transition-colors"
                      >
                        <span className="font-medium">{attraction.name}</span>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hiking & Cycling */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Bike className="w-8 h-8 text-primary" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Wandern & Radfahren
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Darüber hinaus gibt es wunderschöne Wanderwege und Radwege in und um Erlangen. Weitere Informationen finden Sie hier:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {cyclingRoutes.map((route, index) => (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors group">
                    <CardContent className="p-6">
                      <a 
                        href={route.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group-hover:text-primary transition-colors"
                      >
                        <span className="font-medium">{route.name}</span>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Information */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Trees className="w-8 h-8 text-primary" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Die Region erkunden
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {regionalLinks.map((link, index) => (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors group">
                    <CardContent className="p-6">
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group-hover:text-primary transition-colors"
                      >
                        <span className="font-medium">{link.name}</span>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Bereit für Ihr Erlebnis?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Buchen Sie Ihren Aufenthalt im Ritter St. Georg und entdecken Sie die Vielfalt Frankens
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/hotel">Zimmer buchen</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border-white text-white" asChild>
                <Link to="/contact">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FamilyLeisure;
