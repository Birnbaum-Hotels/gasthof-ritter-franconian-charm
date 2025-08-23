import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Building, Stethoscope, Beer, Gift, Clock, MapPin } from "lucide-react";
import hotelImage from "@/assets/hotel-room.jpg";

const Angebote = () => {
  const seasonalOffers = [
    {
      title: "Bergkirchweih 2025",
      subtitle: "23. Mai - 8. Juni 2025",
      description: "Erleben Sie Erlangens 5. Jahreszeit direkt vom Hotel aus",
      icon: Beer,
      features: [
        "Mindestaufenthalt 2 Nächte", 
        "Frühstück ab 7:00 Uhr",
        "Bergkirchweih-Guide inklusive",
        "ÖPNV-Tageskarte pro Person",
        "Late Check-out bis 14:00 Uhr"
      ],
      price: "ab 89€",
      period: "pro Nacht/DZ",
      available: "Buchung ab Februar 2025",
      popular: true
    },
    {
      title: "Wochenend-Auszeit",
      subtitle: "Freitag bis Sonntag",
      description: "Entspannen Sie bei fränkischer Gemütlichkeit",
      icon: Heart,
      features: [
        "2 Übernachtungen inkl. Frühstück",
        "Willkommens-Apéritif im Biergarten", 
        "3-Gang Menü am Samstagabend",
        "Late Check-out bis 12:00 Uhr",
        "Kostenfreie Parkplätze"
      ],
      price: "ab 149€",
      period: "pro Person/2 Nächte",
      available: "Ganzjährig buchbar",
      popular: false
    }
  ];

  const businessOffers = [
    {
      title: "Siemens Campus Rate",
      description: "Speziell für Siemens-Mitarbeiter und Geschäftspartner",
      icon: Building,
      features: [
        "10% Firmenrabatt auf Übernachtung",
        "Express Check-in/Check-out",
        "Kostenloses WLAN Premium", 
        "Shuttle zum Campus (auf Anfrage)",
        "Rechnung mit Kostenstelle möglich"
      ],
      price: "ab 72€",
      period: "pro Nacht/EZ"
    },
    {
      title: "Klinik-Besucher Rate", 
      description: "Für Angehörige und Patienten des Uni-Klinikums",
      icon: Stethoscope,
      features: [
        "Flexible Buchung ohne Mindestaufenthalt",
        "Frühstück ab 6:30 Uhr verfügbar",
        "Ruhige Zimmer garantiert",
        "Late Check-out kostenfrei möglich",
        "Wegbeschreibung zur Klinik inklusive"
      ],
      price: "ab 68€", 
      period: "pro Nacht/EZ"
    }
  ];

  const specialPackages = [
    {
      title: "Familien-Wochenende",
      description: "Perfekt für Familien mit Kindern",
      features: ["Familienzimmer", "Kinderbett kostenfrei", "Spielecke im Restaurant", "Familien-Menü verfügbar"],
      price: "ab 129€",
      period: "Familie (2+2)"
    },
    {
      title: "Romantik-Paket",
      description: "Für besondere Momente zu zweit", 
      features: ["Sekt zur Begrüßung", "Candlelight-Dinner", "Späte Anreise möglich", "Rosenstrauß aufs Zimmer"],
      price: "ab 179€",
      period: "Paar/Nacht"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={hotelImage}
            alt="Angebote im Gasthof Ritter St. Georg - Saisonale Packages und Business Rates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sand-tone/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-4">
            Unsere Angebote
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Saisonale Packages, Business-Rates und besondere Arrangements für jeden Anlass
          </p>
        </div>
      </section>

      {/* Seasonal Offers */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Saisonale Highlights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Erleben Sie besondere Zeiten im Jahr mit unseren exklusiven Saison-Packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {seasonalOffers.map((offer, index) => {
              const IconComponent = offer.icon;
              return (
                <Card key={index} className={`shadow-card relative ${offer.popular ? 'ring-2 ring-wine-red' : ''}`}>
                  {offer.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-wine-red text-white">
                      Sehr beliebt
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-primary">{offer.title}</CardTitle>
                        <p className="text-wine-red font-semibold text-sm">{offer.subtitle}</p>
                        <p className="text-muted-foreground text-sm mt-1">{offer.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {offer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-sand-tone rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-wine-red">{offer.price}</div>
                        <div className="text-xs text-muted-foreground">{offer.period}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">{offer.available}</div>
                      </div>
                    </div>
                    <Button variant={offer.popular ? "default" : "outline"} className="w-full">
                      Jetzt buchen
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Offers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Business & Klinik-Rates
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Speziell entwickelt für Geschäftsreisende und Klinik-Besucher
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {businessOffers.map((offer, index) => {
              const IconComponent = offer.icon;
              return (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-elegant rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-primary">{offer.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{offer.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {offer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-gray-tone rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xl font-bold text-wine-red">{offer.price}</div>
                        <div className="text-xs text-muted-foreground">{offer.period}</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Rate anfragen
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Besondere Arrangements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kleine Aufmerksamkeiten für unvergessliche Momente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialPackages.map((pkg, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Gift className="w-5 h-5 text-wine-red" />
                    {pkg.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-sand-tone rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xl font-bold text-wine-red">{pkg.price}</div>
                      <div className="text-xs text-muted-foreground">{pkg.period}</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Package buchen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-card text-center">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 mx-auto text-wine-red mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Flexible Stornierung</h3>
                  <p className="text-sm text-muted-foreground">
                    Kostenlose Stornierung bis 24h vor Anreise bei den meisten Angeboten
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 mx-auto text-wine-red mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Zentrale Lage</h3>
                  <p className="text-sm text-muted-foreground">
                    5 Min. zu Siemens-Campus, 8 Min. zur Uni-Klinik, 10 Min. zur Innenstadt
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardContent className="pt-6">
                  <Heart className="w-8 h-8 mx-auto text-wine-red mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Persönlicher Service</h3>
                  <p className="text-sm text-muted-foreground">
                    Familiär geführt mit individueller Betreuung und fränkischer Herzlichkeit
                  </p>
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
              Haben Sie Fragen zu unseren Angeboten?
            </h2>
            <p className="text-muted-foreground mb-8">
              Rufen Sie uns gerne an oder schreiben Sie uns. Wir beraten Sie persönlich 
              und helfen bei der Auswahl des passenden Angebots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Direkt buchen
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Beratung anfordern
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Angebote;