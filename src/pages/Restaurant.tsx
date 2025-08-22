import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ShoppingCart, Star, Utensils } from "lucide-react";
import restaurantImage from "@/assets/restaurant-interior.jpg";

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
          <div className="absolute inset-0 bg-primary/70" />
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
              <Button size="lg" variant="accent" className="px-8">
                <Users className="w-5 h-5 mr-2" />
                Tisch reservieren
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

      {/* Menu Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Unsere Speisekarte
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Eine Auswahl unserer beliebtesten fränkischen Spezialitäten
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {menuCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-6 text-center">
                  {category.name}
                </h3>
                <div className="grid gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="shadow-card">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-lg font-semibold text-primary">
                                {item.name}
                              </h4>
                              {item.popular && (
                                <Badge variant="secondary" className="text-xs">
                                  Beliebt
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </div>
                          <div className="text-xl font-bold text-accent ml-4">
                            {item.price}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Möchten Sie unsere komplette Speisekarte sehen?
            </p>
            <Button variant="outline" size="lg">
              Vollständige Speisekarte (PDF)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;