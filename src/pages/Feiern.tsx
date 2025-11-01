import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar, Camera, Utensils, MapPin } from "lucide-react";
import restaurantImage from "@/assets/restaurant-interior.jpg";
import { useState } from "react";
import VacationBanner from "@/components/VacationBanner";
const Feiern = () => {
  const [selectedPackage, setSelectedPackage] = useState(1); // Premium package selected by default
  const celebrationTypes = [
    {
      title: "Hochzeiten",
      description: "Ihr schönster Tag in romantischer Atmosphäre",
      icon: Heart,
      features: ["Bis zu 80 Gäste", "Menü-Auswahl", "Dekoration", "Fotoshooting möglich"],
    },
    {
      title: "Familienfeiern",
      description: "Geburtstage, Taufen, Kommunion & Konfirmation",
      icon: Users,
      features: ["Flexible Raumaufteilung", "Kindergerechte Menüs", "Spielecke", "Parkplätze vorhanden"],
    },
    {
      title: "Trauerfeiern",
      description: "Würdevoller Abschied in ruhiger Umgebung",
      icon: Calendar,
      features: [
        "Separate Räumlichkeiten",
        "Individuelle Menüs",
        "Persönliche Betreuung",
        "Kurzfristige Buchung möglich",
      ],
    },
  ];
  const packages = [
    {
      name: "Klassisch Fränkisch",
      description: "Traditionelle fränkische Küche für Ihre Feier",
      price: "ab 28€",
      features: ["3-Gang Menü", "Sauerbraten oder Schäufele", "Klöße und Kraut", "Fränkisches Bier inkl."],
      popular: false,
    },
    {
      name: "Premium Paket",
      description: "Gehobene Küche mit regionalen Spezialitäten",
      price: "ab 42€",
      features: ["4-Gang Menü", "Forelle oder Hirschmedaillons", "Saisonale Beilagen", "Weinbegleitung möglich"],
      popular: true,
    },
    {
      name: "Rundum-Sorglos",
      description: "Komplettpaket mit Dekoration und Service",
      price: "ab 55€",
      features: ["5-Gang Menü", "Tischdekoration", "Menükarten gestaltet", "Fotograf-Empfehlungen"],
      popular: false,
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={restaurantImage}
            alt="Feiern im Gasthof Ritter St. Georg - Hochzeiten und Familienfeiern"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">Feiern ohne Stress</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Räume, Menü & Dekoration aus einer Hand - Ihre Feier in fränkischer Tradition
          </p>
        </div>
      </section>

      {/* Celebration Types */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Ihre Feier bei uns</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vom intimen Familienkreis bis zur großen Hochzeit - wir schaffen den passenden Rahmen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {celebrationTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-warm transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-sand-tone rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Unsere Feier-Pakete</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wählen Sie das passende Paket für Ihre Feier - alle Preise pro Person
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`shadow-card relative cursor-pointer transition-all duration-300 ${selectedPackage === index ? "ring-2 ring-wine-red" : "hover:ring-2 hover:ring-wine-red/50"}`}
                onClick={() => setSelectedPackage(index)}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-wine-red text-white">
                    Beliebt
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-primary">{pkg.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  <div className="text-3xl font-bold text-wine-red mt-4">{pkg.price}</div>
                  <p className="text-xs text-muted-foreground">pro Person</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-sand-tone rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={selectedPackage === index ? "default" : "outline"} className="w-full">
                    Paket anfragen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room & Capacity Info */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Räume & Kapazitäten</h2>
              <p className="text-muted-foreground">Flexible Raumaufteilung für jede Gruppengröße bis 120 Gäste</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-wine-red" />
                    Regnitzsalon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Bis zu 50 Personen (Bankett)</li>
                    <li>Bis zu 80 Personen (Stehempfang)</li>
                    <li>Eigene Bar und Musikanlage</li>
                    <li>Direkte Terrassen-Verbindung</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-wine-red" />
                    Nebenzimmer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>15-30 Personen (ideal für Familienfeiern)</li>
                    <li>Ruhige, intime Atmosphäre</li>
                    <li>Zugang zum Biergarten</li>
                    <li>Kindergerechte Ausstattung verfügbar</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="px-8">
                  <Calendar className="w-5 h-5 mr-2" />
                  Begehung vereinbaren
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  <Camera className="w-5 h-5 mr-2" />
                  Bildergalerie ansehen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Ihre Feier planen</h2>
            <p className="text-muted-foreground mb-8">
              Lassen Sie uns gemeinsam Ihre perfekte Feier planen. Wir beraten Sie gerne persönlich und schneiden die
              Feier auf Ihre Wünsche zu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="px-8">
                <Utensils className="w-5 h-5 mr-2" />
                Kostenlos anfragen
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                +49 9131 7665-0
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vacation Banner */}
      <VacationBanner />
    </div>
  );
};
export default Feiern;
