import { useState } from "react";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactPopup from "./ContactPopup";
import Logo from "@/images/pc-logo-3.png";

const HomeHeader = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* LOGO */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center cursor-pointer select-none"
            >
              <img
                src={Logo}
                alt="PC-ConnectHUB Logo"
                className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* NAV LINKS */}
            <nav className="hidden md:flex items-center gap-10 font-medium text-gray-700 text-[15px]">
              <a href="/" className="hover:text-[#0aa5d9] transition">
                Home
              </a>
              <a href="/about" className="hover:text-[#0aa5d9] transition">
                About
              </a>
              <a href="/services" className="hover:text-[#0aa5d9] transition">
                Service
              </a>
              <a
                href="/partner-with-us"
                className="hover:text-[#0aa5d9] transition"
              >
                Partner With Us
              </a>
              <a href="/faq" className="hover:text-[#0aa5d9] transition">
                FAQs
              </a>
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-6">
              <a
                href="tel:+17602740601"
                className="hidden lg:flex items-center gap-2 text-[#0aa5d9] font-semibold text-sm"
              >
                <Phone size={18} />
                +1 (760) 274-0601
              </a>

              <button
                onClick={() => setOpen(true)}
                className="border border-[#0aa5d9] text-[#0aa5d9] px-7 py-2.5 rounded-full 
                font-semibold text-sm hover:bg-[#0aa5d9] hover:text-white transition-all duration-300"
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
