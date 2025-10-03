import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

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

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      {/* Pre-Footer: Birnbaum Hotels Properties */}
      <div className="border-b border-neutral-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-wine-red mb-2">
              Unsere Häuser – Birnbaum Hotels
            </h2>
            <p className="text-sm text-neutral-400">
              Entdecken Sie unsere Standorte in Erlangen und Umgebung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-neutral-800 rounded-lg p-6 flex flex-col h-full border border-neutral-700 hover:border-wine-red/50 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-1 text-wine-red">
                  {property.name}
                </h3>
                {property.location && (
                  <p className="text-sm text-neutral-400 mb-3">
                    {property.location}
                  </p>
                )}

                <div className="space-y-2 mb-4 flex-grow">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-wine-red" />
                    <span className="text-neutral-300">{property.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 flex-shrink-0 text-wine-red" />
                    <a
                      href={`tel:${property.phone.replace(/\s/g, "")}`}
                      className="text-neutral-300 underline hover:text-wine-red transition-colors"
                    >
                      {property.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 flex-shrink-0 text-wine-red" />
                    <a
                      href={`mailto:${property.email}`}
                      className="text-neutral-300 underline hover:text-wine-red transition-colors"
                    >
                      {property.email}
                    </a>
                  </div>
                </div>

                {property.description && (
                  <p className="text-xs text-neutral-400 mb-4">
                    {property.description}
                  </p>
                )}

                <div className="space-y-2">
                  {property.website.startsWith("http") ? (
                    <a
                      href={property.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
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
                  <a
                    href={property.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-wine-red hover:border-wine-red"
                    >
                      Auf Google Maps öffnen
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-neutral-400 mt-8">
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

      {/* Legal Footer */}
      <div className="bg-neutral-950">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>
              &copy; {currentYear} Gasthof & Hotel Ritter St. Georg
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/impressum"
                className="underline hover:text-wine-red transition-colors"
              >
                Impressum
              </Link>
              <span className="hidden md:inline">·</span>
              <Link
                to="/datenschutz"
                className="underline hover:text-wine-red transition-colors"
              >
                Datenschutz
              </Link>
              <span className="hidden md:inline">·</span>
              <Link
                to="/barrierefreiheit"
                className="underline hover:text-wine-red transition-colors"
              >
                AGB
              </Link>
              <span className="hidden md:inline">·</span>
              <a
                href="#"
                className="underline hover:text-wine-red transition-colors"
              >
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
    </footer>
  );
};

export default Footer;