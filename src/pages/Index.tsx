import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Utensils, Bed, Star, Clock, MapPin } from "lucide-react";
import restaurantImage from "@/assets/restaurant-interior.jpg";
import hotelImage from "@/assets/hotel-room.jpg";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              Willkommen in der fränkischen Tradition
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Seit über 175 Jahren steht der Gasthof Ritter St. Georg für echte fränkische 
              Gastlichkeit. Bei uns erleben Sie traditionelle Küche, gemütliche Zimmer und 
              die herzliche Atmosphäre eines familiär geführten Hauses.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Restaurant Card */}
            <Card className="overflow-hidden shadow-card hover:shadow-warm transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={restaurantImage}
                  alt="Restaurant im Gasthof Ritter St. Georg - Traditionelle fränkische Küche"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-red/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-primary-foreground">
                  <Utensils className="w-6 h-6 mb-1" />
                  <h3 className="text-lg font-serif font-bold">Restaurant</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-3">
                  Fränkische Spezialitäten in gemütlicher Atmosphäre
                </p>
                <Button variant="default" className="w-full" size="sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Tisch reservieren
                </Button>
              </CardContent>
            </Card>

            {/* Feiern Card */}
            <Card className="overflow-hidden shadow-card hover:shadow-warm transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={restaurantImage}
                  alt="Feiern im Gasthof Ritter St. Georg - Hochzeiten und Familienfeiern"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-tone/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-primary-foreground">
                  <Star className="w-6 h-6 mb-1" />
                  <h3 className="text-lg font-serif font-bold">Feiern</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-3">
                  Hochzeiten, Familienfeiern & Events aus einer Hand
                </p>
                <Button variant="outline" className="w-full" size="sm">
                  Feier anfragen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Hotel Card */}
            <Card className="overflow-hidden shadow-card hover:shadow-warm transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={hotelImage}
                  alt="Hotelzimmer im Gasthof Ritter St. Georg - Komfortable Übernachtung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sand-tone/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-primary-foreground">
                  <Bed className="w-6 h-6 mb-1" />
                  <h3 className="text-lg font-serif font-bold">Hotel</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-3">
                  15 Zimmer nahe Siemens-Campus & Uni-Klinikum
                </p>
                <Button variant="accent" className="w-full" size="sm">
                  <Bed className="w-4 h-4 mr-2" />
                  Zimmer buchen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Was uns auszeichnet
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tradition trifft auf modernen Komfort - erleben Sie echte fränkische Gastlichkeit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Ausgezeichnete Küche</h3>
              <p className="text-muted-foreground">
                Traditionelle fränkische Spezialitäten mit frischen, regionalen Zutaten zubereitet
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Komfortable Zimmer</h3>
              <p className="text-muted-foreground">
                Gemütlich eingerichtete Zimmer mit allen modernen Annehmlichkeiten
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Perfekte Lage</h3>
              <p className="text-muted-foreground">
                Im Herzen Frankens gelegen - idealer Ausgangspunkt für Ihre Erkundungen
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
