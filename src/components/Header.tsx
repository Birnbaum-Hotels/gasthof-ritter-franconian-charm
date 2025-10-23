import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import ritterLogo from "@/assets/ritter-st-georg-logo.jpg";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [
    {
      name: "Startseite",
      href: "/",
    },
    {
      name: "Restaurant",
      href: "/restaurant",
    },
    {
      name: "Feiern",
      href: "/feiern",
    },
    {
      name: "Hotel",
      href: "/hotel",
    },
    {
      name: "Angebote",
      href: "/angebote",
    },
    {
      name: "Über uns",
      href: "/about",
    },
    {
      name: "Kontakt",
      href: "/contact",
    },
  ];
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:p-4 focus:m-4 focus:rounded"
      >
        Zum Hauptinhalt springen
      </a>
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* RESOLUTION FOR CONFLICT 1 */}
              <a
                href="tel:+4991317665-0"
                className="flex items-center gap-1"
                aria-label="Telefonnummer: +49 9131 7665-0"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden xs:inline">+49 9131 7665-0</span>
                <span className="xs:hidden">Tel</span> {/* Kept "Tel" for brevity on small screens */}
              </a>
              <a
                href="mailto:ritter@birnbaum-hotels.de"
                className="flex items-center gap-1"
                aria-label="E-Mail: ritter@birnbaum-hotels.de"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">ritter@birnbaum-hotels.de</span>
                <span className="sm:hidden">Mail</span>
              </a>
            </div>
            <div className="hidden lg:flex gap-2">
              <Button variant="secondary" size="sm" className="h-7" aria-label="Tisch reservieren">
                Tisch reservieren
              </Button>
              <Button variant="accent" size="sm" className="h-7" aria-label="Zimmer buchen">
                Zimmer buchen
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center min-w-0 flex-1">
            <Link to="/" className="flex items-center space-x-2 min-w-0">
              <img
                src={ritterLogo}
                alt="Ritter St. Georg Logo"
                title="Ritter St. Georg Logo"
                className="h-12 w-auto object-contain flex-shrink-0"
              />
              <div className="hidden md:block min-w-0">
                <div className="font-serif text-lg lg:text-xl font-bold text-primary truncate">
                  Gasthof Ritter St. Georg
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground truncate">
                  Traditionelle fränkische Gastlichkeit
                </div>
              </div>
              <div className="hidden sm:block md:hidden min-w-0">
                <div className="font-serif text-base font-bold text-primary truncate">Gasthof Ritter St. Georg</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 flex-shrink-0" aria-label="Hauptnavigation">
            {navigation.map((item) => {
              if (item.name === "Restaurant") {
                return (
                  <NavigationMenu key={item.name}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className={cn(
                          "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap bg-transparent",
                          (isActive(item.href) || isActive("/grillhuette")) ? "text-primary" : "text-foreground"
                        )}>
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-[240px] p-2">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/restaurant"
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActive("/restaurant") && "bg-accent"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">Restaurant & Speisekarte</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Fränkische Küche mit Tradition
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/grillhuette"
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActive("/grillhuette") && "bg-accent"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">Grillhütte</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Für Feiern bis zu 15 Personen
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                );
              }
              if (item.name === "Hotel") {
                return (
                  <NavigationMenu key={item.name}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className={cn(
                          "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap bg-transparent",
                          (isActive(item.href) || isActive("/tagung")) ? "text-primary" : "text-foreground"
                        )}>
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-[240px] p-2">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/hotel"
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActive("/hotel") && "bg-accent"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">Hotel & Zimmer</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Komfortable Übernachtung
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/tagung"
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActive("/tagung") && "bg-accent"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">Tagung</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Professionelle Tagungsräume
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                    isActive(item.href) ? "text-primary border-b-2 border-primary" : "text-foreground"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden flex-shrink-0">
              <Button
                variant="outline"
                size="icon"
                aria-label="Hauptmenü öffnen"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-4 mt-8" id="mobile-navigation" aria-label="Hauptnavigation">
                {navigation.map((item) => {
                  if (item.name === "Restaurant") {
                    return (
                      <div key={item.name} className="flex flex-col gap-2">
                        <Link
                          to={item.href}
                          className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${isActive(item.href) ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive(item.href) ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                        <Link
                          to="/grillhuette"
                          className={`text-base font-medium py-2 px-4 ml-4 rounded-lg transition-colors ${isActive("/grillhuette") ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive("/grillhuette") ? "page" : undefined}
                        >
                          → Grillhütte
                        </Link>
                      </div>
                    );
                  }
                  if (item.name === "Hotel") {
                    return (
                      <div key={item.name} className="flex flex-col gap-2">
                        <Link
                          to={item.href}
                          className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${isActive(item.href) ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive(item.href) ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                        <Link
                          to="/tagung"
                          className={`text-base font-medium py-2 px-4 ml-4 rounded-lg transition-colors ${isActive("/tagung") ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive("/tagung") ? "page" : undefined}
                        >
                          → Tagung
                        </Link>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${isActive(item.href) ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  );
                })}
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
