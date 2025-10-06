import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Users, Calendar, Car, Route } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-serif font-bold text-primary mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Wir freuen uns auf Ihre Nachricht und stehen Ihnen gerne für alle Fragen 
              rund um Restaurant und Hotel zur Verfügung.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <Card className="shadow-card hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Tisch reservieren</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sichern Sie sich Ihren Platz in unserem Restaurant
                </p>
                <Button variant="accent" className="w-full">
                  <Users className="w-4 h-4 mr-2" />
                  Jetzt reservieren
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Zimmer buchen</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Buchen Sie Ihr Zimmer für einen erholsamen Aufenthalt
                </p>
                <Button variant="accent" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Verfügbarkeit prüfen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Kontaktinformationen
                </h2>
              </div>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Adresse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-muted-foreground">
                    <p className="font-medium">Gasthof Ritter St. Georg</p>
                    <p>Hauptstraße 15</p>
                    <p>97320 Mainstockheim</p>
                    <p>Deutschland</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Telefon & E-Mail
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+49 9321 123456</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>info@gasthof-ritter-st-georg.de</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Öffnungszeiten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-medium text-primary">Restaurant</p>
                      <p className="text-sm">Dienstag - Sonntag: 17:00 - 22:00 Uhr</p>
                      <p className="text-sm">Montag: Ruhetag</p>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="font-medium text-primary">Hotel Reception</p>
                      <p className="text-sm">Check-in: 15:00 - 20:00 Uhr</p>
                      <p className="text-sm">Check-out: bis 11:00 Uhr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-primary" />
                    Anfahrt & Parken
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">
                      • Kostenlose Parkplätze direkt am Haus
                    </p>
                    <p className="text-sm">
                      • 5 Minuten von der A3 (Ausfahrt Kitzingen)
                    </p>
                    <p className="text-sm">
                      • Bushaltestelle "Mainstockheim Mitte" (50m)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <div className="h-[60px]" /> {/* Spacer to align with left column title */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Nachricht senden
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Vorname *</Label>
                      <Input id="firstName" placeholder="Ihr Vorname" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nachname *</Label>
                      <Input id="lastName" placeholder="Ihr Nachname" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" type="email" placeholder="ihre.email@beispiel.de" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" type="tel" placeholder="+49 123 456789" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Betreff *</Label>
                    <Input id="subject" placeholder="Worum geht es?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Ihre Nachricht *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs text-muted-foreground">
                      * Pflichtfelder
                    </p>
                    <Button variant="accent" className="w-full" size="lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Nachricht senden
                    </Button>
                  </div>

                  <div className="pt-4 border-t text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Oder rufen Sie uns direkt an:
                    </p>
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      +49 9321 123456
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              So finden Sie uns
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mitten im Herzen Frankens, zwischen Würzburg und Bamberg gelegen
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-card">
            <CardContent className="p-0">
              <div className="bg-muted h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-primary mb-2">
                    Google Maps Karte
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Hauptstraße 15, 97320 Mainstockheim
                  </p>
                  <Button variant="secondary">
                    <Route className="w-4 h-4 mr-2" />
                    Route planen
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;