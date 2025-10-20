import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif text-primary mb-4">Conrad Hong Kong</h3>
            <p className="text-foreground/80 mb-2">
              Pacific Place, 88 Queensway, Hong Kong
            </p>
            <p className="text-foreground/80">
              Tel:{" "}
              <a href="tel:+85225213838" className="text-primary hover:underline">
                (852) 2521 3838
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="md:text-right">
            <h3 className="text-xl font-serif text-primary mb-4">Follow Us</h3>
            <div className="flex gap-4 md:justify-end">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>©2024 Conrad Hong Kong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
