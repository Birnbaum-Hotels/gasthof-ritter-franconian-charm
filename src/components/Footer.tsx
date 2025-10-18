import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";
import CookieSettingsDialog from "@/components/CookieSettingsDialog";
import ritterLogo from "@/assets/ritter-st-georg-logo.jpg";
import birnbaumLogo from "@/assets/birnbaum-hotels-logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const properties = [
    {
      name: "Art-Hotel Erlangen",
      address: "Äußere Brucker Straße 90, 91052 Erlangen",
      phone: "+49 (0) 9131 7140-0",
      email: "art@birnbaum-hotels.de",
      website: "https://www.art-hotel-erlangen.de",
      maps: "https://maps.google.com/?q=Äußere+Brucker+Straße+90,+91052+Erlangen",
      description: "Zentrumsnah. Modern. Frühstück verfügbar.",
    },
    {
      name: "Hotel im Bauerngarten",
      address: "Leipziger Straße 3, 91058 Erlangen",
      phone: "+49 (0) 9131 7665-0",
      email: "ritter@birnbaum-hotels.de",
      website: "https://hotel-im-bauerngarten.de",
      maps: "https://maps.google.com/?q=Leipziger+Straße+3,+91058+Erlangen",
      description: "Ruhig gelegen. Kostenlose Parkplätze.",
    },
    {
      name: "Gasthof & Hotel Ritter St. Georg",
      address: "Herzogenauracher Damm 11, 91058 Erlangen",
      phone: "+49 (0) 9131 7665-0",
      email: "ritter@birnbaum-hotels.de",
      website: "/",
      maps: "https://maps.google.com/?q=Herzogenauracher+Damm+11,+91058+Erlangen",
      description: "Fränkische Küche. Biergarten an der Regnitz.",
    },
    {
      name: "Gasthof & Hotel Alte Post",
      location: "Falkendorf",
      address: "Hauptstraße 16, 91086 Falkendorf",
      phone: "+49 (0) 9132 906 155-0",
      email: "altepost@birnbaum-hotels.de",
      website: "https://www.falkendorf-altepost.de",
      maps: "https://maps.google.com/?q=Hauptstraße+16,+91086+Falkendorf",
      description: "Regionale Küche. Gemütliche Zimmer.",
    },
  ];
  const [cookieDialogOpen, setCookieDialogOpen] = useState(false);
  return (
    <footer className="bg-background text-foreground">
      {/* Pre-Footer: Birnbaum Hotels Properties */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-wine-red mb-2">
              Unsere Häuser – Birnbaum Hotels
            </h2>
            <p className="text-sm text-muted-foreground">Entdecken Sie unsere Standorte in Erlangen und Umgebung.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 flex flex-col h-full border border-border hover:border-wine-red/50 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-1 text-wine-red">{property.name}</h3>
                {property.location && <p className="text-sm text-muted-foreground mb-3">{property.location}</p>}

                <div className="space-y-2 mb-4 flex-grow">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-wine-red" />
                    <span className="text-foreground">{property.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 flex-shrink-0 text-wine-red" />
                    <a
                      href={`tel:${property.phone.replace(/\s/g, "")}`}
                      className="text-foreground underline hover:text-wine-red transition-colors"
                    >
                      {property.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 flex-shrink-0 text-wine-red" />
                    <a
                      href={`mailto:${property.email}`}
                      className="text-foreground underline hover:text-wine-red transition-colors"
                    >
                      {property.email}
                    </a>
                  </div>
                </div>

                {property.description && <p className="text-xs text-muted-foreground mb-4">{property.description}</p>}

                <div className="space-y-2">
                  {property.website.startsWith("http") ? (
                    <a href={property.website} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full bg-wine-red hover:bg-wine-red-dark text-white"
                      >
                        Zur Website
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </a>
                  ) : (
                    <Link to={property.website} className="block w-full">
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full bg-wine-red hover:bg-wine-red-dark text-white"
                      >
                        Zur Website
                      </Button>
                    </Link>
                  )}
                  <a href={property.maps} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button variant="outline" size="sm" className="w-full">
                      Auf Google Maps öffnen
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Ein Verbund der{" "}
            <a
              href="https://www.birnbaum-hotels.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wine-red underline hover:text-wine-red-light transition-colors"
            >
              Birnbaum Hotels
            </a>
          </p>
        </div>
      </div>

      {/* Original Footer Content */}
      <div className="bg-background text-foreground border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src={ritterLogo}
                  alt="Ritter St. Georg Logo"
                  title="Ritter St. Georg Logo"
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <div className="font-serif text-lg font-bold">Gasthof Ritter St. Georg</div>
                  <div className="text-sm opacity-90">Fränkische Gastlichkeit seit 1847</div>
                </div>
              </div>
              <p className="text-sm opacity-90">
                Traditionelle fränkische Küche und gemütliche Hotelzimmer im Herzen Frankens. Erleben Sie echte
                Gastlichkeit.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Schnellzugang</h3>
              <div className="space-y-2">
                <Link
                  to="/restaurant"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Restaurant & Speisekarte
                </Link>
                <Link
                  to="/hotel"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hotelzimmer
                </Link>
                <Link
                  to="/about"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Über uns
                </Link>
                <Link
                  to="/contact"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kontakt
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Kontakt</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-wine-red" />
                  <div>
                    <div>Herzogenauracher Damm 11</div>
                    <div>91058 Erlangen</div>
                    <div>Deutschland</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 text-wine-red" />
                  <a href="tel:+4991317665-0" className="hover:text-foreground transition-colors">
                    +49 9131 7665-0
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-wine-red" />
                  <a href="mailto:ritter@birnbaum-hotels.de" className="hover:text-foreground transition-colors">
                    ritter@birnbaum-hotels.de
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Öffnungszeiten</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 text-wine-red" />
                  <div>
                    <div className="font-medium text-foreground">Restaurant</div>
                    <div>Montag bis Samstag: 11:00-23:00 Uhr</div>
                    <div>Sonn- und Feiertag 11:00-22:00 Uhr</div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="font-medium text-foreground">Warme Küche</div>
                  <div>Montag bis Samstag 11:30 Uhr - 21:00 Uhr</div>
                  <div>Sonn- und Feiertag 11:30 Uhr - 20:30 Uhr</div>
                </div>
                <div className="pt-2">
                  <div className="font-medium text-foreground">Hotel</div>
                  <div>Check-in: ab 15:00</div>
                  <div>Check-out: bis 11:00</div>
                </div>
              </div>
            </div>

            {/* Birnbaum Hotels & Actions */}
            <div className="space-y-4">
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">Ein Haus der</p>
                <img
                  src={birnbaumLogo}
                  alt="Birnbaum Hotels & Restaurants"
                  title="Birnbaum Hotels & Restaurants"
                  className="h-16 w-auto object-contain hover:opacity-80 transition-opacity mb-4"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button variant="default" size="sm" className="w-full bg-wine-red hover:bg-wine-red-dark text-white">
                  Tisch reservieren
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Zimmer buchen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="bg-neutral-950">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>&copy; {currentYear} Gasthof & Hotel Ritter St. Georg</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/impressum" className="underline hover:text-wine-red transition-colors">
                Impressum
              </Link>
              <span className="hidden md:inline">·</span>
              <Link to="/datenschutz" className="underline hover:text-wine-red transition-colors">
                Datenschutz
              </Link>
              <span className="hidden md:inline">·</span>
              <Link to="/barrierefreiheit" className="underline hover:text-wine-red transition-colors">
                Barrierefreiheit
              </Link>
              <span className="hidden md:inline">·</span>
              <button
                type="button"
                onClick={() => setCookieDialogOpen(true)}
                className="underline hover:text-wine-red transition-colors"
              >
                Cookie-Einstellungen
              </button>
              <span className="hidden md:inline">·</span>
              <a href="#" className="underline hover:text-wine-red transition-colors">
                Karriere
              </a>
            </div>
            <p className="text-xs">
              Ein Haus der{" "}
              <a
                href="https://www.birnbaum-hotels.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wine-red underline hover:text-wine-red-light transition-colors"
              >
                Birnbaum Hotels
              </a>
            </p>
          </div>
        </div>
      </div>
      <CookieSettingsDialog open={cookieDialogOpen} onOpenChange={setCookieDialogOpen} />
    </footer>
  );
};
export default Footer;
