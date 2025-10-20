import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import afternoonTeaImage from "@/assets/afternoon-tea.jpg";

const CakeShop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner
          image={afternoonTeaImage}
          title="Cake Shop & Gift Shop"
          subtitle="Artisanal pastries and gourmet gifts"
        />

        <div className="container mx-auto px-4 py-16">
          <section className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-serif text-gradient-gold mb-6 text-center">
              Sweet Perfection
            </h2>
            <div className="prose prose-lg mx-auto text-foreground/80">
              <p className="text-center">
                Our Cake Shop & Gift Shop features handcrafted pastries, cakes, and artisanal
                chocolates made by our expert patissiers. Perfect for gifts or to enjoy at home.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Signature Cakes", price: "From HK$ 480" },
                { name: "French Macarons", price: "HK$ 280 / box" },
                { name: "Artisan Chocolates", price: "HK$ 380 / box" },
                { name: "Fresh Pastries", price: "From HK$ 45" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border hover-lift text-center"
                >
                  <h3 className="text-xl font-serif text-primary mb-2">{item.name}</h3>
                  <p className="text-foreground/80">{item.price}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-secondary/30 rounded-lg p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                Custom Orders
              </h3>
              <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
                Planning a special occasion? Our patissiers can create custom cakes and desserts
                tailored to your event. Contact us to discuss your requirements.
              </p>
              <p className="text-sm text-muted-foreground">
                Minimum 3 days advance notice required
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Opening Hours</h4>
              <p className="text-foreground/80">
                Daily: 8:00 AM - 8:00 PM
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Orders</h4>
              <p className="text-foreground/80">
                Tel: (852) 2521 3838<br />
                Email: cakeshop@conradhk.com
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Services</h4>
              <p className="text-foreground/80">
                Custom Cakes<br />
                Gift Packaging<br />
                Delivery Available
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CakeShop;
