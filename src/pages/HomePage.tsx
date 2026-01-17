import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ChevronLeft, ChevronRight, Monitor, Printer, Wifi, Speaker, Smartphone, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disc from "@/components/Disc";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    title: "Quick and Accurate Computer Assistance",
    description: "At SmartPrint, we offer professional computer support services to ensure your system operates seamlessly. Our certified technicians provide prompt and efficient solutions for all your computer-related issues, whether it's slow performance, software installation, or virus removal."
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80",
    title: "Expert Printer Setup & Support",
    description: "Get your printer connected and running in minutes. Our step-by-step guides and expert support team are here to help you with wireless setup, driver installation, and troubleshooting any printing issues."
  },
  {
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1920&q=80",
    title: "24/7 Technical Support Available",
    description: "Round-the-clock assistance for all your tech needs. From network issues to device configuration, our team is always ready to help you get back on track."
  }
];

const deviceCategories = [
  {
    icon: Monitor,
    title: "Computer Support",
    description: "PC optimization, virus removal, software installation",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80"
  },
  {
    icon: Printer,
    title: "Printer Setup",
    description: "Wireless setup, driver installation, troubleshooting",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80",
    link: "/setup"
  },
  {
    icon: Wifi,
    title: "Network Solutions",
    description: "WiFi setup, router configuration, connectivity issues",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80"
  },
  {
    icon: Speaker,
    title: "Smart Home Devices",
    description: "Smart speakers, home automation, device pairing",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&q=80"
  }
];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Carousel Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mb-8 px-4">
                {slide.description}
              </p>
              <Button
                onClick={() => navigate("/setup")}
                className="bg-white text-[#005bb5] hover:bg-gray-100 font-semibold py-6 px-8 text-base md:text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book Now!
              </Button>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Device Assistance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#005bb5] mb-4">
              Complete Device Assistance Personalized for You!
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              From laptops to smartphones, printers to smart home devices – we've got your back with reliable assistance for all your gadgets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {deviceCategories.map((category, index) => (
              <div
                key={index}
                onClick={() => category.link && navigate(category.link)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  category.link ? "cursor-pointer" : ""
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#00c5ff]/10 rounded-lg">
                      <category.icon className="w-6 h-6 text-[#00c5ff]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#005bb5]">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#005bb5] to-[#00c5ff]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose SmartPrint?
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              We're committed to providing the best technical support experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Certified Experts</h3>
              <p className="text-white/80">Our technicians are certified and trained to handle all your tech issues</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-white/80">Round-the-clock assistance whenever you need help</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">All Devices</h3>
              <p className="text-white/80">Support for computers, printers, phones, and smart devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#005bb5] mb-4">
            Need Help With Your Printer?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get step-by-step guidance for setting up your printer or troubleshooting common issues.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => navigate("/setup")}
              className="bg-[#00c5ff] hover:bg-[#00a0d4] text-white font-semibold py-6 px-8 text-base md:text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Go to Printer Setup
            </Button>
            <a
              href="tel:+17602740601"
              className="flex items-center gap-2 text-[#005bb5] font-bold text-lg hover:text-[#00c5ff] transition-colors"
            >
              <Phone className="w-5 h-5" />
              +1 (760) 274-0601
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <Disc />
    </div>
  );
};

export default HomePage;
