import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Star, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ritter-st-georg.jpg";

const HeroSection = () => {
  const handleReserveClick = () => {
    // GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'reserve_click', {
        section: 'hero'
      });
    }
  };

  const handleBookingClick = () => {
    // GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_start', {
        section: 'hero'
      });
    }
  };

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Historische Sandstein-Fassade des Gasthof Ritter St. Georg in Erlangen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-8">
        <div className="max-w-3xl">
          {/* Social Proof */}
          <a
            href="https://www.google.com/search?q=Gasthof+Ritter+St.+Georg+Erlangen"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 mb-4 text-white/90 hover:text-white transition-colors"
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-sm">★ 4.8 · 150+ Bewertungen</span>
          </a>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            Fränkische Küche &<br className="hidden sm:block" /> gemütlich übernachten<br className="hidden sm:block" /> in Erlangen.
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed max-w-2xl">
            Warme Küche täglich, Biergarten an der Regnitz, Zimmer mit Bestpreis-Garantie.
          </p>

          {/* Live Status Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Heute geöffnet bis 22:00</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link to="/restaurant#reservieren" onClick={handleReserveClick}>
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto w-full sm:w-auto">
                <Users className="w-5 h-5 mr-2" />
                Tisch reservieren
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto border-white bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm w-full sm:w-auto"
              onClick={handleBookingClick}
              asChild
            >
              <a href="https://www.booking.com" target="_self">
                <Calendar className="w-5 h-5 mr-2" />
                Zimmer buchen
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Direct-benefit chips */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
              <CheckCircle2 className="w-4 h-4" />
              <span>Bestpreis</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
              <CheckCircle2 className="w-4 h-4" />
              <span>Kostenlose Parkplätze</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
              <CheckCircle2 className="w-4 h-4" />
              <span>Flexible Stornierung</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 pt-6 border-t border-white/20">
            <div className="text-white">
              <div className="text-2xl md:text-3xl font-bold">175+</div>
              <div className="text-xs md:text-sm opacity-90">Jahre Tradition</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-3xl font-bold">15</div>
              <div className="text-xs md:text-sm opacity-90">Komfortable Zimmer</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-3xl font-bold">4.8</div>
              <div className="text-xs md:text-sm opacity-90">Gästebewertung</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;