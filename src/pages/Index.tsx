import HeroSection from "@/components/HeroSection";
import QuickLinks from "@/components/QuickLinks";
import StickyBookingBar from "@/components/StickyBookingBar";
import Gallery from "@/components/Gallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Utensils, Bed, Star, Clock, MapPin } from "lucide-react";
import restaurantImage from "@/assets/restaurant-interior.jpg";
import hotelImage from "@/assets/hotel-room.jpg";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Links */}
      <QuickLinks />

      {/* Sticky Booking Bar - positioned after hero on desktop */}
      <div className="hidden md:block">
        <StickyBookingBar />
      </div>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
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
                  alt="Restaurant im Gasthof Ritter St. Georg - Traditionelle fränkische Küche in Erlangen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
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
                  alt="Feiern im Gasthof Ritter St. Georg - Hochzeiten und Familienfeiern in Erlangen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
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
                  alt="Hotelzimmer im Gasthof Ritter St. Georg - Komfortable Übernachtung in Erlangen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <Bed className="w-6 h-6 mb-1" />
                  <h3 className="text-lg font-serif font-bold">Hotel</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-3">
                  15 Zimmer nahe Siemens-Campus & Uni-Klinikum
                </p>
                <Button variant="default" className="w-full" size="sm">
                  <Bed className="w-4 h-4 mr-2" />
                  Zimmer buchen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* USP Bar */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-center text-foreground">
            <div className="flex items-center gap-2">
              <Utensils className="w-5 h-5" />
              <span className="text-sm font-medium">Fränkische Küche</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">Eigener Biergarten</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Nähe Siemens-Campus & Uni-Klinikum</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Kostenlose Parkplätze</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Trust & Reviews */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Was unsere Gäste sagen
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-foreground">4.8</span>
                <span className="text-muted-foreground">aus 150+ Bewertungen</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    "Ausgezeichnete fränkische Küche in gemütlicher Atmosphäre. 
                    Das Schäuferla war perfekt und der Service sehr freundlich."
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Familie M.</span> • Google Bewertung
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    "Perfekt für Geschäftsreisen. Nah am Siemens-Campus, 
                    saubere Zimmer und hervorragendes Frühstück."
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Thomas K.</span> • Google Bewertung
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    "Unsere Hochzeit war traumhaft! Rundum-Service, 
                    tolles Essen und wunderschöne Räumlichkeiten."
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Sarah & Michael</span> • Google Bewertung
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">Vertrauen Sie auf über 150 positive Bewertungen</p>
              <Button variant="outline" asChild>
                <a 
                  href="https://www.google.com/search?q=Gasthof+Ritter+St.+Georg+Erlangen" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer"
                >
                  Alle Bewertungen auf Google ansehen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Perfekte Lage in Erlangen
              </h2>
              <p className="text-muted-foreground">
                Zentral gelegen zwischen Siemens-Campus und Uni-Klinikum
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Siemens-Campus</h3>
                      <p className="text-muted-foreground text-sm">
                        Nur 5 Minuten Fahrtzeit zum Siemens-Campus Süd. 
                        Ideal für Geschäftsreisende und Tagungen.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bed className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Uni-Klinikum</h3>
                      <p className="text-muted-foreground text-sm">
                        10 Minuten zum Universitätsklinikum. 
                        Flexible Aufenthalte für Angehörige und Besucher.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Verkehrsanbindung</h3>
                      <p className="text-muted-foreground text-sm">
                        A3/A73 in 15 Minuten. Busverbindung zur Innenstadt. 
                        Kostenlose Parkplätze direkt am Haus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <div className="aspect-video bg-white border rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Google Maps Integration</p>
                    <p className="text-xs">Interaktive Karte</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Herzogenauracher Damm 11, 91058 Erlangen, Germany
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=Herzogenauracher+Damm+11,+91058+Erlangen,+Germany" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Route planen
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Booking Bar - fixed at bottom on mobile */}
      <div className="md:hidden">
        <StickyBookingBar />
      </div>
    </>
  );
};

export default Index;
