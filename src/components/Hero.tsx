import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../images/sps-1.png";
import img2 from "../images/sps-2.png";

const sliderImages = [img1, img2];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    setIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8f9fb] py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center items-start space-y-8">
            <h1 className="text-5xl font-bold tracking-tight text-[#0274e6]">
              EASY PRINTER SETUP
            </h1>
            <p className="text-lg text-gray-800">
              Power up your printer to begin.
            </p>
            <p className="text-lg text-gray-800">
              Then, hit Printer Setup for a simple, step-by-step walkthrough on
              setting up, customizing, and registering your device.
            </p>
            <Button
              onClick={() => navigate("/printer-setup")}
              className="
    bg-[#00a9ff] 
    hover:bg-[#029ce8] 
    text-white font-semibold 
    py-3 px-6 text-base
    shadow-lg
    transition-all duration-300
    shadow-black/50
    hover:shadow-black/50
    hover:-translate-y-1
    hover:scale-105
    ml-6
  "
              style={{ width: "fit-content", minWidth: "180px" }}
            >
              Click Here For Printer Setup
            </Button>
          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="relative flex justify-end items-center">
            <img
              src={sliderImages[index]}
              alt="Printer"
              className="max-w-full h-auto rounded-lg shadow-md duration-500 ease-in-out transform"
            />
            {/* LEFT ARROW */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 
              bg-black/40 hover:bg-black/70 text-white rounded-full p-2 
              shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            {/* RIGHT ARROW */}
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 
              bg-black/40 hover:bg-black/70 text-white rounded-full p-2 
              shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
