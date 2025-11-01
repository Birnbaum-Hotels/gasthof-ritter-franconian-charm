import { Link } from "react-router-dom";
import { Home, UtensilsCrossed, Flame, PartyPopper, Building, Hotel, Gift, Users, Info, Mail, FileText, Shield, Eye } from "lucide-react";
import VacationBanner from "@/components/VacationBanner";

const Sitemap = () => {
  const siteLinks = [
    { path: "/", label: "Startseite", icon: Home },
    { path: "/restaurant", label: "Restaurant", icon: UtensilsCrossed },
    { path: "/grillhuette", label: "Grillhütte", icon: Flame },
    { path: "/feiern", label: "Feiern", icon: PartyPopper },
    { path: "/tagung", label: "Tagung", icon: Building },
    { path: "/hotel", label: "Hotel", icon: Hotel },
    { path: "/angebote", label: "Angebote", icon: Gift },
    { path: "/family-leisure", label: "Familie & Freizeit", icon: Users },
    { path: "/about", label: "Über uns", icon: Info },
    { path: "/contact", label: "Kontakt", icon: Mail },
    { path: "/impressum", label: "Impressum", icon: FileText },
    { path: "/datenschutz", label: "Datenschutz", icon: Shield },
    { path: "/barrierefreiheit", label: "Barrierefreiheit", icon: Eye },
    { path: "/terms-conditions", label: "Allgemeine Geschäftsbedingungen", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-wine-red mb-4">
            Sitemap
          </h1>
          <p className="text-lg text-muted-foreground">
            Übersicht aller Seiten auf unserer Website
          </p>
        </header>

        <nav aria-label="Site navigation">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-wine-red/50 transition-all group"
                >
                  <IconComponent className="w-5 h-5 text-wine-red group-hover:scale-110 transition-transform" />
                  <span className="text-foreground group-hover:text-wine-red transition-colors">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="mt-12 p-6 bg-card rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-wine-red mb-4">Externe Links</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a
                href="https://www.birnbaum-hotels.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-wine-red transition-colors underline"
              >
                Birnbaum Hotels
              </a>
            </li>
            <li>
              <a
                href="https://www.art-hotel-erlangen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-wine-red transition-colors underline"
              >
                Art-Hotel Erlangen
              </a>
            </li>
            <li>
              <a
                href="https://hotel-im-bauerngarten.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-wine-red transition-colors underline"
              >
                Hotel im Bauerngarten
              </a>
            </li>
            <li>
              <a
                href="https://www.falkendorf-altepost.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-wine-red transition-colors underline"
              >
                Gasthof & Hotel Alte Post
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Vacation Banner */}
      <VacationBanner />
    </div>
  );
};

export default Sitemap;
