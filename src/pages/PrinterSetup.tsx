import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bgImage from "../assets/printer-setup-bg.png";
import tshirtPrinter from "../assets/tshirt-printer.jpg";
import tshirtWoman from "../assets/tshirt-woman.jpg";

const PrinterSetup = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Background Image */}
        <section 
          className="relative py-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Discover the Right Printer Software
              </h1>
              <p className="text-lg text-white/90 mb-4">
                From design tools to print management and driver updates — everything you need for flawless t-shirt printing is right here.
              </p>
              <p className="text-lg text-white/90 mb-8">
                Just enter your printer model to get started and find the perfect match for your setup.
              </p>
              
              {/* Search Bar */}
              <div className="flex gap-3">
                <Input 
                  type="text"
                  placeholder='Enter your printer model number. Ex: "Laserjet Pro 400"'
                  className="flex-1 h-12 text-base bg-white"
                />
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Opt Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Why Opt for Our T-Shirt Printing Software?
                </h2>
                <p className="text-gray-700 mb-8">
                  Choosing the right software isn't just about convenience—it's about unlocking your full creative potential. Whether you're just starting out or running a print business, our software helps you deliver stunning results with speed and precision.
                </p>
                <ul className="space-y-4">
                  {[
                    "Smooth compatibility with a wide range of printer models",
                    "Pro-level color control for eye-catching, vibrant prints",
                    "Intuitive design tools for effortless customization",
                    "Supports various file formats for maximum flexibility",
                    "Smart print settings to save time, ink, and materials",
                    "Frequent updates packed with new features and enhancements"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 bg-primary rounded p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img 
                  src={tshirtPrinter} 
                  alt="T-shirt printing machine in action"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kickstart Journey Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={tshirtWoman} 
                  alt="Woman holding custom printed t-shirt"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Kickstart Your Journey with T-Shirt Printing Software
                </h2>
                <p className="text-gray-700 mb-6">
                  Take your t-shirt printing to the next level with powerful, easy-to-use software. Whether you're just starting out or already a pro, the right tools help you achieve accurate designs, bold colors, and a smooth workflow every time.
                </p>
                <p className="text-gray-700 mb-6">
                  T-shirt printing software empowers you to craft custom designs, fine-tune color settings, and optimize prints for stunning results. From DTG and DTF to screen printing and sublimation, the right software streamlines your process and boosts print quality.
                </p>
                <p className="text-gray-700 mb-8">
                  Enjoy features like intelligent design adjustments, wide printer compatibility, and user-friendly interfaces that put creativity and control at your fingertips. Turn your apparel ideas into reality—faster, easier, and more precisely than ever.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Chat With Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrinterSetup;
