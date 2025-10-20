import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import brasserieImage from "@/assets/brasserie-interior.jpg";

const GardenCafe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner
          image={brasserieImage}
          title="Garden Café"
          subtitle="All-day dining with international flavors"
        />

        <div className="container mx-auto px-4 py-16">
          <section className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-serif text-gradient-gold mb-6 text-center">
              International Cuisine All Day
            </h2>
            <div className="prose prose-lg mx-auto text-foreground/80">
              <p className="text-center">
                Garden Café offers a diverse menu featuring international favorites and local
                specialties. From breakfast to dinner, enjoy fresh, seasonal ingredients in a
                relaxed, contemporary setting.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-secondary/30 rounded-lg p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                International Buffet Experience
              </h3>
              <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
                Discover a world of flavors at our extensive buffet featuring live cooking
                stations, fresh seafood, international dishes, and decadent desserts.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Breakfast Buffet</p>
                  <p className="text-2xl font-serif text-primary">HK$ 298</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Lunch Buffet</p>
                  <p className="text-2xl font-serif text-primary">HK$ 398</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Dinner Buffet</p>
                  <p className="text-2xl font-serif text-primary">HK$ 498</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Opening Hours</h4>
              <p className="text-foreground/80">
                Breakfast: 6:30 AM - 10:30 AM<br />
                Lunch: 12:00 PM - 2:30 PM<br />
                Dinner: 6:00 PM - 10:00 PM
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
              <h4 className="text-xl font-serif text-primary mb-3">Highlights</h4>
              <p className="text-foreground/80">
                International Buffet<br />
                À la Carte Menu<br />
                Family Friendly
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GardenCafe;
