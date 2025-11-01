import VacationBanner from "@/components/VacationBanner";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold text-wine-red mb-8">
          Allgemeine Geschäftsbedingungen
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Inhalte werden in Kürze hinzugefügt.
          </p>
        </div>
      </div>

      {/* Vacation Banner */}
      <VacationBanner />
    </div>
  );
};

export default TermsConditions;
