import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Heart, Clock, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-gasthof.jpg";
const About = () => {
  const familyMembers = [{
    name: "Hans Ritter",
    role: "Geschäftsführer",
    description: "Führt das Familienunternehmen in dritter Generation mit Leidenschaft für fränkische Traditionen."
  }, {
    name: "Maria Ritter",
    role: "Küchenchefin",
    description: "Zaubert mit regionalen Zutaten authentische fränkische Gerichte und moderne Interpretationen."
  }, {
    name: "Thomas Ritter",
    role: "Hoteldirektor",
    description: "Sorgt für den perfekten Aufenthalt unserer Gäste und leitet unser herzliches Serviceteam."
  }];
  const milestones = [{
    year: "1847",
    event: "Gründung des Gasthofs durch Johann Ritter"
  }, {
    year: "1923",
    event: "Übernahme durch die zweite Generation"
  }, {
    year: "1975",
    event: "Erweiterung um den Hotelbetrieb"
  }, {
    year: "1998",
    event: "Umfassende Renovierung und Modernisierung"
  }, {
    year: "2015",
    event: "Auszeichnung 'Fränkischer Gasthof des Jahres'"
  }, {
    year: "2024",
    event: "Heute: Tradition trifft Moderne unter der dritten Generation"
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Geschichte Gasthof Ritter St. Georg - Traditionelle fränkische Gastlichkeit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">
            Über uns
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">135+ Jahre fränkische Gastlichkeit - Eine Familientradition mit Herz und Geschichte</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Unsere Geschichte
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seit 1847 steht der Gasthof Ritter St. Georg für echte fränkische Gastlichkeit. 
                Was als kleine Gaststätte begann, ist heute ein renommiertes Gasthaus mit Hotel, 
                das von der Familie Ritter in dritter Generation geführt wird.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  Tradition mit Herz
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Johann Ritter gründete 1847 unseren Gasthof mit der Vision, Menschen aus nah und fern 
                  zusammenzubringen und ihnen ein Stück fränkische Heimat zu bieten. Diese Philosophie 
                  leben wir noch heute - mit authentischen Rezepten, regionalen Produkten und der 
                  herzlichen Art, die Franken so besonders macht.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Über die Generationen hinweg haben wir uns stetig weiterentwickelt, ohne dabei 
                  unsere Wurzeln zu vergessen. Heute vereinen wir traditionelle fränkische Küche 
                  mit modernem Komfort und zeitgemäßem Service.
                </p>
              </div>
              <div className="space-y-6">
                {[{
                icon: Heart,
                text: "Familientradition seit 1847"
              }, {
                icon: Award,
                text: "Ausgezeichnete fränkische Küche"
              }, {
                icon: Users,
                text: "Herzlicher, persönlicher Service"
              }, {
                icon: MapPin,
                text: "Mitten im Herzen Frankens"
              }].map((item, index) => <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-primary font-medium">{item.text}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Wichtige Meilensteine
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ein Blick auf die bewegte Geschichte unseres Familienunternehmens
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => <Card key={index} className="shadow-card hover:shadow-warm transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold text-sm text-center">
                          {milestone.year}
                        </span>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-primary font-medium leading-relaxed">
                          {milestone.event}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Family Team */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Die Familie Ritter
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lernen Sie die Menschen kennen, die mit Leidenschaft für Ihr Wohlbefinden sorgen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {familyMembers.map((member, index) => <Card key={index} className="text-center shadow-card hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-warm">
            <CardContent className="p-12 text-center">
              <Clock className="w-16 h-16 mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Besuchen Sie uns
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Erleben Sie selbst, was fränkische Gastlichkeit bedeutet. 
                Wir freuen uns auf Ihren Besuch in unserem traditionsreichen Gasthof.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="accent" className="px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Kontakt aufnehmen
                </Button>
                <Button size="lg" variant="secondary" className="px-8">
                  <MapPin className="w-5 h-5 mr-2" />
                  Anfahrt planen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
export default About;