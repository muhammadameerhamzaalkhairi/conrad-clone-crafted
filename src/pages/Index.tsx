import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import OfferCard from "@/components/OfferCard";
import heroImage from "@/assets/hero-chefs.jpg";
import brunchImage from "@/assets/brunch-dining.jpg";
import afternoonTeaImage from "@/assets/afternoon-tea.jpg";
import goldenLeafImage from "@/assets/golden-leaf.jpg";

const Index = () => {
  const featuredOffers = [
    {
      image: heroImage,
      venue: "Brasserie on the Eighth",
      title: "Guest Chef: Blend Brothers from The Netherlands (6 – 14 November)",
      link: "/brasserie",
    },
    {
      image: brunchImage,
      venue: "Brasserie on the Eighth",
      title: "'Vive le Brunch' Weekend Brunch",
      link: "/brasserie",
    },
    {
      image: afternoonTeaImage,
      venue: "Lobby Lounge",
      title: '"Luminous Bloom" Afternoon Tea',
      link: "/lobby-lounge",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner
          image={heroImage}
          title="Guest Chef: Blend Brothers"
          subtitle="Experience culinary excellence from 6 - 14 November"
          ctaText="Book Now"
          ctaLink="/brasserie"
        />

        {/* Featured Offers Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-gradient-gold">
            Featured Offers
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredOffers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/news"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg group"
            >
              <span>View All Offers</span>
              <span className="transition-transform group-hover:translate-x-1">»</span>
            </a>
          </div>
        </section>

        {/* Venues Overview */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-gradient-gold">
              Our Dining Venues
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Brasserie on the Eighth", path: "/brasserie" },
                { name: "Golden Leaf", path: "/golden-leaf" },
                { name: "Garden Café", path: "/garden-cafe" },
                { name: "Lobby Lounge", path: "/lobby-lounge" },
                { name: "Pacific Bar", path: "/pacific-bar" },
                { name: "Cake Shop & Gift Shop", path: "/cake-shop" },
              ].map((venue) => (
                <a
                  key={venue.path}
                  href={venue.path}
                  className="p-6 bg-card rounded-lg border border-border hover-lift text-center group"
                >
                  <h3 className="text-lg font-serif text-primary group-hover:text-primary/80 transition-colors">
                    {venue.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
