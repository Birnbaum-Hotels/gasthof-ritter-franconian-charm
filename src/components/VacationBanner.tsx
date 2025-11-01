import vacationBanner from "@/assets/vacation-banner.png";

const VacationBanner = () => {
  return (
    <section className="w-full">
      <a 
        href="https://www.ferienwohnung-urlaub-bayerischer-wald.de/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full transition-opacity hover:opacity-90"
      >
        <img 
          src={vacationBanner} 
          alt="Unser Haus Bergblick - Urlaub das ganze Jahr" 
          className="w-full h-auto object-cover"
        />
      </a>
    </section>
  );
};

export default VacationBanner;
