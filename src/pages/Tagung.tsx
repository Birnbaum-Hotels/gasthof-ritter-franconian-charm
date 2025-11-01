import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Phone, Mail, Wifi, Tv, Monitor } from "lucide-react";
import hotelImage from "@/assets/hotel-room.jpg";
import VacationBanner from "@/components/VacationBanner";

const Tagung = () => {
  const rooms = [
    {
      setup: "U-Form",
      capacity: "bis zu 15 Personen"
    },
    {
      setup: "Parlamentarisch",
      capacity: "bis zu 15 Personen"
    },
    {
      setup: "Kino-Bestuhlung",
      capacity: "bis zu 20 Personen"
    }
  ];

  const pricing = [
    {
      name: "Raummiete ganztägig",
      description: "ab 4 Stunden",
      price: "€ 90,-"
    },
    {
      name: "Raummiete bis 4 Stunden",
      description: "",
      price: "€ 50,-"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={hotelImage}
            alt="Tagungsraum im Gasthof Ritter St. Georg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">
            Tagungen & Konferenzen
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Professionelle Tagungsräume mit moderner Ausstattung
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Unser komfortabler Tagungsraum bietet ausreichend Platz für etwa 15-20 Personen. Viel Tageslicht verleiht dem Raum die richtige Atmosphäre für erfolgreiche Projekte. Die notwendigen technischen Voraussetzungen wie Fernseher, Overheadprojektor, Leinwände, Flipchart, usw. sind selbstverständlich auch vorort vorhanden.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Über unsere WLAN-Anlage haben Sie einen schnellen und zuverlässigen Internetzugang. Die variabel einsetzbare Möblierung stimmen wir ganz individuell auf Ihre Bedürfnisse ab.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Wir erstellen Ihnen gerne ein Angebot oder senden Ihnen unsere Preisliste zu.
            </p>
          </div>
        </div>
      </section>

      {/* Room Configurations */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Konferenzraum
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible Bestuhlung für Ihre Anforderungen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {rooms.map((room, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">{room.setup}</h3>
                    <p className="text-muted-foreground">{room.capacity}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Preise
              </h2>
            </div>

            <div className="space-y-4">
              {pricing.map((item, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                        {item.description && (
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        )}
                      </div>
                      <div className="text-2xl font-bold text-primary">{item.price}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Equipment */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Technische Ausstattung
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Tv className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Präsentation</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Fernseher</li>
                      <li>Overheadprojektor</li>
                      <li>Leinwände</li>
                      <li>Flipchart</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Wifi className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Internet</h3>
                    <p className="text-sm text-muted-foreground">
                      WLAN-Anlage für schnellen und zuverlässigen Internetzugang
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Möblierung</h3>
                    <p className="text-sm text-muted-foreground">
                      Variabel einsetzbar, individuell auf Ihre Bedürfnisse abgestimmt
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Kontaktieren Sie uns noch heute!
            </h2>
            <p className="text-muted-foreground mb-8">
              Wir erstellen Ihnen gerne ein individuelles Angebot oder senden Ihnen unsere Preisliste zu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="px-8">
                <Mail className="w-5 h-5 mr-2" />
                Anfrage senden
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Phone className="w-5 h-5 mr-2" />
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

export default Tagung;