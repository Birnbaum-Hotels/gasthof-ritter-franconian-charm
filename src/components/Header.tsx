import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Startseite", href: "/" },
    { name: "Restaurant", href: "/restaurant" },
    { name: "Hotel", href: "/hotel" },
    { name: "Über uns", href: "/about" },
    { name: "Kontakt", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>+49 123 456789</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>info@gasthof-ritter-st-georg.de</span>
              </div>
            </div>
            <div className="hidden md:flex gap-2">
              <Button variant="secondary" size="sm" className="h-7">
                Tisch reservieren
              </Button>
              <Button variant="accent" size="sm" className="h-7">
                Zimmer buchen
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <span className="text-xl font-bold text-primary-foreground">RSG</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-serif text-xl font-bold text-primary">
                  Gasthof Ritter St. Georg
                </div>
                <div className="text-sm text-muted-foreground">
                  Traditionelle fränkische Gastlichkeit
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                  <Button variant="secondary" className="w-full">
                    Tisch reservieren
                  </Button>
                  <Button variant="accent" className="w-full">
                    Zimmer buchen
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;