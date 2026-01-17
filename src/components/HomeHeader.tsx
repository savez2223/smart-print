import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#005bb5] to-[#00c5ff] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">SP</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-[#005bb5]">SmartPrint</h1>
              <p className="text-[10px] md:text-xs text-gray-500 -mt-1">Tech Support Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-[#005bb5] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="tel:+17602740601"
              className="hidden lg:flex items-center gap-2 text-[#005bb5] font-bold"
            >
              <Phone className="w-5 h-5" />
              <span>+1 (760) 274-0601</span>
            </a>
            <button
              onClick={() => navigate("/setup")}
              className="bg-gradient-to-r from-[#005bb5] to-[#00c5ff] text-white font-semibold py-2 px-4 md:py-2.5 md:px-6 rounded-full text-sm md:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Support
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-[#005bb5] font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+17602740601"
                className="flex items-center gap-2 text-[#005bb5] font-bold py-2"
              >
                <Phone className="w-5 h-5" />
                <span>+1 (760) 274-0601</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
