import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Restaurant from "./pages/Restaurant";
import Grillhuette from "./pages/Grillhuette";
import Feiern from "./pages/Feiern";
import Tagung from "./pages/Tagung";
import Hotel from "./pages/Hotel";
import Angebote from "./pages/Angebote";
import FamilyLeisure from "./pages/FamilyLeisure";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Barrierefreiheit from "./pages/Barrierefreiheit";
import TermsConditions from "./pages/TermsConditions";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import { ConsentProvider } from "@/contexts/ConsentContext";
import CookieBanner from "@/components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ConsentProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main id="main-content" className="flex-1" tabIndex={-1}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/grillhuette" element={<Grillhuette />} />
                <Route path="/feiern" element={<Feiern />} />
                <Route path="/tagung" element={<Tagung />} />
                <Route path="/hotel" element={<Hotel />} />
                <Route path="/angebote" element={<Angebote />} />
                <Route path="/family-leisure" element={<FamilyLeisure />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/barrierefreiheit" element={<Barrierefreiheit />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </BrowserRouter>
      </ConsentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
