import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import brasserieImage from "@/assets/brasserie-interior.jpg";
import brunchImage from "@/assets/brunch-dining.jpg";

const Brasserie = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner
          image={brasserieImage}
          title="Brasserie on the Eighth"
          subtitle="Contemporary French dining with panoramic city views"
        />

        <div className="container mx-auto px-4 py-16">
          {/* About Section */}
          <section className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-serif text-gradient-gold mb-6 text-center">
              About Brasserie on the Eighth
            </h2>
            <div className="prose prose-lg mx-auto text-foreground/80">
              <p className="text-center">
                Experience the finest in contemporary French cuisine at our signature restaurant.
                Perched on the eighth floor, Brasserie on the Eighth offers stunning panoramic
                views of the Hong Kong skyline alongside exceptional culinary creations.
              </p>
            </div>
          </section>

          {/* Current Offer */}
          <section className="mb-16">
            <div className="card-elegant overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto">
                  <img
                    src={brunchImage}
                    alt="Weekend Brunch"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                    'Vive le Brunch' Weekend Brunch
                  </h3>
                  <p className="text-foreground/80 mb-6">
                    Indulge in our lavish weekend brunch featuring an extensive selection of
                    premium seafood, French pastries, and champagne. Every Saturday and Sunday
                    from 12:00 PM to 3:00 PM.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                    <p className="text-2xl font-serif text-primary">HK$ 688</p>
                  </div>
                  <Button size="lg" className="w-full md:w-auto">
                    Make a Reservation
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Details Grid */}
          <section className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Opening Hours</h4>
              <p className="text-foreground/80">
                Lunch: 12:00 PM - 2:30 PM<br />
                Dinner: 6:30 PM - 10:30 PM<br />
                Weekend Brunch: 12:00 PM - 3:00 PM
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Contact</h4>
              <p className="text-foreground/80">
                Tel: (852) 2521 3838<br />
                Email: dining@conradhk.com
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Dress Code</h4>
              <p className="text-foreground/80">
                Smart Casual<br />
                No shorts or flip-flops
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Brasserie;
