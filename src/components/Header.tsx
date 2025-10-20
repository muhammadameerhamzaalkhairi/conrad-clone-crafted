import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "eShop", path: "/eshop" },
    { name: "Brasserie on the Eighth", path: "/brasserie" },
    { name: "Golden Leaf", path: "/golden-leaf" },
    { name: "Garden Café", path: "/garden-cafe" },
    { name: "Lobby Lounge", path: "/lobby-lounge" },
    { name: "Pacific Bar", path: "/pacific-bar" },
    { name: "Cake Shop & Gift Shop", path: "/cake-shop" },
    { name: "News & Offers", path: "/news" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-2xl md:text-3xl font-serif tracking-wider text-primary">
            CONRAD
            <span className="block text-sm tracking-[0.3em] text-foreground">HONG KONG</span>
          </h1>
        </Link>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-primary">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary">
            <MapPin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary">
            <Phone className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block bg-secondary/50 backdrop-blur border-t border-border`}
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-1 py-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 text-sm transition-colors hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary font-medium"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
