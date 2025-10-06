import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="bg-muted/50 py-3 border-y my-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="font-medium text-muted-foreground">Schnell zu:</span>
          <Link 
            to="/restaurant#speisekarte" 
            className="text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Restaurant (Speisekarte)
          </Link>
          <span className="text-muted-foreground hidden sm:inline">•</span>
          <Link 
            to="/restaurant#biergarten" 
            className="text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Biergarten
          </Link>
          <span className="text-muted-foreground hidden sm:inline">•</span>
          <Link 
            to="/restaurant#grillhuette" 
            className="text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Grillhütte (Reservieren)
          </Link>
          <span className="text-muted-foreground hidden sm:inline">•</span>
          <Link 
            to="/hotel#business" 
            className="text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Zimmer für Business
          </Link>
          <span className="text-muted-foreground hidden sm:inline">•</span>
          <Link 
            to="/hotel#familie" 
            className="text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Familienzimmer
          </Link>
          <span className="text-muted-foreground hidden sm:inline">•</span>
          <Link 
            to="/lage-parken" 
            className="text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Lage & Parken (E-Ladestation)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
