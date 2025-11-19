import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Check } from "lucide-react";
import Footer from "@/components/Footer";
import bgImage from "../images/setup-bg.jpg";
import tshirtPrinter from "../images/print-s1.jpg";
import tshirtWoman from "../images/print-s2.jpg";
import Disc from "@/components/Disc";

// declare global {
//   interface Window {
//     JivoApi?: {
//       open?: () => void;
//       [key: string]: any;
//     };
//   }
// }

const PrinterSetup = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  const handleSearch = () => {
    if (query.trim()) {
      navigate("/printer-setup/printer-setup-details", {
        state: { printerModel: query },
      });
    }
  };

  const printerModels = [
    // HP Printers
    "HP LaserJet 1020",
    "HP LaserJet 1022",
    "HP LaserJet 1150",
    "HP LaserJet 1200",
    "HP LaserJet 1300",
    "HP LaserJet 1320",
    "HP LaserJet 2100",
    "HP LaserJet 4000",
    "HP LaserJet 4050",
    "HP LaserJet 4100",
    "HP LaserJet 4200",
    "HP LaserJet 4250",
    "HP LaserJet 4300",
    "HP LaserJet 4350",
    "HP LaserJet Pro M402dn",
    "HP MFP M200",
    "HP LaserJet Pro M501",
    "HP OfficeJet Pro 8020",
    "HP OfficeJet Pro 8135e",
    "HP OfficeJet Pro 9125e",
    "HP DeskJet 1050A",
    "HP DeskJet 1510",
    "HP DeskJet Ink Advantage 2135",
    "HP DeskJet 2331", // नया ऐड किया गया मॉडल
    "HP Color LaserJet M254",
    "HP LaserJet Pro M508",
  ];

  const filtered = printerModels.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section with Background */}
        <section
          className="relative py-8 md:py-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Discover the Right Printer Software
              </h1>
              <p className="text-base md:text-lg text-white/90 mb-3 md:mb-4">
                From design tools to print management and driver updates —
                everything you need for flawless t-shirt printing is right here.
              </p>
              <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8">
                Just enter your printer model to get started and find the
                perfect match for your setup.
              </p>

              {/* Search Bar + Suggestions */}
              <div className="relative">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setShowList(true);
                    }}
                    placeholder='Enter your printer model. Ex: "Laserjet Pro 400"'
                    className="flex-1 h-10 md:h-12 text-sm md:text-base bg-white"
                  />

                  <Button
                    size="lg"
                    onClick={handleSearch}
                    className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 w-full sm:w-auto"
                  >
                    <Search className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Search
                  </Button>
                </div>

                {/* Suggestions Dropdown */}
                {showList && query.length > 0 && (
                  <div className="absolute z-20 bg-white w-full mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {filtered.length > 0 ? (
                      filtered.map((model, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setQuery(model);
                            setShowList(false);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                        >
                          {model}
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-gray-500">
                        No matching printer found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Opt Section */}
        <section className="py-8 md:py-10 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Text Column */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                    Why Opt for Our T-Shirt Printing Software?
                  </h2>

                  <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8">
                    Choosing the right software isn't just about convenience—
                    it's about unlocking your full creative potential. Whether
                    you're just starting out or running a print business, our
                    software helps you deliver stunning results with speed and
                    precision.
                  </p>

                  <ul className="space-y-3 md:space-y-4">
                    {[
                      "Smooth compatibility with a wide range of printer models",
                      "Pro-level color control for eye-catching, vibrant prints",
                      "Intuitive design tools for effortless customization",
                      "Guides various file formats for maximum flexibility",
                      "Smart print settings to save time, ink, and materials",
                      "Frequent updates packed with new features and enhancements",
                    ].map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 md:gap-3"
                      >
                        <div className="mt-1 bg-primary rounded p-1 flex-shrink-0">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-white" />
                        </div>
                        <span className="text-sm md:text-base text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Column */}
              <div className="h-64 md:h-full">
                <img
                  src={tshirtPrinter}
                  alt="T-shirt printing machine"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-8 md:py-10 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Image Column */}
              <div className="h-64 md:h-full order-2 lg:order-1">
                <img
                  src={tshirtWoman}
                  alt="Woman with custom T-shirt"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>

              {/* Text Column */}
              <div className="flex flex-col justify-between h-full order-1 lg:order-2">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                    Kickstart Your Journey with T-Shirt Printing Software
                  </h2>

                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                    Take your t-shirt printing to the next level with powerful,
                    easy-to-use software. Whether you're just starting out or
                    already a pro, the right tools help you achieve accurate
                    results and bring your creative vision to life.
                  </p>

                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                    Enjoy features like intelligent design adjustments, wide
                    printer compatibility, and user-friendly interfaces that put
                    creativity and control at your fingertips.
                  </p>
                </div>

                <Button
                  size="lg"
                  // onClick={() => {
                  //   if (
                  //     window.JivoApi &&
                  //     typeof window.JivoApi.open === "function"
                  //   ) {
                  //     window.JivoApi.open();
                  //   } else {
                  //     alert(
                  //       "Chat is not ready yet. Please try again in a moment."
                  //     );
                  //   }
                  // }}
                  className="bg-primary text-white transition-all duration-300 
    hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 
    active:translate-y-0 active:shadow-md w-fit"
                >
                  Chat With Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <Disc />
      </main>
    </div>
  );
};

export default PrinterSetup;
