import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import brasserieImage from "@/assets/brasserie-interior.jpg";

const Brasserie = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Image Carousel */}
        <section className="relative h-[500px] w-full">
          <img
            src={brasserieImage}
            alt="Brasserie on the Eighth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white uppercase tracking-wider">
              Brasserie on the Eighth
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Section */}
              <section className="animate-fade-in">
                <h2 className="text-2xl font-serif text-primary uppercase tracking-wide mb-6 pb-3 border-b border-primary/30">
                  Overview
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Brasserie on the Eighth features an array of all-time favourite French-continental dishes 
                  and is the perfect venue for a casual evening with friends over a glass of wine. The open 
                  kitchen showcases the chefs' culinary actions, creating an interactive dining experience.
                </p>
              </section>

              {/* Opening Hours and Menus */}
              <section>
                <h2 className="text-2xl font-serif text-primary uppercase tracking-wide mb-8 pb-3 border-b border-primary/30">
                  Opening Hours and Menus
                </h2>

                {/* Lunch */}
                <div className="mb-8">
                  <h3 className="text-xl font-serif text-primary uppercase mb-3">Lunch</h3>
                  <p className="text-foreground/70 mb-2">12:00nn – 3:00pm (Monday to Friday)</p>
                  <p className="text-foreground/80 mb-1">3-course menu at HK$488* per person</p>
                  <p className="text-foreground/80 mb-3">Appetizer Bar at HK$308* per person</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Please call <a href="tel:+85228228803" className="text-primary hover:underline">(852) 2822 8803</a> for menu enquiries
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="mr-2">
                      Lunch Menu (Week 1)
                    </Button>
                    <Button variant="outline" size="sm">
                      Lunch Menu (Week 2)
                    </Button>
                  </div>
                </div>

                {/* Weekend Brunch */}
                <div className="mb-8">
                  <h3 className="text-xl font-serif text-primary uppercase mb-3">'Vive le Brunch' Weekend Brunch</h3>
                  <p className="text-foreground/70 mb-2">11:30am – 2:30pm (Saturday and Sunday)</p>
                  <p className="text-foreground/80 mb-4">
                    HK$798 / 898 / 1148 / 1648* per adult | HK$398* per child (aged 4-11)
                  </p>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Reserve via eShop
                  </Button>
                </div>

                {/* Dinner */}
                <div className="mb-8">
                  <h3 className="text-xl font-serif text-primary uppercase mb-3">Dinner</h3>
                  <p className="text-foreground/70 mb-4">6:30pm – 10:30pm daily</p>
                  <div className="space-y-2 mb-4">
                    <Button variant="outline" size="sm" className="mr-2">
                      Degustation Dinner Menu
                    </Button>
                    <Button variant="outline" size="sm" className="mr-2">
                      A La Carte Menu
                    </Button>
                    <Button variant="outline" size="sm">
                      Dessert Menu
                    </Button>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Reserve via eShop
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground italic">*Subject to 10% service charge</p>
              </section>

              {/* Additional Details */}
              <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <h3 className="text-lg font-serif text-primary uppercase mb-2">Dress Code</h3>
                  <p className="text-foreground/80">Smart Casual</p>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-primary uppercase mb-2">Seating Capacity</h3>
                  <p className="text-foreground/80">92</p>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-primary uppercase mb-2">Private Dining Room</h3>
                  <p className="text-foreground/80">1 room for a maximum of 18 persons</p>
                </div>
              </div>
            </div>

            {/* Sidebar - Right Column */}
            <div className="space-y-8">
              {/* Quick Reservation */}
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 text-lg"
                  size="lg"
                >
                  Quick Reservation »
                </Button>
              </div>

              {/* Special Offer */}
              <section>
                <h2 className="text-xl font-serif text-primary uppercase tracking-wide mb-4 pb-2 border-b border-primary/30">
                  Special Offer
                </h2>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={brasserieImage}
                    alt="Degustation Dinner"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-serif text-lg text-primary mb-2">Degustation Dinner</h3>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-xl font-serif text-primary uppercase tracking-wide mb-4 pb-2 border-b border-primary/30">
                  Contact
                </h2>
                <div className="space-y-3">
                  <a href="tel:+85228228803" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>(852) 2822 8803</span>
                  </a>
                  <a href="mailto:hkghc_Brasserie@conradhotels.com" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors break-all">
                    <Mail className="h-4 w-4" />
                    <span>hkghc_Brasserie@conradhotels.com</span>
                  </a>
                  <div className="flex items-start gap-2 text-foreground/80">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <div>
                      <p>Level 8, Conrad Hong Kong</p>
                      <p>Pacific Place, 88 Queensway</p>
                      <p>Hong Kong</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Brasserie;
