import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import brasserieImage from "@/assets/brasserie-seafood-hero.jpg";
import degustationImage from "@/assets/degustation-dinner.jpg";
import { Phone, Mail, MapPin } from "lucide-react";

const Brasserie = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner
          image={brasserieImage}
          title="Brasserie on the Eighth"
          subtitle="Contemporary French dining with panoramic city views"
        />

        <div className="container mx-auto px-4 py-16">
          {/* Overview */}
          <section className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-serif text-primary mb-8">Overview</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Brasserie on the Eighth features an array of all-time favourite French-continental dishes and is the perfect venue for a casual evening of wine and fine dining. The open kitchen showcases the chefs' culinary actions, creating an interactive dining experience.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Button size="lg" variant="secondary" className="w-full lg:w-auto">
                  Quick Reservation »
                </Button>
              </div>
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Opening Hours and Menus */}
            <div className="lg:col-span-2 space-y-12">
              {/* Opening Hours and Menus */}
              <section>
                <h2 className="text-3xl font-serif text-primary mb-8">Opening Hours and Menus</h2>
                
                {/* Lunch */}
                <div className="mb-10">
                  <h3 className="text-xl font-serif text-primary mb-4">Lunch</h3>
                  <p className="text-foreground/80 mb-3">12:00am - 3:00pm (Monday to Friday)</p>
                  <p className="text-foreground/80 mb-2">3 course menu at HK$488* per person</p>
                  <p className="text-foreground/80 mb-4">Appetizer Bar at HK$308* per person</p>
                  <p className="text-sm text-muted-foreground mb-4">Please call (852) 2822 8803 for menu enquiries</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-foreground/80">Blend Brothers Set Lunch Menu (7, 10-13 Nov)</p>
                    <p className="text-foreground/80">Lunch Menu (Week 1)</p>
                    <p className="text-foreground/80">Lunch Menu (Week 2)</p>
                  </div>
                </div>

                {/* Weekend Brunch */}
                <div className="mb-10">
                  <h3 className="text-xl font-serif text-primary mb-4">'Vive le Brunch' Weekend Brunch</h3>
                  <p className="text-foreground/80 mb-3">11:30am - 2:30pm (Saturday and Sunday)</p>
                  <p className="text-foreground/80 mb-4">
                    HK$798 / 898 / 1148 / 1648* per adult | HK$398* per child (aged 4-11)
                  </p>
                  <Button variant="secondary" className="mb-4">
                    Reserve via eShop
                  </Button>
                </div>

                {/* Dinner */}
                <div>
                  <h3 className="text-xl font-serif text-primary mb-4">Dinner</h3>
                  <p className="text-foreground/80 mb-4">6:30pm - 10:30pm daily</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-foreground/80 mb-2">Blend Brothers Opening Night Dinner Menu (6 Nov)</p>
                      <Button variant="secondary" size="sm">Reserve via eShop</Button>
                    </div>
                    <div>
                      <p className="text-foreground/80 mb-2">Blend Brothers Set Dinner Menu (7, 14 Nov)</p>
                      <Button variant="secondary" size="sm">Reserve via eShop</Button>
                    </div>
                    <div>
                      <p className="text-foreground/80 mb-2">Blend Brothers À La Carte Menu (7-14 Nov)</p>
                      <Button variant="secondary" size="sm">Reserve via eShop</Button>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-foreground/80 mb-2">Hidden Treasures of the DAGU Set Dinner</p>
                      <Button variant="secondary" size="sm">Reserve via eShop</Button>
                    </div>
                    <div className="space-y-2 text-sm pt-2">
                      <p className="text-foreground/80">Degustation Dinner Menu</p>
                      <p className="text-foreground/80">Thanksgiving Dinner Menu (24-30 Nov)</p>
                      <p className="text-foreground/80">A La Carte Menu »</p>
                      <p className="text-foreground/80">Dessert Menu »</p>
                    </div>
                    <Button variant="secondary">Reserve via eShop</Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">*Subject to 10% service charge</p>
                </div>
              </section>

              {/* Additional Details */}
              <section className="space-y-6 pt-8 border-t border-border">
                <div>
                  <h3 className="text-xl font-serif text-primary mb-3">Dress Code</h3>
                  <p className="text-foreground/80">Smart Casual</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-primary mb-3">Seating Capacity</h3>
                  <p className="text-foreground/80">92</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-primary mb-3">Private Dining Room</h3>
                  <p className="text-foreground/80">1 room for a maximum of 18 persons</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-foreground/70 italic">'Vive le Brunch' Saturday Brunch Menu</p>
                </div>
              </section>
            </div>

            {/* Right Column - Special Offer & Contact */}
            <div className="space-y-8">
              {/* Special Offer */}
              <section className="card-elegant overflow-hidden">
                <h3 className="text-2xl font-serif text-primary mb-4 px-6 pt-6">Special Offer</h3>
                <div className="aspect-[4/3]">
                  <img
                    src={degustationImage}
                    alt="Degustation Dinner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-center text-foreground/80">Degustation Dinner</p>
                </div>
              </section>

              {/* Contact */}
              <section className="card-elegant p-6">
                <h3 className="text-2xl font-serif text-primary mb-6">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground/80">(852) 2822 8803</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground/80 break-all">HK@c_Brasserie@conradhotels.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground/80">Level 8, Conrad Hong Kong</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Brasserie;
