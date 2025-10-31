import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Bed, Wifi, Car, Coffee, Calendar, PawPrint, Ban, Baby, Users } from "lucide-react";
import hotelImage from "@/assets/hotel-room.jpg";

interface RoomType {
  name: string;
  description: string;
  size: string;
  guests: number;
  features: string[];
  fullDescription?: string;
}

const Hotel = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  
  const roomTypes: RoomType[] = [
    {
      name: "Einzelzimmer Komfort",
      description: "Modern eingerichtetes und geräumiges Nichtraucherzimmer",
      size: "18m²",
      guests: 1,
      features: [
        "Badezimmer mit Dusche/WC",
        "Großer Spiegel, Föhn und Kosmetikartikel",
        "Schreibtisch",
        "Flat Screen TV",
        "Selbstwähltelefon",
        "Zimmer mit Teppichboden",
        "Kostenloses W-LAN",
        "Garderobe mit Spiegel"
      ],
      fullDescription: "Dieses modern eingerichtete und geräumige Nichtraucherzimmer bietet Ihnen kostenfreies W-LAN, Sat-TV, Radiowecker, Telefon, Garderobe mit Spiegel, Badezimmer mit Dusche - teilweise Badewanne, Kosmetikartikel, Föhn und Minibar"
    },
    {
      name: "Doppelzimmer Komfort",
      description: "Modern eingerichtetes und geräumiges Nichtraucherzimmer",
      size: "24m²",
      guests: 2,
      features: [
        "Badezimmer mit Dusche/WC",
        "Großer Spiegel, Föhn und Kosmetikartikel",
        "Schreibtisch",
        "Flat Screen TV",
        "Selbstwähltelefon",
        "Zimmer mit Teppichboden",
        "Kostenloses W-LAN",
        "Garderobe mit Spiegel",
        "Minibar"
      ],
      fullDescription: "Dieses modern eingerichtete und geräumige Nichtraucherzimmer bietet Ihnen kostenfreies W-LAN, Sat-TV, Radiowecker, Telefon, Garderobe mit Spiegel, Badezimmer mit Dusche, Kosmetikartikel, Föhn und Minibar"
    },
    {
      name: "Dreibettzimmer",
      description: "Modern eingerichtetes und geräumiges Nichtraucherzimmer",
      size: "26m²",
      guests: 3,
      features: [
        "Badezimmer mit Dusche/WC",
        "Großer Spiegel, Föhn und Kosmetikartikel",
        "Schreibtisch",
        "Flat Screen TV",
        "Selbstwähltelefon",
        "Zimmer mit Teppichboden",
        "Kostenloses W-LAN",
        "Garderobe mit Spiegel",
        "Minibar"
      ],
      fullDescription: "Dieses modern eingerichtete und geräumige Nichtraucherzimmer bietet Ihnen kostenfreies W-LAN, Sat-TV, Radiowecker, Telefon, Garderobe mit Spiegel, Badezimmer mit Dusche, Kosmetikartikel, Föhn und Minibar"
    },
    {
      name: "Vierbettzimmer / Suite",
      description: "Großzügige Suite mit Wohncharakter für bis zu 4 Personen",
      size: "30m²",
      guests: 4,
      features: [
        "Schreibtisch",
        "Kostenloses W-LAN",
        "Zimmergröße von 30 m²",
        "Aufteilung auf zwei Räume",
        "Gemütliche Sitzecke",
        "Badezimmer mit Dusche",
        "Kosmetikartikel, Föhn und Minibar"
      ],
      fullDescription: "Die Suiten haben Wohncharakter und bieten großzügig Platz für bis zu 4 Personen. Die Ausstattung mit Schreibtisch, kostenlosem WLAN, einer Zimmergröße von 30 m², einer Aufteilung auf zwei Räume und mit einer gemütlichen Sitzecke garantiert einen entspannten Aufenthalt. Immer mit Dusche, Kosmetikartikel, Föhn und Minibar"
    },
    {
      name: "Doppelzimmer Premium",
      description: "Modern eingerichtetes und geräumiges Nichtraucherzimmer",
      size: "26m²",
      guests: 2,
      features: [
        "Badezimmer mit Dusche/WC",
        "Großer Spiegel, Föhn und Kosmetikartikel",
        "Schreibtisch",
        "Flat Screen TV",
        "Selbstwähltelefon",
        "Zimmer mit Teppichboden",
        "Kostenloses W-LAN",
        "Garderobe mit Spiegel",
        "Minibar",
        "Teilweise Badewanne"
      ],
      fullDescription: "Dieses modern eingerichtete und geräumige Nichtraucherzimmer bietet Ihnen kostenfreies W-LAN, Sat-TV, Radiowecker, Telefon, Garderobe mit Spiegel, Badezimmer mit Dusche - teilweise Badewanne, Kosmetikartikel, Föhn und Minibar"
    },
    {
      name: "Familienzimmer",
      description: "Großzügiges Zimmer mit Wohncharakter für bis zu 6 Personen",
      size: "40m²",
      guests: 6,
      features: [
        "Schreibtisch",
        "Kostenloses W-LAN",
        "Zimmergröße von 40 m²",
        "Aufteilung auf zwei Räume",
        "Sitzgelegenheit mit Tisch",
        "Badezimmer mit Dusche",
        "Kosmetikartikel, Föhn und Minibar"
      ],
      fullDescription: "Die Familienzimmer haben Wohncharakter und bieten großzügig Platz für bis zu 6 Personen. Die Ausstattung mit Schreibtisch, kostenlosem WLAN, einer Zimmergröße von 40 m², einer Aufteilung auf zwei Räume und mit einer Sitzgelegenheit mit Tisch garantiert einen entspannten Aufenthalt."
    }
  ];

  const amenities = [
    { icon: Wifi, name: "Kostenloses WLAN" },
    { icon: Car, name: "Kostenloser Parkplatz" },
    { icon: Coffee, name: "Frühstücksbuffet" },
    { icon: Bed, name: "Komfortable Betten" }
  ];

  const handleBooking = () => {
    window.open("https://booking.roomraccoon.de/ritter-st-georg/", "_blank");
  };

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
            <p className="text-lg text-muted-foreground mb-4">
              In ruhiger Lage, direkt hinter dem Gasthaus finden Sie unsere Gästehäuser. 
              Geschmackvoll eingerichtete 22 Gästezimmer, 10 Einzelzimmer, 10 Doppelzimmer 
              und eine Suite, lassen keine Wünsche offen.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Für Familien stehen Zimmer mit drei und vier Betten zur Verfügung (auch mit Verbindungstür). 
              Weiterhin sind Allergikerzimmer und ein behindertengerechtes Zimmer vorhanden.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="accent" className="px-8" onClick={handleBooking}>
                <Calendar className="w-5 h-5 mr-2" />
                Zimmer buchen
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
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {room.name}
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          {room.description}
                        </p>
                        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                          <span>{room.size}</span>
                          <span>• bis zu {room.guests} {room.guests === 1 ? 'Person' : 'Personen'}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-primary mb-2">Ausstattung:</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.features.slice(0, 4).map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {room.features.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{room.features.length - 4} weitere
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <Button variant="accent" className="flex-1" onClick={handleBooking}>
                        <Calendar className="w-4 h-4 mr-2" />
                        Jetzt buchen
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setSelectedRoom(room)}
                      >
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

      {/* Additional Information */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
              Wichtige Informationen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-primary" />
                    Frühstück
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    In einem geschmackvoll eingerichteten Frühstücksraum wird Ihnen das Frühstück serviert, 
                    so richtig zum Sattessen. Duftender Kaffee, würziger Tee oder heiße Schokolade, 
                    Ei, Käse und Wurst so viel Sie mögen.
                  </p>
                  <p className="font-semibold text-primary">
                    Preis: 9,80 € pro Person pro Nacht
                  </p>
                  <p className="text-sm">
                    Bei schönem Wetter können Sie auf der sonnigen Frühstücksterrasse frühstücken.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Ban className="w-5 h-5 text-primary" />
                    Nichtraucher-Haus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    Das Restaurant und Hotel Ritter St. Georg ist ein Nichtraucher-Haus.
                  </p>
                  <p>
                    Alle Zimmer sind Nichtraucherzimmer mit Teppichboden und moderner Ausstattung.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PawPrint className="w-5 h-5 text-primary" />
                    Haustiere
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    Haustiere sind erlaubt, bitte geben Sie diese jedoch bei der Buchung an.
                  </p>
                  <p className="font-semibold text-primary">
                    Preis: 7,50 € pro Nacht / pro Haustier
                  </p>
                  <p className="text-sm">
                    Bitte bringen Sie Korb & Schlafdecke sowie Futter selber mit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Baby className="w-5 h-5 text-primary" />
                    Familien
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    Kinder im Elternbett kostenlos.
                  </p>
                  <p>
                    Auf Wunsch bieten wir Ihnen auch das Zustellen eines Babybetts an.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-primary" />
                  Zusätzliche Leistungen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Garage pro Nacht</span>
                    <span className="font-semibold text-primary">15,00 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Frühstücksbuffet pro Person</span>
                    <span className="font-semibold text-primary">9,80 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Haustierpauschale pro Nacht</span>
                    <span className="font-semibold text-primary">7,50 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Frühstück für nicht übernachtenden Gast</span>
                    <span className="font-semibold text-primary">12,00 €</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Unsere Zimmerpreise beinhalten Dusche, WC, Telefon, TV, kostenloses W-LAN und Parkplatz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Room Details Dialog */}
      <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">{selectedRoom?.name}</DialogTitle>
            <DialogDescription>
              {selectedRoom?.size} • bis zu {selectedRoom?.guests} {selectedRoom?.guests === 1 ? 'Person' : 'Personen'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-primary mb-2">Beschreibung</h4>
              <p className="text-muted-foreground">
                {selectedRoom?.fullDescription || selectedRoom?.description}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-3">Vollständige Ausstattung</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {selectedRoom?.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button variant="accent" className="w-full" onClick={handleBooking}>
                <Calendar className="w-4 h-4 mr-2" />
                Jetzt buchen
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hotel;
