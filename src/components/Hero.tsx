import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import ContactPopup from "./ContactPopup";

import img1 from "../images/sps-1.png";
import img2 from "../images/sps-2.png";

const sliderImages = [img1, img2];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);

  const next = () => {
    setIndex((prev) => (prev + 1) % sliderImages.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8f9fb] py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
            {/* LEFT TEXT SECTION */}
            <div className="flex flex-col justify-center items-start space-y-4 md:space-y-6">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2d9cdb]">
                PRINTER SETUP & INSTALLATION
              </h1>

              {/* Sub-text */}
              <p className="text-base md:text-lg text-gray-800 font-medium">
                Facing connectivity issues? We help you connect and setup
                instantly.
              </p>

              {/* PROBLEM LIST */}
              <ul className="space-y-2 bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full sm:w-auto">
                <li className="flex items-center text-gray-700 font-medium">
                  <span className="text-green-500 mr-2 text-xl">✓</span> Printer
                  Offline / Not Connecting
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <span className="text-green-500 mr-2 text-xl">✓</span> Wireless
                  (WiFi) Setup Assistant
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <span className="text-green-500 mr-2 text-xl">✓</span> Driver
                  Installation Fix
                </li>
              </ul>

              {/* CALL TO ACTION */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                {/* Button for Book Now */}
                <Button
                  onClick={() => setPopupOpen(true)}
                  className="bg-[#00a9ff] hover:bg-[#029ce8] text-white font-semibold py-6 px-6 text-base shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Book Now
                </Button>

                {/* Direct Call Box */}
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                    Need Expert Assistant?
                  </span>
                  <a className="text-2xl md:text-3xl font-bold text-red-600 hover:text-red-700 transition-colors">
                    Call: +1 (760) 274-0601
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE SLIDER */}
            <div className="flex justify-end items-center mr-0 md:mr-10 mt-6 md:mt-0">
              <img
                src={sliderImages[index]}
                alt="Printer Installation Helper"
                className="max-w-full h-auto rounded-lg shadow-md duration-500 ease-in-out transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Popup */}
      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
};

export default Hero;
