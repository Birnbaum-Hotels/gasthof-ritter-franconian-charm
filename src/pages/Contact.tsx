import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Users, Calendar, Car, Route } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "Vorname ist erforderlich").max(100, "Vorname muss weniger als 100 Zeichen haben"),
  lastName: z.string().trim().min(1, "Nachname ist erforderlich").max(100, "Nachname muss weniger als 100 Zeichen haben"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail muss weniger als 255 Zeichen haben"),
  phone: z.string().trim().max(50, "Telefonnummer muss weniger als 50 Zeichen haben").optional(),
  subject: z.string().trim().min(1, "Betreff ist erforderlich").max(200, "Betreff muss weniger als 200 Zeichen haben"),
  message: z.string().trim().min(1, "Nachricht ist erforderlich").max(2000, "Nachricht muss weniger als 2000 Zeichen haben"),
  dataConsent: z.boolean().refine(val => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen, um fortzufahren."
  })
});
type ContactFormValues = z.infer<typeof contactFormSchema>;
const Contact = () => {
  const {
    toast
  } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      dataConsent: false
    }
  });
  const onSubmit = async (data: ContactFormValues) => {
    try {
      const {
        data: response,
        error
      } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });
      if (error) throw error;
      if (response?.success) {
        toast({
          title: "Nachricht gesendet!",
          description: "Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden."
        });
        form.reset();
      } else {
        throw new Error(response?.error || "Unbekannter Fehler");
      }
    } catch (error: any) {
      console.error("Error sending contact form:", error);
      toast({
        title: "Fehler",
        description: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
        variant: "destructive"
      });
    }
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-serif font-bold text-primary mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Wir freuen uns auf Ihre Nachricht und stehen Ihnen gerne für alle Fragen 
              rund um Restaurant und Hotel zur Verfügung.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <Card className="shadow-card hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Tisch reservieren</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sichern Sie sich Ihren Platz in unserem Restaurant
                </p>
                <Button variant="accent" className="w-full">
                  <Users className="w-4 h-4 mr-2" />
                  Jetzt reservieren
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Zimmer buchen</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Buchen Sie Ihr Zimmer für einen erholsamen Aufenthalt
                </p>
                <Button variant="accent" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Verfügbarkeit prüfen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            
            {/* Contact Information */}
            <div className="space-y-4 flex flex-col">
              <h2 className="text-3xl font-serif font-bold text-primary">
                Kontaktinformationen
              </h2>

              <div className="space-y-4 flex-1">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Adresse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-muted-foreground">
                    <p className="font-medium">Gasthof Ritter St. Georg</p>
                    <p>Herzogenauracher Damm 11</p>
                    <p>91058 Erlangen</p>
                    <p>Germany</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Telefon & E-Mail
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+49 9131 7665-0</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>ritter@birnbaum-hotels.de</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Öffnungszeiten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-medium text-primary">Restaurant</p>
                      <p className="text-sm">Dienstag - Sonntag: 17:00 - 22:00 Uhr</p>
                      <p className="text-sm">Montag: Ruhetag</p>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="font-medium text-primary">Hotel Reception</p>
                      <p className="text-sm">Check-in: ab 15:00 Uhr</p>
                      <p className="text-sm">Check-out: bis 11:00 Uhr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-primary" />
                    Anfahrt & Parken
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• Kostenlose Parkplätze direkt am Haus und gegenüber auf großem Parkplatz</p>
                    <p className="text-sm">• 3 Minuten von der A73/A3 (Ausfahrt Erlangen-Bruck)</p>
                    <p className="text-sm">• Bushaltestelle "Schorlachstraße" (50m)</p>
                  </div>
                </CardContent>
              </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4 flex flex-col">
              <h2 className="text-3xl font-serif font-bold text-primary">
                Nachricht senden
              </h2>

              <Card className="shadow-card flex-1">
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField control={form.control} name="firstName" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Vorname *</FormLabel>
                              <FormControl>
                                <Input placeholder="Ihr Vorname" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                        <FormField control={form.control} name="lastName" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Nachname *</FormLabel>
                              <FormControl>
                                <Input placeholder="Ihr Nachname" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                      </div>

                      <FormField control={form.control} name="email" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>E-Mail *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="ihre.email@beispiel.de" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />

                      <FormField control={form.control} name="phone" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Telefon</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+49 123 456789" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />

                      <FormField control={form.control} name="subject" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Betreff *</FormLabel>
                            <FormControl>
                              <Input placeholder="Worum geht es?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />

                      <FormField control={form.control} name="message" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Ihre Nachricht *</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..." className="min-h-32" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />

                      <FormField control={form.control} name="dataConsent" render={({
                      field
                    }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <input type="checkbox" className="h-4 w-4 mt-1 accent-primary" required aria-required="true" checked={field.value} onChange={field.onChange} onBlur={field.onBlur} name={field.name} ref={field.ref} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Datenschutzerklärung *
                              </FormLabel>
                              <p className="text-xs text-muted-foreground">
                                Ich habe die <a href="/datenschutz" className="underline focus:ring-2 focus:ring-primary focus:outline-none" target="_blank">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zum Zweck der Kontaktaufnahme zu. Diese Einwilligung kann jederzeit widerrufen werden.
                              </p>
                            </div>
                          </FormItem>} />

                      <div className="space-y-4">
                        <p className="text-xs text-muted-foreground">
                          * Pflichtfelder
                        </p>
                        <Button type="submit" variant="accent" className="w-full" size="lg" disabled={form.formState.isSubmitting} aria-label="Nachricht senden">
                          <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                          {form.formState.isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                        </Button>
                      </div>

                      <div className="pt-4 border-t text-center space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Oder rufen Sie uns direkt an:
                        </p>
                        <Button variant="outline" className="w-full" type="button" asChild>
                          <a href="tel:+4993211234567">
                            <Phone className="w-4 h-4 mr-2" />
                            +49 9321 123456
                          </a>
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              So finden Sie uns
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Im Herzen von Erlangen-Bruck, nahe der Innenstadt, der Universität, direkt am Wiesengrund</p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-card overflow-hidden">
            <CardContent className="p-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.8234!2d11.0089!3d49.5894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM1JzIxLjgiTiAxMcKwMDAnMzIuMCJF!5e0!3m2!1sen!2sde!4v1234567890" width="100%" height="400" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gasthof Ritter St. Georg Location" />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
export default Contact;