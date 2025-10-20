import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import afternoonTeaImage from "@/assets/afternoon-tea.jpg";
import brunchImage from "@/assets/brunch-dining.jpg";
import { ShoppingBag } from "lucide-react";

const EShop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif text-gradient-gold mb-4 animate-fade-in">
              Conrad Dining eShop
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in">
              Purchase dining vouchers, gift sets, and exclusive experiences online
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-elegant">
              <img
                src={brunchImage}
                alt="Dining Vouchers"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-3">
                  Dining Vouchers
                </h3>
                <p className="text-foreground/80 mb-4">
                  Purchase vouchers for our restaurants and give the gift of exceptional dining
                  experiences.
                </p>
                <Button className="w-full">Browse Vouchers</Button>
              </div>
            </div>

            <div className="card-elegant">
              <img
                src={afternoonTeaImage}
                alt="Gift Sets"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-3">
                  Gourmet Gift Sets
                </h3>
                <p className="text-foreground/80 mb-4">
                  Curated selections of our finest pastries, chocolates, and delicacies,
                  beautifully packaged.
                </p>
                <Button className="w-full">View Gift Sets</Button>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-serif text-primary mb-6">Popular Products</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: "Afternoon Tea Voucher", price: "HK$ 488" },
                { name: "Weekend Brunch Package", price: "HK$ 688" },
                { name: "Signature Cake Gift Box", price: "HK$ 580" },
              ].map((product, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border hover-lift"
                >
                  <h3 className="text-lg font-serif text-primary mb-2">{product.name}</h3>
                  <p className="text-2xl font-serif text-primary mb-4">{product.price}</p>
                  <Button variant="outline" className="w-full">
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EShop;
