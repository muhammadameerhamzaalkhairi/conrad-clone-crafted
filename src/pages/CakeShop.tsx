import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import afternoonTeaImage from "@/assets/afternoon-tea.jpg";

const CakeShop = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const products = [
    {
      id: 1,
      image: afternoonTeaImage,
      category: "cakes",
      title: "Signature Wedding Cakes",
      description: "Custom-designed multi-tier cakes for your special day",
    },
    {
      id: 2,
      image: afternoonTeaImage,
      category: "pastries",
      title: "French Macarons Collection",
      description: "Assorted flavors in elegant gift boxes",
    },
    {
      id: 3,
      image: afternoonTeaImage,
      category: "chocolates",
      title: "Artisan Chocolate Selection",
      description: "Handcrafted chocolates by our master chocolatier",
    },
    {
      id: 4,
      image: afternoonTeaImage,
      category: "cakes",
      title: "Birthday Celebration Cakes",
      description: "Personalized cakes for all ages and occasions",
    },
    {
      id: 5,
      image: afternoonTeaImage,
      category: "pastries",
      title: "Danish Pastry Assortment",
      description: "Freshly baked buttery pastries daily",
    },
    {
      id: 6,
      image: afternoonTeaImage,
      category: "gifts",
      title: "Gourmet Gift Hampers",
      description: "Curated selection of premium treats",
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Title Section */}
        <section className="bg-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif text-primary text-center uppercase tracking-wider">
              Cake Shop & Gift Shop
            </h1>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="bg-secondary/20 py-6 border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className={`uppercase tracking-wide ${
                  activeFilter === "all"
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                All
              </Button>
              <Button
                variant={activeFilter === "cakes" ? "default" : "outline"}
                onClick={() => setActiveFilter("cakes")}
                className={`uppercase tracking-wide ${
                  activeFilter === "cakes"
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                Cakes
              </Button>
              <Button
                variant={activeFilter === "pastries" ? "default" : "outline"}
                onClick={() => setActiveFilter("pastries")}
                className={`uppercase tracking-wide ${
                  activeFilter === "pastries"
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                Pastries
              </Button>
              <Button
                variant={activeFilter === "chocolates" ? "default" : "outline"}
                onClick={() => setActiveFilter("chocolates")}
                className={`uppercase tracking-wide ${
                  activeFilter === "chocolates"
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                Chocolates
              </Button>
              <Button
                variant={activeFilter === "gifts" ? "default" : "outline"}
                onClick={() => setActiveFilter("gifts")}
                className={`uppercase tracking-wide ${
                  activeFilter === "gifts"
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                Gifts
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-white px-4 py-2 text-xs uppercase tracking-wider font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-primary mb-3">
                      {product.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <button className="text-primary hover:text-primary/80 transition-colors text-sm uppercase tracking-wide font-medium">
                      More »
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="bg-secondary/10 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-serif text-primary mb-3 uppercase tracking-wide">
                  Opening Hours
                </h3>
                <p className="text-foreground/80">Daily: 8:00 AM - 8:00 PM</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-primary mb-3 uppercase tracking-wide">
                  Orders
                </h3>
                <p className="text-foreground/80">
                  Tel: (852) 2521 3838
                  <br />
                  Email: cakeshop@conradhk.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-primary mb-3 uppercase tracking-wide">
                  Services
                </h3>
                <p className="text-foreground/80">
                  Custom Orders
                  <br />
                  Gift Packaging
                  <br />
                  Delivery Available
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CakeShop;
