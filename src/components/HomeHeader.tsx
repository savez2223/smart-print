import { useState } from "react";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactPopup from "./ContactPopup";

const HomeHeader = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-10 h-10 bg-[#0aa5d9] rounded flex items-center justify-center text-white font-bold">
                PC
              </div>
              <span className="font-bold text-lg text-gray-800">
                PC Packard
              </span>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex gap-8 font-medium text-gray-700">
              <a href="/">Home</a>
              <a href="about">About</a>
              <a href="services">Service</a>
              <a href="partner-with-us">Partner With Us</a>
              <a href="faq">FAQs</a>
            </nav>

            {/* Right */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+17602740601"
                className="hidden lg:flex items-center gap-2 text-[#0aa5d9] font-semibold"
              >
                <Phone size={18} />
                +1 (760) 274-0601
              </a>

              <button
                onClick={() => setOpen(true)}
                className="border border-[#0aa5d9] text-[#0aa5d9] px-6 py-2 rounded-full font-semibold hover:bg-[#0aa5d9] hover:text-white transition"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* POPUP MODAL */}
      <ContactPopup open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default HomeHeader;
