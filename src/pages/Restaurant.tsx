import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ShoppingCart, Star, Utensils, Flame, ArrowRight } from "lucide-react";
import restaurantImage from "@/assets/restaurant-interior.jpg";
import VacationBanner from "@/components/VacationBanner";

const Restaurant = () => {
  const menuCategories = [
    {
      name: "Fränkische Vorspeisen",
      items: [
        { name: "Leberwurst mit Zwiebeln", description: "Hausgemachte Leberwurst mit gerösteten Zwiebeln", price: "8,50€", popular: true },
        { name: "Fränkische Brotzeit", description: "Auswahl regionaler Wurst- und Käsespezialitäten", price: "12,90€" },
        { name: "Saure Zipfel", description: "Bratwürste in Zwiebel-Essig-Sud", price: "9,80€" }
      ]
    },
    {
      name: "Hauptgerichte",
      items: [
        { name: "Schäuferla", description: "Schweineschulter mit Kloß und Kraut", price: "16,50€", popular: true },
        { name: "Sauerbraten", description: "Mit Rotkohl und Klößen", price: "18,90€" },
        { name: "Forelle Müllerin", description: "Frische Forelle aus heimischen Gewässern", price: "19,50€" },
        { name: "Wiener Schnitzel", description: "Klassisch paniert mit Bratkartoffeln", price: "17,80€" }
      ]
    },
    {
      name: "Desserts",
      items: [
        { name: "Apfelstrudel", description: "Mit Vanilleeis und Sahne", price: "6,50€" },
        { name: "Dampfnudel", description: "Mit Vanillesauce oder Zwetschgenkompott", price: "5,90€" }
      ]
    }
  ];
  

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={restaurantImage}
            alt="Restaurant Gasthof Ritter St. Georg - Traditionelle fränkische Küche"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">
            Restaurant
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Authentische fränkische Küche mit Liebe zur Tradition und frischen, regionalen Zutaten
          </p>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Fränkische Küche mit Tradition
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Unser Restaurant bietet Ihnen eine gemütliche Atmosphäre und die besten 
              fränkischen Spezialitäten. Von traditionellen Gerichten bis zu modernen 
              Interpretationen regionaler Klassiker.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="default" className="px-8 shadow-elegant hover:shadow-glow hover-scale" asChild>
                <a href="https://www.google.com/maps/reserve/v/dine/c/FEVKeqdKz-M" target="_blank" rel="noopener noreferrer">
                  <Users className="w-5 h-5 mr-2" />
                  Tisch reservieren
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="px-8">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Online bestellen
              </Button>
            </div>
          </div>

          {/* Opening Hours & Info */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-8 h-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Öffnungszeiten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dienstag - Sonntag<br />
                  17:00 - 22:00 Uhr<br />
                  <span className="font-semibold">Montag Ruhetag</span>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Utensils className="w-8 h-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Küchenstil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Traditionell fränkisch<br />
                  Regionale Spezialitäten<br />
                  <span className="font-semibold">Frische Zutaten</span>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="w-8 h-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Bewertung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  4.8/5 Sterne<br />
                  150+ Bewertungen<br />
                  <span className="font-semibold">Ausgezeichnet</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dining Rooms Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Unsere Gaststuben
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie unsere verschiedenen Räumlichkeiten - jede mit eigenem Charakter und Charme
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Urige Stube */}
            <Card className="overflow-hidden shadow-warm">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={restaurantImage} 
                    alt="Urige Stube" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <CardTitle className="text-2xl font-serif mb-4">Urige Stube</CardTitle>
                  <p className="text-muted-foreground mb-6">
                    [Beschreibung folgt - Atmosphäre und Besonderheiten der Urigen Stube]
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Kapazität: [XX Personen]</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Ambiente: [Beschreibung folgt]</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Utensils className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Ideal für: [Anlässe folgen]</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Regnitzsalon */}
            <Card className="overflow-hidden shadow-warm">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto md:order-2">
                  <img 
                    src={restaurantImage} 
                    alt="Regnitzsalon" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center md:order-1">
                  <CardTitle className="text-2xl font-serif mb-4">Regnitzsalon</CardTitle>
                  <p className="text-muted-foreground mb-6">
                    [Beschreibung folgt - Atmosphäre und Besonderheiten des Regnitzsalons]
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Kapazität: [XX Personen]</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Ambiente: [Beschreibung folgt]</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Utensils className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Ideal für: [Anlässe folgen]</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Schwarz-Weiß-Stube */}
            <Card className="overflow-hidden shadow-warm">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={restaurantImage} 
                    alt="Schwarz-Weiß-Stube" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <CardTitle className="text-2xl font-serif mb-4">Schwarz‑Weiß‑Stube</CardTitle>
                  <p className="text-muted-foreground mb-6">
                    [Beschreibung folgt - Atmosphäre und Besonderheiten der Schwarz-Weiß-Stube]
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Kapazität: [XX Personen]</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Ambiente: [Beschreibung folgt]</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Utensils className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Ideal für: [Anlässe folgen]</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Grillhütte Highlight */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-warm border-primary/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={restaurantImage} 
                    alt="Grillhütte - Einzigartiges Grillerlebnis" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-warm">
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full mb-4 w-fit">
                    <Flame className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-primary">Besonderes Erlebnis</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                    Unsere Grillhütte
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Erleben Sie ein unvergessliches Grillerlebnis am offenen Feuer. 
                    Perfekt für gesellige Runden bis zu 15 Personen in urig-gemütlicher Atmosphäre.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Flame className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Zentrale Feuerstelle zum Grillen</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Für bis zu 15 Personen</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Ganzjährig verfügbar</span>
                    </div>
                  </div>
                  <Button variant="default" size="lg" asChild className="w-full sm:w-auto">
                    <a href="/grillhuette">
                      Mehr zur Grillhütte
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Menu Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Unsere Speisekarte
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie unsere aktuelle Speisekarte mit allen fränkischen Spezialitäten
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <iframe
                  src="https://eat.allo.restaurant/restaurant/gasthof-ritter-sankt-georg-erlangen"
                  className="w-full h-[900px] md:h-[1100px] border-0"
                  title="Live Speisekarte – Gasthof Ritter St. Georg"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>

            <div className="text-center mt-6">
              <Button size="lg" variant="default" className="px-12 shadow-elegant hover:shadow-glow hover-scale" asChild>
                <a 
                  href="https://eat.allo.restaurant/restaurant/gasthof-ritter-sankt-georg-erlangen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Speisekarte in neuem Tab öffnen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Hinweis: Falls die eingebettete Ansicht nicht lädt, nutzen Sie bitte den Button.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vacation Banner */}
      <VacationBanner />
    </div>
  );
};

export default Restaurant;