import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroBanner = ({ image, title, subtitle, ctaText, ctaLink }: HeroBannerProps) => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            asChild
          >
            <a href={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
