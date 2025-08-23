import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wood text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <span className="text-lg font-bold">RSG</span>
              </div>
              <div>
                <div className="font-serif text-lg font-bold">
                  Gasthof Ritter St. Georg
                </div>
                <div className="text-sm opacity-90">
                  Fränkische Gastlichkeit seit 1847
                </div>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Traditionelle fränkische Küche und gemütliche Hotelzimmer 
              im Herzen Frankens. Erleben Sie echte Gastlichkeit.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Schnellzugang</h3>
            <div className="space-y-2">
              <Link to="/restaurant" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Restaurant & Speisekarte
              </Link>
              <Link to="/hotel" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Hotelzimmer
              </Link>
              <Link to="/about" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Über uns
              </Link>
              <Link to="/contact" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Kontakt
              </Link>
            </div>
            <div className="space-y-2 pt-2">
              <Button variant="secondary" size="sm" className="w-full">
                Tisch reservieren
              </Button>
              <Button variant="outline" size="sm" className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-wood">
                Zimmer buchen
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 opacity-90">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Ritter-von-Spix-Straße 7</div>
                  <div>91054 Erlangen</div>
                  <div>Deutschland</div>
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <Phone className="w-4 h-4" />
                <span>+49 9131 123456</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <Mail className="w-4 h-4" />
                <span>info@gasthof-ritter-st-georg.de</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5" />
                <div>
                  <div className="font-medium">Restaurant</div>
                  <div>Di-So: 17:00-22:00</div>
                  <div>Montag Ruhetag</div>
                </div>
              </div>
              <div className="pt-2">
                <div className="font-medium">Hotel</div>
                <div>Check-in: 15:00-20:00</div>
                <div>Check-out: bis 11:00</div>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary-foreground/20">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary-foreground/20">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Gasthof Ritter St. Georg. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/impressum" className="hover:opacity-100 transition-opacity">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:opacity-100 transition-opacity">
              Datenschutz
            </Link>
            <Link to="/barrierefreiheit" className="hover:opacity-100 transition-opacity">
              Barrierefreiheit
            </Link>
            <a href="#" className="hover:opacity-100 transition-opacity">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;