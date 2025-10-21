import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import afternoonTeaImage from "@/assets/afternoon-tea.jpg";

const LobbyLounge = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Image */}
        <section className="relative h-[500px] w-full">
          <img
            src={afternoonTeaImage}
            alt="Lobby Lounge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white uppercase tracking-wider">
              Lobby Lounge
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
                  The Lobby Lounge is the perfect setting for afternoon tea, business meetings, or a relaxing break. 
                  Featuring elegant décor and impeccable service, we offer a refined selection of teas, pastries, and light fare.
                </p>
              </section>

              {/* Opening Hours and Menus */}
              <section>
                <h2 className="text-2xl font-serif text-primary uppercase tracking-wide mb-8 pb-3 border-b border-primary/30">
                  Opening Hours and Menus
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-serif text-primary uppercase mb-3">Afternoon Tea</h3>
                  <p className="text-foreground/70 mb-2">2:30pm – 5:30pm daily</p>
                  <p className="text-foreground/80 mb-4">"Luminous Bloom" Afternoon Tea at HK$488* per person</p>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Book Afternoon Tea
                  </Button>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-serif text-primary uppercase mb-3">All-Day Menu</h3>
                  <p className="text-foreground/70 mb-4">7:00am – 11:00pm daily</p>
                  <p className="text-foreground/80 mb-4">Coffee, tea, light snacks, and beverages</p>
                  <Button variant="outline" size="sm">
                    View Menu
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
                  <p className="text-foreground/80">80</p>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-primary uppercase mb-2">Reservations</h3>
                  <p className="text-foreground/80">Recommended for afternoon tea</p>
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
                    src={afternoonTeaImage}
                    alt="Luminous Bloom Afternoon Tea"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-serif text-lg text-primary mb-2">Luminous Bloom Afternoon Tea</h3>
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

export default LobbyLounge;
