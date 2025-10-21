import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import brasserieImage from "@/assets/brasserie-interior.jpg";

const GardenCafe = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Image */}
        <section className="relative h-[500px] w-full">
          <img
            src={brasserieImage}
            alt="Garden Café"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white uppercase tracking-wider">
              Garden Café
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section className="animate-fade-in">
                <h2 className="text-2xl font-serif text-primary uppercase tracking-wide mb-6 pb-3 border-b border-primary/30">
                  Overview
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Garden Café offers a diverse menu featuring international favorites and local specialties. 
                  From breakfast to dinner, enjoy fresh, seasonal ingredients in a relaxed, contemporary setting.
                </p>
              </section>

              {/* Opening Hours and Menus */}
              <section>
                <h2 className="text-2xl font-serif text-primary uppercase tracking-wide mb-8 pb-3 border-b border-primary/30">
                  Opening Hours and Menus
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-serif text-primary uppercase mb-3">Breakfast</h3>
                  <p className="text-foreground/70 mb-2">6:30am – 10:30am daily</p>
                  <p className="text-foreground/80 mb-4">International breakfast buffet and à la carte</p>
                  <Button variant="outline" size="sm">
                    Breakfast Menu
                  </Button>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-serif text-primary uppercase mb-3">Lunch</h3>
                  <p className="text-foreground/70 mb-2">12:00nn – 2:30pm daily</p>
                  <p className="text-foreground/80 mb-4">Lunch buffet and à la carte options</p>
                  <Button variant="outline" size="sm">
                    Lunch Menu
                  </Button>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-serif text-primary uppercase mb-3">Dinner</h3>
                  <p className="text-foreground/70 mb-4">6:00pm – 10:00pm daily</p>
                  <Button variant="outline" size="sm">
                    Dinner Menu
                  </Button>
                </div>
              </section>

              {/* Additional Details */}
              <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <h3 className="text-lg font-serif text-primary uppercase mb-2">Dress Code</h3>
                  <p className="text-foreground/80">Casual</p>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-primary uppercase mb-2">Seating Capacity</h3>
                  <p className="text-foreground/80">150</p>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-primary uppercase mb-2">Features</h3>
                  <p className="text-foreground/80">All-day dining, Family friendly</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
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
                    alt="International Buffet"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-serif text-lg text-primary mb-2">International Buffet</h3>
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
                  <a href="tel:+85225213838" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>(852) 2521 3838</span>
                  </a>
                  <a href="mailto:dining@conradhk.com" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>dining@conradhk.com</span>
                  </a>
                  <div className="flex items-start gap-2 text-foreground/80">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <div>
                      <p>Conrad Hong Kong</p>
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

export default GardenCafe;
