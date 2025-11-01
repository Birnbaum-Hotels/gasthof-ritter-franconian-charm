import { useState } from "react";
import { X } from "lucide-react";
import grillhuetteRiver from "@/assets/gallery-grillhuette-river.jpg";
import biergarten from "@/assets/gallery-biergarten.jpg";
import breakfast from "@/assets/gallery-breakfast.jpg";
import exterior from "@/assets/gallery-exterior.jpg";
import wedding from "@/assets/gallery-wedding.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: grillhuetteRiver,
      alt: "Grillhütte am Fluss – Idyllischer Biergarten am Wasser im Gasthof Ritter St. Georg",
    },
    {
      src: biergarten,
      alt: "Biergarten im Frühling – Blühende Bäume und gemütliche Bierbänke",
    },
    {
      src: breakfast,
      alt: "Frühstücksbuffet – Reichhaltiges Frühstück mit regionalen Spezialitäten",
    },
    {
      src: exterior,
      alt: "Historische Sandstein-Fassade mit Frühlingsblüten – Gasthof Ritter St. Georg Erlangen",
    },
    {
      src: wedding,
      alt: "Hochzeitsfeier im Regnitzsalon – Traumhafte Feiern im Gasthof Ritter St. Georg",
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
              aria-label={`Bild öffnen: ${image.alt}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(index);
                }
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                title={image.alt}
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
          aria-label="Bildansicht"
          tabIndex={-1}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Bildansicht schließen"
          >
            <X className="w-8 h-8" aria-hidden="true" />
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
