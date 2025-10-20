import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OfferCard from "@/components/OfferCard";
import heroImage from "@/assets/hero-chefs.jpg";
import brunchImage from "@/assets/brunch-dining.jpg";
import afternoonTeaImage from "@/assets/afternoon-tea.jpg";
import brasserieImage from "@/assets/brasserie-interior.jpg";
import pacificBarImage from "@/assets/pacific-bar.jpg";
import goldenLeafImage from "@/assets/golden-leaf.jpg";

const NewsOffers = () => {
  const offers = [
    {
      image: heroImage,
      venue: "Brasserie on the Eighth",
      title: "Guest Chef: Blend Brothers from The Netherlands (6 – 14 November)",
      link: "/brasserie",
    },
    {
      image: brunchImage,
      venue: "Brasserie on the Eighth",
      title: "'Vive le Brunch' Weekend Brunch with 20% Off",
      link: "/brasserie",
    },
    {
      image: afternoonTeaImage,
      venue: "Lobby Lounge",
      title: '"Luminous Bloom" Afternoon Tea Experience',
      link: "/lobby-lounge",
    },
    {
      image: goldenLeafImage,
      venue: "Golden Leaf",
      title: "Signature Dim Sum Collection - New Items Available",
      link: "/golden-leaf",
    },
    {
      image: pacificBarImage,
      venue: "Pacific Bar",
      title: "Happy Hour: Premium Cocktails at Special Prices",
      link: "/pacific-bar",
    },
    {
      image: brasserieImage,
      venue: "Brasserie on the Eighth",
      title: "Wine Pairing Dinner with Renowned Sommelier",
      link: "/brasserie",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-gradient-gold mb-4 animate-fade-in">
              News & Offers
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in">
              Discover our latest dining promotions, special events, and culinary experiences
            </p>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-primary mb-4">
                Stay Updated
              </h2>
              <p className="text-foreground/80 mb-8">
                Subscribe to our newsletter to receive exclusive offers and updates about our
                dining experiences.
              </p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsOffers;
