import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ChevronLeft, ChevronRight, Monitor, Printer, Wifi, Speaker, Smartphone, Shield, Mail, Home, Headphones, Tv, Lock, CheckCircle, Star, ArrowUp } from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
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
    title: "Computer",
    description: "Resolve common errors to computer and laptops from troubleshooting to software, system or platform issues.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80"
  },
  {
    icon: Printer,
    title: "Printer & Scanner",
    description: "We solve printer and scanner-related issues from wrong print issues and connectivity to paper jams, printing and scanning.",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80",
    link: "/setup"
  },
  {
    icon: Wifi,
    title: "WiFi & Network",
    description: "Ensure faster and stable WiFi and network connection. Optimize your network for peak performance and reliability.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80"
  },
  {
    icon: Home,
    title: "Smart Home",
    description: "Enhance your smart home with security systems and smart appliances. We set up your smart devices for convenient, powerful, seamless efficiency.",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&q=80"
  }
];

const assistCategories = [
  { icon: Monitor, label: "Computer" },
  { icon: Printer, label: "Printer & Scanner" },
  { icon: Wifi, label: "Wifi & Network" },
  { icon: Mail, label: "Email" },
  { icon: Shield, label: "Antivirus" },
  { icon: Smartphone, label: "Mobile & Tablets" },
  { icon: Headphones, label: "Audio & Video (Alexa)" },
  { icon: Tv, label: "TV Mounting" },
  { icon: Lock, label: "Home Security" },
];

const workProcessSteps = [
  { id: 1, title: "First Consultation", active: true },
  { id: 2, title: "Evaluation and Scheduling", active: false },
  { id: 3, title: "Execution", active: false },
  { id: 4, title: "Continued Assistance", active: false },
];

const testimonials = [
  {
    name: "PC PACKARD",
    rating: 5,
    text: "PC Packard had a positive experience. They help us with computer and printer-related problems with their excellent knowledge about every technology, always recommended to anyone needing tech support.",
    source: "Google"
  },
  {
    name: "David Mukherjee",
    rating: 5,
    text: "Setting up HP printer was a walk in park thanks to PC Packard. My new printer setup and now I am able to print anywhere in my home. Truly professional.",
    time: "1 month ago",
    source: "Google"
  },
  {
    name: "Angela Sanchez",
    rating: 5,
    text: "Had connection issues with my router. PC Packard fixed everything and now I'm enjoying high-speed internet. Very knowledgeable and patient with explaining everything in simple terms.",
    time: "2 weeks ago",
    source: "Google"
  },
  {
    name: "Ryan Albert",
    rating: 5,
    text: "Amazing service! Had an issue with my PC and they diagnosed it quickly and fixed it remotely. The tech was extremely helpful and made sure everything was working perfectly.",
    time: "3 days ago",
    source: "Google"
  },
  {
    name: "Monica Sterling",
    rating: 5,
    text: "I was struggling with a virus infection on my laptop. The team at PC Packard handled it expertly. They cleaned my system and set up protection to prevent future issues.",
    time: "2 months ago",
    source: "Google"
  }
];

const partners = [
  "Right Signature",
  "authorize.net",
  "McAfee",
  "CompTIA",
  "RingCentral",
  "LogMe"
];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />

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
            <div className="absolute inset-0 bg-gradient-to-r from-[#005bb5]/90 to-[#00c5ff]/70" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-3xl mb-8 px-4">
                {slide.description}
              </p>
              <Button
                onClick={() => navigate("/setup")}
                className="bg-white text-[#005bb5] hover:bg-gray-100 font-semibold py-6 px-8 text-base md:text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Setup
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
                <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#005bb5] mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <button className="text-[#00c5ff] font-semibold text-sm border border-[#00c5ff] px-4 py-2 rounded-full hover:bg-[#00c5ff] hover:text-white transition-all">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Can We Assist You Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1930] mb-4 italic">
              How Can We Assist You Today?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
              We believe technology should enhance everyone's life. That's why we offer a comprehensive range of technology solutions from maintenance, to configuration, ensuring you're always connected from maintenance to installations and expert support. What can we do for you today?
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 mb-8">
            {assistCategories.slice(0, 6).map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group-hover:border-[#00c5ff]">
                  <category.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-600 group-hover:text-[#005bb5] transition-colors" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700 text-center">{category.label}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 md:gap-6">
            {assistCategories.slice(6).map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group-hover:border-[#00c5ff]">
                  <category.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-600 group-hover:text-[#005bb5] transition-colors" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700 text-center">{category.label}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-[#00c5ff] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#00a0d4] transition-all shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* CompTIA Recognition Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-4 bg-gray-50 px-6 py-4 rounded-lg">
              <div className="w-12 h-12 bg-[#005bb5] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-[#005bb5]">CompTIA A+ is Recognized</p>
                <p className="text-sm text-gray-600">By these Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1930] mb-4">
              Our Work Process
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              To ensure that we customize our services to meet your unique demands, we start by conducting a thorough consultation to fully understand your needs.
            </p>
          </div>

          {/* Process Steps */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {workProcessSteps.map((step) => (
              <button
                key={step.id}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  step.active
                    ? "bg-[#005bb5] text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-[#005bb5]"
                }`}
              >
                {step.id}. {step.title}
              </button>
            ))}
          </div>

          {/* Evaluation Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-[#005bb5] mb-4">
              Evaluation and Scheduling
            </h3>
            <p className="text-gray-600 mb-6">
              During the evaluation, our team of experts carefully analyzes your situation to identify any
              technical problem or improvement opportunities. Based on this analysis, we create a tailored
              action plan with the necessary steps to help you achieve success. The
              schedule is agreed with your preferred dates and times and our team. Our
              evaluation may include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Identifying immediate repair needs</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Creating a detailed action plan with timelines</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Providing options tailored to your budget and preferences</span>
              </li>
            </ul>
            <p className="text-gray-600 italic text-sm">
              This ensures a smooth transition from your assessment to execution.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#005bb5] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-[#00a0d4] transition-colors">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-500">Video content coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site & Remote Support Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#005bb5] to-[#00c5ff]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            On-Site & Remote Support for Your Printer, WiFi, and Smart Devices
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-8">
            At PC Packard, we understand the crucial role that printers and smart devices play in your daily operations. Our expert team is here to provide comprehensive support, whether you need assistance on-site or prefer the convenience of remote troubleshooting.
          </p>
          <Button
            onClick={() => navigate("/setup")}
            className="bg-white text-[#005bb5] hover:bg-gray-100 font-semibold py-6 px-8 text-base md:text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1930] mb-4">
              What Our Clients Say!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#005bb5] to-[#00c5ff] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a1930]">{testimonial.name}</h4>
                    {testimonial.time && (
                      <p className="text-sm text-gray-500">{testimonial.time}</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{testimonial.text}</p>
                <div className="mt-4 pt-4 border-t">
                  <a href="#" className="text-[#00c5ff] text-sm font-medium flex items-center gap-1">
                    View on {testimonial.source}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a1930]">
              Our Partnered
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-gray-400 font-bold text-lg md:text-xl hover:text-[#005bb5] transition-colors cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Disc />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 bg-[#00c5ff] text-white p-3 rounded-lg shadow-lg hover:bg-[#005bb5] transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default HomePage;
