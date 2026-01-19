import { Link } from "react-router-dom";
import HeroBg from "@/images/HBG1.jpg";

interface PageHeroBannerProps {
  title: string;
  breadcrumb: string;
}

const PageHeroBanner = ({ title, breadcrumb }: PageHeroBannerProps) => {
  return (
    <div 
      className="relative w-full h-[200px] md:h-[280px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Link to="/" className="hover:text-[#06b6d4] transition-colors">
            Home
          </Link>
          <span className="text-[#06b6d4]">•</span>
          <span>{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeroBanner;
