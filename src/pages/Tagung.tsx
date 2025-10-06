import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Wifi, Coffee, Car, Video, Users, Download, Phone } from "lucide-react";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const Tagung = () => {
  const packages = [
    {
      name: "Basic Tagung",
      description: "Alles für Ihre Besprechung",
      price: "ab 18€",
      features: ["Tagungsraum bis 8h", "WLAN Premium", "Beamer & Flipchart", "2 Kaffeepausen", "Mineralwasser"],
      popular: false
    },
    {
      name: "Business Premium",
      description: "Komplett-Paket für Ihren Erfolg",
      price: "ab 32€",
      features: ["Tagungsraum ganztägig", "3-Gang Business-Lunch", "Hybrid-Call Equipment", "Parkplatz inkl.", "Abend-Menü optional"],
      popular: true
    },
    {
      name: "Siemens Campus Special",
      description: "Speziell für Siemens-Mitarbeiter",
      price: "ab 28€",
      features: ["10% Firmenrabatt", "Express Check-in", "Shuttle auf Anfrage", "Rechnung mit Kostenstelle", "Flexible Stornierung"],
      popular: false
    }
  ];

  const rooms = [
    {
      name: "Konferenzraum Georg",
      capacity: "8-12 Personen",
      size: "25 m²",
      features: ["U-Form", "Boardroom", "Präsentation"]
    },
    {
      name: "Seminarraum Ritter", 
      capacity: "15-25 Personen",
      size: "40 m²",
      features: ["Parlament", "U-Form", "Bankett", "Stehempfang"]
    },
    {
      name: "Tagungsraum Franken",
      capacity: "20-40 Personen", 
      size: "65 m²",
      features: ["Parlament", "U-Form", "Bankett", "Gala", "Hybrid-Setup"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={restaurantImage}
            alt="Tagungsräume im Gasthof Ritter St. Georg - Seminare und Firmenmeetings"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">
            Tagung & Firmenevents
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Ihre Tagung nahe Siemens-Campus – verlässlich, flexibel, fränkisch
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Ihr Tagungserfolg ist unser Ziel
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Nur 5 Minuten vom Siemens-Campus entfernt bieten wir moderne Tagungstechnik 
              in traditioneller Atmosphäre - mit fränkischer Küche und kostenfreien Parkplätzen.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Nähe Siemens-Campus</h3>
              <p className="text-sm text-muted-foreground">Nur 5 Min. Fahrtzeit vom Campus Süd</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Kostenlose Parkplätze</h3>
              <p className="text-sm text-muted-foreground">Direkt vor dem Haus - entspannt ankommen</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Hybrid-Meetings</h3>
              <p className="text-sm text-muted-foreground">Professionelle Video-Konferenztechnik</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Fränkische Küche</h3>
              <p className="text-sm text-muted-foreground">Regional & authentisch - auch vegetarisch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Unsere Tagungsräume
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible Raumkonzepte für 8 bis 40 Teilnehmer mit moderner Ausstattung
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {rooms.map((room, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{room.name}</CardTitle>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{room.capacity}</span>
                    <span>{room.size}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-tone">Bestuhlung:</p>
                    <div className="flex flex-wrap gap-1">
                      {room.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="px-8">
              <Download className="w-5 h-5 mr-2" />
              Bestuhlungspläne downloaden (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Unsere Tagungspauschalen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Alles aus einer Hand - transparent kalkuliert, professionell durchgeführt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`shadow-card relative ${pkg.popular ? 'ring-2 ring-wine-red' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-wine-red text-white">
                    Empfohlen
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-primary">{pkg.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  <div className="text-3xl font-bold text-wine-red mt-4">{pkg.price}</div>
                  <p className="text-xs text-muted-foreground">pro Person/Tag</p>
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
                  <Button variant={pkg.popular ? "default" : "outline"} className="w-full">
                    Pauschale anfragen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Equipment */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Technik & Ausstattung
              </h2>
              <p className="text-muted-foreground">
                Moderne Präsentationstechnik für erfolgreiche Meetings
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-wine-red" />
                    Präsentation & AV
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 4K Beamer in allen Räumen</li>
                    <li>• 65" Displays für Hybrid-Calls</li>
                    <li>• Professionelle Lautsprecher</li>
                    <li>• Flipchart & Moderatorenkoffer</li>
                    <li>• HDMI, USB-C, Wireless Präsentation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-wine-red" />
                    Internet & Kommunikation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• WLAN mit 100 Mbit/s Premium</li>
                    <li>• Separate Netzwerke für Gäste</li>
                    <li>• Microsoft Teams & Zoom zertifiziert</li>
                    <li>• Telefonkonferenz-Equipment</li> 
                    <li>• Stromanschlüsse an jedem Platz</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Ihre Tagung anfragen
            </h2>
            <p className="text-muted-foreground mb-8">
              Wir erstellen Ihnen gerne ein individuelles Angebot für Ihre Firmenveranstaltung, 
              Schulung oder Tagung. Rufen Sie uns an oder senden Sie uns eine Anfrage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="px-8">
                <Users className="w-5 h-5 mr-2" />
                Angebot anfordern
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Phone className="w-5 h-5 mr-2" />
                +49 9131 123456
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Antwort innerhalb von 2 Stunden • Kostenlose Stornierung bis 24h vorher
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tagung;