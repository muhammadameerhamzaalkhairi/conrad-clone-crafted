import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import afternoonTeaImage from "@/assets/afternoon-tea.jpg";

const LobbyLounge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner
          image={afternoonTeaImage}
          title="Lobby Lounge"
          subtitle="Elegant afternoon tea and light refreshments"
        />

        <div className="container mx-auto px-4 py-16">
          <section className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-serif text-gradient-gold mb-6 text-center">
              A Sophisticated Retreat
            </h2>
            <div className="prose prose-lg mx-auto text-foreground/80">
              <p className="text-center">
                The Lobby Lounge is the perfect setting for afternoon tea, business meetings,
                or a relaxing break. Featuring elegant décor and impeccable service, we offer
                a refined selection of teas, pastries, and light fare.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="card-elegant overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto">
                  <img
                    src={afternoonTeaImage}
                    alt="Luminous Bloom Afternoon Tea"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                    "Luminous Bloom" Afternoon Tea
                  </h3>
                  <p className="text-foreground/80 mb-6">
                    Indulge in our signature afternoon tea featuring delicate pastries, freshly
                    baked scones, and a selection of premium teas. Available daily from 2:30 PM
                    to 5:30 PM.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                    <p className="text-2xl font-serif text-primary">HK$ 488</p>
                  </div>
                  <Button size="lg" className="w-full md:w-auto">
                    Book Afternoon Tea
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Hours</h4>
              <p className="text-foreground/80">
                Daily: 7:00 AM - 11:00 PM<br />
                Afternoon Tea: 2:30 PM - 5:30 PM
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Contact</h4>
              <p className="text-foreground/80">
                Tel: (852) 2521 3838<br />
                Walk-ins Welcome
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-serif text-primary mb-3">Offerings</h4>
              <p className="text-foreground/80">
                Afternoon Tea<br />
                Coffee & Pastries<br />
                Light Meals
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LobbyLounge;
