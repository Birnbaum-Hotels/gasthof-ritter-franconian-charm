import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Users, MapPin, Calendar, Phone, Mail } from "lucide-react";
import restaurantImage from "@/assets/restaurant-interior.jpg";
import VacationBanner from "@/components/VacationBanner";

const Grillhuette = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={restaurantImage}
            alt="Grillhütte - Einzigartiges Ambiente für Feiern und Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Flame className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground mb-4">
            Grillhütte
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Für Feiern bis zu 15 Personen
          </p>
          <Button size="lg" variant="default" className="px-12 py-6 text-lg h-auto shadow-elegant hover:shadow-glow hover-scale">
            <Calendar className="w-6 h-6 mr-2" />
            Jetzt Grillhütte reservieren
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Flame className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
                  Ein unvergessliches Erlebnis
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Die Grillhütte kommt ursprünglich aus den Nordländern. Traditionell diente sie 
                    als Jagd-, Aufenthalts-, und Zufluchtshütte. Sie wurde zum Wärmen, Essen und 
                    Schlafen genutzt.
                  </p>
                  <p>
                    Erleben Sie ein unvergessliches Beisammensein in der Grillhütte. Winter wie 
                    Sommer ist die Grillhütte ein Garant für unvergessliche Stunden. Sitzen Sie mit 
                    bis zu 15 Personen in geselliger Runde um das offene Feuer und genießen die 
                    urig-gemütliche Atmosphäre. Sie werden bestimmt begeistert sein!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">
              Was macht die Grillhütte besonders?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-8">
                  <Flame className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Offenes Feuer
                  </h3>
                  <p className="text-muted-foreground">
                    Zentrale Feuerstelle zum Grillen von Steaks, Bratwürsten und anderen 
                    Spezialitäten
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Bis zu 15 Personen
                  </h3>
                  <p className="text-muted-foreground">
                    Perfekt für Familienfeste, Geburtstage, Kindergeburtstage oder kleine 
                    Firmenfeiern
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <MapPin className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Urige Atmosphäre
                  </h3>
                  <p className="text-muted-foreground">
                    Holzbänke, wärmende Schaffälle und gemütliches Ambiente für einzigartige 
                    Momente
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
                  Perfekt für jeden Anlass
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Urige Holzbänke, wärmende Schaffälle und eine zentrale Feuerstelle, auf der Sie 
                    herrlich duftende Steaks, Bratwürste und andere Spezialitäten grillen. Eine 
                    Atmosphäre in der es sich einfach einzigartig feiern lässt, das macht die 
                    Grillhütte nicht nur zur Alternative für Familienfeste, Geburtstage, 
                    Kindergeburtstage oder kleine Firmenfeiern, sondern eigentlich zum Muss!
                  </p>
                  <p>
                    Führen Sie Kamingespräche, Mitarbeitergespräche, halten Geschäftsmeetings oder 
                    Schulungen bei offenem Feuer in gemütlich entspannter Atmosphäre ab. So werden 
                    sich die Teilnehmer gerne daran erinnern und eine Nachhaltigkeit Ihres Events ist 
                    garantiert. Wir haben hier übrigens einen tollen Internetempfang.
                  </p>
                  <p>
                    Jeder kann unsere Grillhütte mieten, für jeden Anlass. Das Grillfleisch und 
                    Getränke werden auf Wunsch von uns gestellt, sie können jedoch auch von Ihnen 
                    mitgebracht werden.
                  </p>
                  <p className="font-semibold text-primary">
                    Gönnen Sie sich, Ihrer Familie, Ihren Freunden und Verwandten und auch Ihren 
                    Arbeitskollegen Entspannung, Ruhe und Gemütlichkeit. Vergessen Sie Ihren 
                    Alltagsstress bei uns!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Buchen Sie jetzt Ihr Grill-Event!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Die näheren Informationen über Buchung, Preise und Grillpaket senden wir Ihnen 
              gerne per Mail und Fax zu oder Sie schauen einfach mal vorbei.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="default" className="px-10 py-6 text-lg h-auto shadow-elegant hover:shadow-glow hover-scale">
                <Calendar className="w-6 h-6 mr-2" />
                Grillhütte reservieren
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg h-auto" asChild>
                <a href="/contact">
                  <Mail className="w-6 h-6 mr-2" />
                  Anfrage senden
                </a>
              </Button>
            </div>

            <Card className="bg-muted/50 border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+4991317665-0" className="hover:text-primary transition-colors">
                      +49 9131 7665-0
                    </a>
                  </div>
                  <span className="hidden sm:inline text-muted-foreground/50">•</span>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:ritter@birnbaum-hotels.de" className="hover:text-primary transition-colors">
                      ritter@birnbaum-hotels.de
                    </a>
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

export default Grillhuette;
