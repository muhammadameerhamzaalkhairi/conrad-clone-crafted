import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-chefs.jpg";
import brunchImage from "@/assets/brunch-dining.jpg";
import afternoonTeaImage from "@/assets/afternoon-tea.jpg";
import brasserieImage from "@/assets/brasserie-interior.jpg";
import pacificBarImage from "@/assets/pacific-bar.jpg";
import goldenLeafImage from "@/assets/golden-leaf.jpg";

const NewsOffers = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Accommodation", "Dining", "Gifts"];

  const offers = [
    {
      image: heroImage,
      venue: "Brasserie on the Eighth",
      title: "Guest Chef: Blend Brothers from The Netherlands (6 – 14 November)",
      link: "/brasserie",
      category: "Dining",
    },
    {
      image: brunchImage,
      venue: "Brasserie on the Eighth",
      title: "'Vive le Brunch' Weekend Brunch",
      link: "/brasserie",
      category: "Dining",
    },
    {
      image: afternoonTeaImage,
      venue: "Lobby Lounge",
      title: '"Luminous Bloom" Afternoon Tea',
      link: "/lobby-lounge",
      category: "Dining",
    },
    {
      image: goldenLeafImage,
      venue: "Golden Leaf",
      title: "Signature Dim Sum Collection",
      link: "/golden-leaf",
      category: "Dining",
    },
    {
      image: pacificBarImage,
      venue: "Pacific Bar",
      title: "Happy Hour Premium Cocktails",
      link: "/pacific-bar",
      category: "Dining",
    },
    {
      image: brasserieImage,
      venue: "Brasserie on the Eighth",
      title: "Wine Pairing Dinner",
      link: "/brasserie",
      category: "Dining",
    },
  ];

  const filteredOffers =
    activeFilter === "All"
      ? offers
      : offers.filter((offer) => offer.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 bg-[#f5f1e8]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-primary uppercase tracking-wider mb-8">
              News & Offers
            </h1>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 text-sm uppercase tracking-wide transition-colors ${
                    activeFilter === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-white text-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffers.map((offer, index) => (
              <div key={index} className="group animate-fade-in">
                <Link to={offer.link} className="block">
                  <div className="relative overflow-hidden aspect-[4/3] mb-4">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-1 text-xs uppercase tracking-wider">
                      {offer.venue}
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-primary mb-4 group-hover:text-primary/80 transition-colors">
                    {offer.title}
                  </h3>
                  <span className="text-sm text-foreground/70 uppercase tracking-wide hover:text-primary transition-colors">
                    MORE »
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsOffers;
