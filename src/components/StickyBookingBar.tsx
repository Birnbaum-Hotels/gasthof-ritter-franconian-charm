import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Users, Phone, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { cn } from "@/lib/utils";


const StickyBookingBar = () => {
  const [activeTab, setActiveTab] = useState("zimmer");
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState(2);

  const handleBookingClick = () => {
    // GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_start', {
        section: 'sticky_bar'
      });
    }
    // Navigate to booking engine
    window.open('https://www.booking.com', '_self');
  };

  const handleReserveClick = () => {
    // GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'reserve_click', {
        section: 'sticky_bar'
      });
    }
    window.location.href = '/restaurant#reservieren';
  };

  const handleCallClick = () => {
    // GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click', {
        section: 'sticky_bar'
      });
    }
    window.location.href = 'tel:+4991317665-0';
  };

  return (
    <div className="sticky bottom-0 md:relative md:bottom-auto z-40 bg-gradient-to-r from-background via-background to-muted/20 border-t border-border/50 shadow-2xl backdrop-blur-sm my-8">
      <div className="container mx-auto px-4 py-5 md:py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 bg-muted/30 gap-3 p-2.5 rounded-xl border border-border/50 shadow-inner backdrop-blur-sm">
            <TabsTrigger 
              value="zimmer" 
              className="text-sm md:text-base bg-background/50 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:scale-105 h-11 rounded-lg font-medium border-0"
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Zimmer</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tisch" 
              className="text-sm md:text-base bg-background/50 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:scale-105 h-11 rounded-lg font-medium border-0"
            >
              <Users className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Tisch</span>
            </TabsTrigger>
            <TabsTrigger 
              value="anrufen" 
              className="text-sm md:text-base bg-background/50 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:scale-105 h-11 rounded-lg font-medium border-0"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Anrufen</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="zimmer" className="mt-0 animate-fade-in">
            <Card className="p-5 bg-gradient-to-br from-background to-muted/30 border-border/50 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Anreise</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkInDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {checkInDate ? format(checkInDate, "dd.MM.yyyy") : "Datum wählen"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkInDate}
                          onSelect={setCheckInDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Abreise</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOutDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {checkOutDate ? format(checkOutDate, "dd.MM.yyyy") : "Datum wählen"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOutDate}
                          onSelect={setCheckOutDate}
                          disabled={(date) => date < (checkInDate || new Date())}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="w-full sm:w-32">
                  <label className="text-xs text-muted-foreground mb-1 block">Gäste</label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input
                      type="number"
                      min="1"
                      max="10"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                      className="pl-9"
                    />
                  </div>
                </div>
                <Button onClick={handleBookingClick} className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow duration-300 h-11">
                  Verfügbarkeit prüfen
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="tisch" className="mt-0 animate-fade-in">
            <Card className="p-5 bg-gradient-to-br from-background to-muted/30 border-border/50 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="flex-1 grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Personen</label>
                    <div className="flex items-center gap-2 bg-background rounded-md px-3 py-2 border">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">2</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Datum</label>
                    <div className="flex items-center gap-2 bg-background rounded-md px-3 py-2 border">
                      <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Heute</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Uhrzeit</label>
                    <div className="flex items-center gap-2 bg-background rounded-md px-3 py-2 border">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">19:00</span>
                    </div>
                  </div>
                </div>
                <Button onClick={handleReserveClick} className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow duration-300 h-11">
                  Jetzt reservieren
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="anrufen" className="mt-0 animate-fade-in">
            <Card className="p-5 bg-gradient-to-br from-background to-muted/30 border-border/50 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-muted-foreground mb-1 font-medium">Rufen Sie uns direkt an</p>
                  <p className="text-2xl font-bold text-primary">+49 9131 7665-0</p>
                </div>
                <Button onClick={handleCallClick} size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StickyBookingBar;
