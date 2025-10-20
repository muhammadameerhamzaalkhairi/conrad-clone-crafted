import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import pacificBarImage from "@/assets/pacific-bar.jpg";

const PacificBar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner
          image={pacificBarImage}
          title="Pacific Bar"
          subtitle="Sophisticated cocktails and premium spirits"
        />

        <div className="container mx-auto px-4 py-16">
          <section className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-serif text-gradient-gold mb-6 text-center">
              The Art of Mixology
            </h2>
            <div className="prose prose-lg mx-auto text-foreground/80">
              <p className="text-center">
                Pacific Bar is Hong Kong's premier destination for expertly crafted cocktails
                and rare spirits. Our award-winning mixologists create innovative drinks in an
                atmosphere of refined elegance.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-secondary/30 rounded-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6 text-center">
                Signature Cocktails
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h4 className="text-xl font-serif text-primary mb-2">Pacific Breeze</h4>
                  <p className="text-foreground/80 text-sm mb-3">
                    Gin, elderflower, cucumber, lime, topped with prosecco
                  </p>
                  <p className="text-primary font-medium">HK$ 165</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h4 className="text-xl font-serif text-primary mb-2">Hong Kong Sunset</h4>
                  <p className="text-foreground/80 text-sm mb-3">
                    Aged rum, passion fruit, ginger, Angostura bitters
                  </p>
                  <p className="text-primary font-medium">HK$ 175</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h4 className="text-xl font-serif text-primary mb-2">Golden Leaf Martini</h4>
                  <p className="text-foreground/80 text-sm mb-3">
                    Premium vodka, sake, lychee, edible gold leaf
                  </p>
                  <p className="text-primary font-medium">HK$ 185</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h4 className="text-xl font-serif text-primary mb-2">Conrad Classic</h4>
                  <p className="text-foreground/80 text-sm mb-3">
                    Whisky, sweet vermouth, bitters, luxardo cherry
                  </p>
                  <p className="text-primary font-medium">HK$ 155</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Opening Hours</h4>
              <p className="text-foreground/80">
                Monday - Thursday: 5:00 PM - 1:00 AM<br />
                Friday - Saturday: 5:00 PM - 2:00 AM<br />
                Sunday: 5:00 PM - 12:00 AM
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Reservations</h4>
              <p className="text-foreground/80">
                Tel: (852) 2521 3838<br />
                Groups of 6+ recommended to book
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Features</h4>
              <p className="text-foreground/80">
                Craft Cocktails<br />
                Premium Spirits<br />
                Live Music
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PacificBar;
