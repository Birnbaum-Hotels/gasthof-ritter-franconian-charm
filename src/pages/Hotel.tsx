import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Wifi, Car, Coffee, Star, Users, Calendar } from "lucide-react";
import hotelImage from "@/assets/hotel-room.jpg";

const Hotel = () => {
  const roomTypes = [
    {
      name: "Einzelzimmer Standard",
      description: "Gemütlich eingerichtetes Zimmer mit allen Annehmlichkeiten",
      size: "18m²",
      guests: 1,
      price: "75€",
      features: ["Dusche/WC", "TV", "WLAN", "Schreibtisch"],
      popular: false
    },
    {
      name: "Doppelzimmer Komfort",
      description: "Geräumiges Zimmer mit traditionellem fränkischen Charme",
      size: "24m²", 
      guests: 2,
      price: "95€",
      features: ["Dusche/WC", "TV", "WLAN", "Sitzecke", "Minibar"],
      popular: true
    },
    {
      name: "Familienzimmer",
      description: "Großzügiges Zimmer für Familien mit separatem Kinderbereich",
      size: "32m²",
      guests: 4,
      price: "140€",
      features: ["Dusche/WC", "TV", "WLAN", "Kinderbett", "Spielecke", "Minibar"],
      popular: false
    }
  ];

  const amenities = [
    { icon: Wifi, name: "Kostenloses WLAN" },
    { icon: Car, name: "Kostenloser Parkplatz" },
    { icon: Coffee, name: "Frühstücksbuffet" },
    { icon: Bed, name: "Komfortable Betten" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={hotelImage}
            alt="Hotel Gasthof Ritter St. Georg - Komfortable Zimmer in Franken"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">
            Hotel
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Gemütliche Zimmer mit traditionellem Charme und modernem Komfort im Herzen Frankens
          </p>
        </div>
      </section>

      {/* Hotel Info */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Ihr Zuhause auf Zeit
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Unsere 15 liebevoll eingerichteten Zimmer bieten Ihnen die perfekte 
              Kombination aus traditionellem fränkischen Charme und modernem Komfort. 
              Genießen Sie einen erholsamen Aufenthalt in familiärer Atmosphäre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="accent" className="px-8" asChild>
                <a href="https://booking.roomraccoon.de/ritter-st-georg/" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Zimmer buchen
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="px-8">
                <Users className="w-5 h-5 mr-2" />
                Verfügbarkeit prüfen
              </Button>
            </div>
          </div>

          {/* Amenities */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {amenities.map((amenity, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <amenity.icon className="w-8 h-8 mx-auto text-primary mb-3" />
                  <p className="text-sm font-medium text-primary">{amenity.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Unsere Zimmer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wählen Sie aus unseren komfortablen Zimmern das perfekte für Ihren Aufenthalt
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid gap-8">
            {roomTypes.map((room, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-warm transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={hotelImage}
                      alt={`${room.name} - Gasthof Ritter St. Georg`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-primary">
                            {room.name}
                          </h3>
                          {room.popular && (
                            <Badge variant="secondary">
                              Beliebt
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-2">
                          {room.description}
                        </p>
                        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                          <span>{room.size}</span>
                          <span>• {room.guests} {room.guests === 1 ? 'Person' : 'Personen'}</span>
                        </div>
                      </div>
                      <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {room.price}
                      </div>
                        <div className="text-sm text-muted-foreground">
                          pro Nacht
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-primary mb-2">Ausstattung:</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <Button variant="accent" className="flex-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        Jetzt buchen
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Details ansehen
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Besondere Angebote
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie unsere aktuellen Pakete und Sonderangebote
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-secondary" />
                  Fränkisches Genießer-Wochenende
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  2 Übernachtungen inkl. Frühstück, 3-Gang-Menü am Abend und regionale Spezialitäten
                </p>
                <div className="text-2xl font-bold text-primary mb-4">
                  ab 180€ <span className="text-sm font-normal text-muted-foreground">pro Person</span>
                </div>
                <Button variant="secondary" className="w-full">
                  Paket buchen
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  Familienurlaub in Franken
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  3 Tage für die ganze Familie mit Ausflugstipps und Kindermenü im Restaurant
                </p>
                <div className="text-2xl font-bold text-primary mb-4">
                  ab 320€ <span className="text-sm font-normal text-muted-foreground">Familie (4 Pers.)</span>
                </div>
                <Button variant="secondary" className="w-full">
                  Paket buchen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotel;