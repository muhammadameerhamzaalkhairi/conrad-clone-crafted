import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import pacificBarImage from "@/assets/pacific-bar.jpg";

const PacificBar = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Image */}
        <section className="relative h-[500px] w-full">
          <img
            src={pacificBarImage}
            alt="Pacific Bar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white uppercase tracking-wider">
              Pacific Bar
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
                  Pacific Bar is Hong Kong's premier destination for expertly crafted cocktails and rare spirits. 
                  Our award-winning mixologists create innovative drinks in an atmosphere of refined elegance.
                </p>
              </section>

              {/* Opening Hours */}
              <section>
                <h2 className="text-2xl font-serif text-primary uppercase tracking-wide mb-8 pb-3 border-b border-primary/30">
                  Opening Hours
                </h2>
                <div className="mb-6">
                  <p className="text-foreground/70 mb-2">Monday – Thursday: 5:00pm – 1:00am</p>
                  <p className="text-foreground/70 mb-2">Friday – Saturday: 5:00pm – 2:00am</p>
                  <p className="text-foreground/70">Sunday: 5:00pm – 12:00am</p>
                </div>
              </section>

              {/* Signature Cocktails */}
              <section>
                <h2 className="text-2xl font-serif text-primary uppercase tracking-wide mb-8 pb-3 border-b border-primary/30">
                  Signature Cocktails
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-secondary/20 rounded-lg border border-primary/10">
                    <h4 className="text-lg font-serif text-primary mb-2">Pacific Breeze</h4>
                    <p className="text-foreground/70 text-sm mb-3">
                      Gin, elderflower, cucumber, lime, topped with prosecco
                    </p>
                    <p className="text-primary font-medium">HK$ 165</p>
                  </div>
                  <div className="p-6 bg-secondary/20 rounded-lg border border-primary/10">
                    <h4 className="text-lg font-serif text-primary mb-2">Hong Kong Sunset</h4>
                    <p className="text-foreground/70 text-sm mb-3">
                      Aged rum, passion fruit, ginger, Angostura bitters
                    </p>
                    <p className="text-primary font-medium">HK$ 175</p>
                  </div>
                  <div className="p-6 bg-secondary/20 rounded-lg border border-primary/10">
                    <h4 className="text-lg font-serif text-primary mb-2">Golden Leaf Martini</h4>
                    <p className="text-foreground/70 text-sm mb-3">
                      Premium vodka, sake, lychee, edible gold leaf
                    </p>
                    <p className="text-primary font-medium">HK$ 185</p>
                  </div>
                  <div className="p-6 bg-secondary/20 rounded-lg border border-primary/10">
                    <h4 className="text-lg font-serif text-primary mb-2">Conrad Classic</h4>
                    <p className="text-foreground/70 text-sm mb-3">
                      Whisky, sweet vermouth, bitters, luxardo cherry
                    </p>
                    <p className="text-primary font-medium">HK$ 155</p>
                  </div>
                </div>
              </section>

              {/* Additional Details */}
              <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <h3 className="text-lg font-serif text-primary uppercase mb-2">Dress Code</h3>
                  <p className="text-foreground/80">Smart Casual</p>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-primary uppercase mb-2">Seating Capacity</h3>
                  <p className="text-foreground/80">60</p>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-primary uppercase mb-2">Features</h3>
                  <p className="text-foreground/80">Live Music, Happy Hour</p>
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
                    src={pacificBarImage}
                    alt="Happy Hour"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-serif text-lg text-primary mb-2">Happy Hour Special</h3>
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

export default PacificBar;
