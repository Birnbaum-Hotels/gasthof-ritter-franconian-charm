import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Restaurant from "./pages/Restaurant";
import Feiern from "./pages/Feiern";
import Tagung from "./pages/Tagung";
import Hotel from "./pages/Hotel";
import Angebote from "./pages/Angebote";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Barrierefreiheit from "./pages/Barrierefreiheit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/feiern" element={<Feiern />} />
              <Route path="/tagung" element={<Tagung />} />
              <Route path="/hotel" element={<Hotel />} />
              <Route path="/angebote" element={<Angebote />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/barrierefreiheit" element={<Barrierefreiheit />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;
