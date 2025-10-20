import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import goldenLeafImage from "@/assets/golden-leaf.jpg";

const GoldenLeaf = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner
          image={goldenLeafImage}
          title="Golden Leaf"
          subtitle="Authentic Cantonese cuisine and exquisite dim sum"
        />

        <div className="container mx-auto px-4 py-16">
          <section className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-serif text-gradient-gold mb-6 text-center">
              Traditional Cantonese Excellence
            </h2>
            <div className="prose prose-lg mx-auto text-foreground/80">
              <p className="text-center">
                Golden Leaf brings you the finest authentic Cantonese cuisine with a contemporary twist.
                Renowned for our exceptional dim sum and signature dishes, we celebrate the rich
                culinary heritage of Hong Kong with ingredients sourced from the best suppliers.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-secondary/30 rounded-lg p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                Signature Dim Sum Experience
              </h3>
              <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
                Experience our award-winning dim sum, handcrafted daily by our master chefs.
                From classic favorites to innovative creations, each piece is a work of art.
              </p>
              <Button size="lg">Reserve Your Table</Button>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Opening Hours</h4>
              <p className="text-foreground/80">
                Lunch: 12:00 PM - 2:30 PM<br />
                Dinner: 6:30 PM - 10:30 PM<br />
                Dim Sum: 11:30 AM - 3:00 PM
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Reservations</h4>
              <p className="text-foreground/80">
                Tel: (852) 2521 3838<br />
                Email: dining@conradhk.com
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Specialties</h4>
              <p className="text-foreground/80">
                Dim Sum<br />
                Roasted Meats<br />
                Fresh Seafood
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GoldenLeaf;
