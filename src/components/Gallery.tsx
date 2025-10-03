import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-ritter-st-georg.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";
import hotelImage from "@/assets/hotel-room.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: heroImage,
      alt: "Historische Sandstein-Fassade im Abendlicht – Eingang im Gasthof Ritter St. Georg in Erlangen",
    },
    {
      src: restaurantImage,
      alt: "Traditionelle Gaststube mit gedeckten Tischen im Gasthof Ritter St. Georg in Erlangen",
    },
    {
      src: hotelImage,
      alt: "Doppelzimmer mit Tageslicht & Schreibtisch im Gasthof Ritter St. Georg in Erlangen",
    },
    {
      src: heroImage,
      alt: "Außenansicht bei Dämmerung – Gasthof Ritter St. Georg in Erlangen",
    },
    {
      src: restaurantImage,
      alt: "Gemütliche Restaurant-Atmosphäre im Gasthof Ritter St. Georg in Erlangen",
    },
    {
      src: hotelImage,
      alt: "Komfortables Einzelzimmer im Gasthof Ritter St. Georg in Erlangen",
    },
    {
      src: heroImage,
      alt: "Historisches Sandsteingebäude – Gasthof Ritter St. Georg in Erlangen",
    },
    {
      src: restaurantImage,
      alt: "Fränkische Spezialitäten – Restaurant im Gasthof Ritter St. Georg",
    },
    {
      src: hotelImage,
      alt: "Moderne Zimmerausstattung im Gasthof Ritter St. Georg in Erlangen",
    },
    {
      src: heroImage,
      alt: "Abendstimmung am Gasthof Ritter St. Georg in Erlangen",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Impressionen
          </h2>
          <p className="text-muted-foreground text-sm">
            Haus, Biergarten, Küche & Zimmer – ein Blick in den Ritter St. Georg.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(index);
                }
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Galerie schließen"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
