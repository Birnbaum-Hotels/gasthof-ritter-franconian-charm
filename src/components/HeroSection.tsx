import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-gasthof.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Gasthof Ritter St. Georg - Traditioneller fränkischer Gasthof"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-primary-foreground/90 text-sm">
              Ausgezeichnete Bewertungen
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Gasthof Ritter<br />
            <span className="text-sand-tone">St. Georg</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 leading-relaxed">
            <span className="text-sand-tone font-semibold">Fränkisch essen. Gut schlafen. Feier & Tagung aus einer Hand.</span>
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Traditionelle fränkische Gastlichkeit seit 1847 - nahe Siemens-Campus und Uni-Klinikum Erlangen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
              <Users className="w-5 h-5 mr-2" />
              Tisch reservieren
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="accent" className="text-lg px-8 py-4 h-auto">
              <Calendar className="w-5 h-5 mr-2" />
              Zimmer buchen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold text-secondary">175+</div>
              <div className="text-sm opacity-90">Jahre Tradition</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold text-secondary">15</div>
              <div className="text-sm opacity-90">Komfortable Zimmer</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold text-secondary">4.8</div>
              <div className="text-sm opacity-90">Gästebewertung</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;