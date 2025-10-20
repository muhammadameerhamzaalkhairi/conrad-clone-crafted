import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface OfferCardProps {
  image: string;
  venue: string;
  title: string;
  link: string;
}

const OfferCard = ({ image, venue, title, link }: OfferCardProps) => {
  return (
    <div className="card-elegant group animate-fade-in">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <p className="text-sm text-primary font-medium mb-2 tracking-wide uppercase">
          {venue}
        </p>
        <h3 className="text-xl font-serif text-foreground mb-4 line-clamp-2">
          {title}
        </h3>
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group/link"
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;
