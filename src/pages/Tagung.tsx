import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Phone, Mail, Wifi, Tv, Monitor, CheckCircle2, Calendar, Coffee } from "lucide-react";
import hotelImage from "@/assets/hotel-room.jpg";
import VacationBanner from "@/components/VacationBanner";
import { Link } from "react-router-dom";

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
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={hotelImage}
            alt="Tagungsraum im Gasthof Ritter St. Georg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
              Tagungen & Konferenzen
            </h1>
            <p className="text-2xl text-white/95 mb-8 leading-relaxed">
              Professionelle Tagungsräume mit moderner Ausstattung für bis zu 20 Personen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="px-10 py-6 text-lg shadow-elegant" asChild>
                <Link to="/contact">
                  <Calendar className="w-6 h-6 mr-2" />
                  Jetzt Anfragen
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg border-white text-white hover:bg-white hover:text-primary shadow-elegant">
                <Phone className="w-6 h-6 mr-2" />
                +49 9131 7665-0
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Ihr professioneller Tagungsraum
              </h2>
              <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="shadow-elegant border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">Helle Räume</h3>
                      <p className="text-muted-foreground">Viel Tageslicht für die richtige Atmosphäre</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-elegant border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">Moderne Technik</h3>
                      <p className="text-muted-foreground">Komplette technische Ausstattung inklusive</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-elegant border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">Flexibel</h3>
                      <p className="text-muted-foreground">Individuell anpassbare Bestuhlung</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="shadow-elegant bg-primary/5">
              <CardContent className="pt-8 pb-8">
                <p className="text-lg text-foreground leading-relaxed text-center">
                  Unser komfortabler Tagungsraum bietet ausreichend Platz für <strong className="text-primary">15-20 Personen</strong>. 
                  Über unsere WLAN-Anlage haben Sie einen schnellen und zuverlässigen Internetzugang. 
                  Die variabel einsetzbare Möblierung stimmen wir ganz individuell auf Ihre Bedürfnisse ab.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Room Configurations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Konferenzraum-Konfigurationen
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible Bestuhlung perfekt abgestimmt auf Ihre Anforderungen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rooms.map((room, index) => (
              <Card key={index} className="shadow-elegant hover-scale border-t-4 border-t-primary overflow-hidden group">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <Users className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">{room.setup}</h3>
                    <p className="text-lg text-muted-foreground font-medium">{room.capacity}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Transparente Preise
              </h2>
              <div className="w-24 h-1 bg-gradient-hero mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">
                Faire Konditionen für Ihre Veranstaltung
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pricing.map((item, index) => (
                <Card key={index} className="shadow-elegant hover-scale border-t-4 border-t-primary bg-card">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-center">
                      <div className="mb-4">
                        <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-foreground mb-2">{item.name}</h3>
                        {item.description && (
                          <p className="text-muted-foreground">{item.description}</p>
                        )}
                      </div>
                      <div className="text-4xl font-bold text-primary mt-6">{item.price}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 shadow-elegant bg-primary/10 border-primary/20">
              <CardContent className="pt-6 pb-6">
                <p className="text-center text-foreground font-medium">
                  <strong className="text-primary">Inkl. moderne technische Ausstattung</strong> · Kostenloser WLAN-Zugang · Flexible Möblierung
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Equipment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Technische Ausstattung
              </h2>
              <div className="w-24 h-1 bg-gradient-hero mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">
                Alles was Sie für eine erfolgreiche Tagung benötigen
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-elegant hover-scale border-t-4 border-t-primary group">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <Tv className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Präsentation</h3>
                    <ul className="text-left space-y-2 max-w-xs mx-auto">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>Fernseher</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>Overheadprojektor</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>Leinwände</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>Flipchart</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant hover-scale border-t-4 border-t-primary group">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <Wifi className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Internet</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Schnelle WLAN-Anlage für zuverlässigen Internetzugang während Ihrer gesamten Veranstaltung
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant hover-scale border-t-4 border-t-primary group">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <Monitor className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Möblierung</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Variabel einsetzbar und individuell auf Ihre Bedürfnisse abgestimmt
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Bereit für Ihre nächste Tagung?
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Wir erstellen Ihnen gerne ein individuelles Angebot oder senden Ihnen unsere Preisliste zu. 
              Kontaktieren Sie uns noch heute und sichern Sie sich Ihren Wunschtermin!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="default" className="px-12 py-7 text-lg shadow-elegant" asChild>
                <Link to="/contact">
                  <Mail className="w-6 h-6 mr-2" />
                  Anfrage senden
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-12 py-7 text-lg shadow-elegant border-2">
                <Phone className="w-6 h-6 mr-2" />
                +49 9131 7665-0
              </Button>
            </div>
            
            <Card className="mt-12 shadow-elegant bg-card/80 backdrop-blur">
              <CardContent className="pt-6 pb-6">
                <div className="flex flex-wrap justify-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Schnelle Rückmeldung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Individuelle Beratung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Faire Preise</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vacation Banner */}
      <VacationBanner />
    </div>
  );
};

export default Tagung;