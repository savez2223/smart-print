import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Phone,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Printer,
  Wifi,
  Speaker,
  Smartphone,
  Shield,
  Mail,
  Home,
  Headphones,
  Tv,
  Lock,
  CheckCircle,
  Star,
  ArrowUp,
} from "lucide-react";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import A1 from "@/images/1.png";
import A2 from "@/images/2.png";
import A3 from "@/images/3.png";
import A4 from "@/images/4.png";
import A5 from "@/images/5.png";
import A6 from "@/images/6.png";
import A7 from "@/images/7.png";
import A8 from "@/images/8.png";
import A9 from "@/images/9.png";
import Disc from "@/components/Disc";
import HBG1 from "@/images/HBG1.jpg";
import HBG2 from "@/images/HBG2.jpg";
import HBG3 from "@/images/HBG3.jpg";
import CDA1 from "@/images/CDA 1.jpg";
import CDA2 from "@/images/CDA 2.png";
import CDA3 from "@/images/CDA 3.jpg";
import CDA4 from "@/images/CDA 4.jpg";
import ONSITEBG from "@/images/OnSITEBG.png";
import P1 from "@/images/P1.png";
import P2 from "@/images/p2.png";
import P3 from "@/images/P3.png";
import P4 from "@/images/p4.png";
import P5 from "@/images/p5.png";
import P6 from "@/images/p6.png";
import CompTIALogo from "@/images/comptia.png";
import PaymentLogo from "@/images/f4payment.png";
import CompTIADown from "@/images/comptia down.png";
import S1 from "@/images/s1.jpg";
import S2 from "@/images/s2.jpg";
import S3 from "@/images/s3.jpg";
import S4 from "@/images/s4.jpg";

const heroSlides = [
  {
    image: HBG1,
    title: "Quick and Accurate Computer Assistance",
    description:
      "At PC Packard, we offer professional computer support services to ensure your system operates seamlessly. Our certified CompTIA A+ technicians provide prompt and efficient solutions for all your computer-related issues, whether it's slow performance, software installation, or virus removal. Your devices will remain secure, optimized, and prepared to fulfill your personal or business requirements.",
  },
  {
    image: HBG2,
    title: "Easy Printer Configuration",
    description:
      "Enhance your printing experience with PC Packard expert printer configuration services. We provide comprehensive services, covering both wired and wireless configurations, cloud printing, and network configuration, to guarantee that your printer is installed and optimized for effortless operation. Obtain professional support for seamless printing, whether at home or in the office, ensuring your workflow remains uninterrupted.",
  },
  {
    image: HBG3,
    title: "Effortless WiFi Configuration for an Interconnected World",
    description:
      "In the current digital landscape, having a dependable WiFi network is crucial for both residential and commercial settings. PC Packard provides thorough WiFi configuration services designed to guarantee rapid, secure, and seamless internet connectivity across your area. Whether you require a home network designed for seamless streaming or a powerful system for a busy office, our specialists will customize solutions to meet your specific requirements, improving your online experience and ensuring effortless connectivity.",
  },
];

const deviceCategories = [
  {
    icon: CDA1,
    title: "Computer",
    description:
      "Receive expert assistance for computers and printers from anywhere. Our technicians ensure optimal performance through troubleshooting, configuration, and maintenance services",
    image: CDA1,
  },
  {
    icon: CDA2,
    title: "Printer & Scanner",
    description:
      "We resolve printer and scanner-related issues, ensuring your devices run smoothly and efficiently, keeping you connected and productive at all times.",
    image: CDA2,
  },
  {
    icon: Wifi,
    title: "WiFi & Network",
    description:
      "Ensure fast and secure WiFi connections at home or work. Our specialists optimize your network for peak performance and reliability.",
    image: CDA3,
  },
  {
    icon: Home,
    title: "Smart Home",
    description:
      "Enhance your smart home with our configuration and management services. We ensure your smart devices function seamlessly, providing convenience and efficiency.",
    image: CDA4,
  },
];

const assistCategories = [
  { image: A1, label: "Computer" },
  { image: A2, label: "Printer & Scanner" },
  { image: A3, label: "Wifi & Network" },
  { image: A4, label: "Email" },
  { image: A5, label: "Antivirus" },
  { image: A6, label: "Mobile & Tablets" },
  { image: A7, label: "Audio & Video (Alexa)" },
  { image: A8, label: "TV Mounting" },
  { image: A9, label: "Home Security" },
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
    source: "Google",
  },
  {
    name: "David Mukherjee",
    rating: 5,
    text: "Setting up HP printer was a walk in park thanks to PC Packard. My new printer setup and now I am able to print anywhere in my home. Truly professional.",
    time: "1 month ago",
    source: "Google",
  },
  {
    name: "Angela Sanchez",
    rating: 5,
    text: "Had connection issues with my router. PC Packard fixed everything and now I'm enjoying high-speed internet. Very knowledgeable and patient with explaining everything in simple terms.",
    time: "2 weeks ago",
    source: "Google",
  },
  {
    name: "Ryan Albert",
    rating: 5,
    text: "Amazing service! Had an issue with my PC and they diagnosed it quickly and fixed it remotely. The tech was extremely helpful and made sure everything was working perfectly.",
    time: "3 days ago",
    source: "Google",
  },
  {
    name: "Monica Sterling",
    rating: 5,
    text: "I was struggling with a virus infection on my laptop. The team at PC Packard handled it expertly. They cleaned my system and set up protection to prevent future issues.",
    time: "2 months ago",
    source: "Google",
  },
];

const partners = [
  "Right Signature",
  "authorize.net",
  "McAfee",
  "CompTIA",
  "RingCentral",
  "LogMe",
];

const stepsData = [
  {
    id: 1,
    title: "First Consultation",
    image: S1,
    points: [
      "Identify current challenges and goals",
      "Understand your business workflow",
      "Suggest potential solutions to improve efficiency",
    ],
    description:
      "To ensure that we customize our services to meet your unique demands, we start by conducting a thorough consultation to fully understand your needs. During this initial phase, we analyze your business operations, listen to your goals, and assess the existing technology infrastructure.",
    footer:
      "This collaborative process sets the foundation for an effective partnership.",
  },
  {
    id: 2,
    title: "Evaluation and Scheduling",
    image: S2,
    points: [
      "Identifying critical technological needs",
      "Creating a custom solution strategy",
      "Planning implementation with minimal downtime",
    ],
    description:
      "After the consultation, our team of experts carefully evaluates your situation, identifying any technological gaps or areas of improvement. Based on this evaluation, we present a detailed action plan.",
    footer: "This ensures a seamless transition from assessment to execution.",
  },
  {
    id: 3,
    title: "Execution",
    image: S3,
    points: [
      "Coordinating with your team for smooth operations",
      "Minimizing disruptions during implementation",
      "Adhering to quality control for optimal results",
    ],
    description:
      "Once the plan is approved, we move forward with the execution phase. Our team works diligently to deploy the solution, ensuring minimal operational disruption.",
    footer:
      "This step is essential to achieving long-lasting and reliable outcomes.",
  },
  {
    id: 4,
    title: "Continued Assistance",
    image: S4,
    points: [
      "Regular system monitoring and updates",
      "Prompt troubleshooting and issue resolution",
      "Tailored support to fit your evolving needs",
    ],
    description:
      "We don’t stop at execution; our relationship continues through ongoing support and maintenance to ensure your systems remain optimized for long-term success.",
    footer:
      "This commitment ensures that your business stays agile and ready for future challenges.",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />

      {/* Hero Carousel Section */}
      <section className="relative h-[400px] md:h-[400px] overflow-hidden">
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
            <div className="absolute inset-0 bg-black/70" />
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
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div> */}
      </section>

      {/* Device Assistance Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#005bb5] mb-4">
              Complete Device Assistance Personalized for You!
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              From laptops to smartphones, printers to smart home devices –
              we've got your back with reliable assistance for all your gadgets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {deviceCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 `}
              >
                <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-contain bg-white transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#005bb5] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
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
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1930] mb-4">
              How Can We Assist You Today?
            </h2>

            <h3 className="text-lg md:text-xl font-semibold text-[#005bb5] mb-4">
              Reliable Technology Support for Your Home and Business
            </h3>

            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe technology should simplify your life, not complicate
              it. From maintenance and configuration to installations and expert
              support, our specialists ensure your devices stay connected,
              secure, and running smoothly.
            </p>
          </div>

          {/* Top Row */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-0 mb-12">
            {assistCategories.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                {/* Glow Wrapper */}
                <div className="relative">
                  {/* Blue Glow */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-[#00c5ff]/70 scale-110"></div>

                  {/* Circle */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-white border-4 border-white shadow-md">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-all duration-300" />
                  </div>
                </div>

                <span className="text-sm font-medium text-gray-700 text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center gap-12">
            {assistCategories.slice(6).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-[#00c5ff]/70 scale-110"></div>

                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-white border-4 border-white shadow-md">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-all duration-300" />
                  </div>
                </div>

                <span className="text-sm font-medium text-gray-700 text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <button className="bg-[#00c5ff] hover:bg-[#00a0d4] text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* CompTIA Recognition Section */}
      <section className="py-8 md:py-12 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-2">
            {/* Left Side */}
            <div className="flex-1 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 px-14">
                <img
                  src={CompTIALogo}
                  alt="CompTIA A+ Certified"
                  className="h-20 md:h-24 object-contain"
                />
                <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
                  <img
                    src={CompTIADown}
                    alt="Organization Logos"
                    className="h-8 md:h-10 object-contain px-9"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Slim Video Frame */}
            <div className="flex-shrink-0 w-full lg:w-[420px] xl:w-[500px] px-7">
              <div
                className="
            relative
            overflow-hidden
            shadow-lg
            bg-gray-200
            h-[160px] md:h-[180px]
            rounded-tr-xl
            rounded-br-xl
            rounded-tl-[120px]
            rounded-bl-[120px]
          "
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://res.cloudinary.com/dqfpl11hb/video/upload/f_mp4/v1768766580/video-final23325434_zzr9ka.mkv" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1930] mb-4">
              Our Work Process
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to deliver reliable and scalable solutions.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {stepsData.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-4 md:px-6 py-3 rounded-lg font-medium transition-all shadow text-sm md:text-base ${
                  activeStep === step.id
                    ? "bg-[#0a1930] text-white"
                    : "bg-[#06b6d4] text-white hover:opacity-90"
                }`}
              >
                {step.id}. {step.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-stretch gap-8 max-w-6xl mx-auto">
            {/* Left Text (Slide Animation) */}
            <div
              key={activeStep}
              className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 animate-slideIn"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#005bb5] mb-4">
                {stepsData.find((s) => s.id === activeStep)?.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {stepsData.find((s) => s.id === activeStep)?.description}
              </p>

              <ul className="space-y-3 mb-6">
                {stepsData
                  .find((s) => s.id === activeStep)
                  ?.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
              </ul>

              <p className="text-gray-500 italic text-sm border-t pt-4">
                {stepsData.find((s) => s.id === activeStep)?.footer}
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
              <img
                key={activeStep}
                src={stepsData.find((s) => s.id === activeStep)?.image}
                alt={stepsData.find((s) => s.id === activeStep)?.title}
                className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* On-Site & Remote Support Section */}
      <section className="relative py-16 md:py-24 bg-[url('@/images/OnSITEBG.png')] bg-repeat-x bg-center bg-auto">
        {/* Light Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#005bb5]/10 to-[#00c5ff]/8"></div>

        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            On-Site & Remote Support for Your Printer, WiFi, and Smart Devices
          </h2>
          <p className="text-base md:text-lg text-black/80 max-w-3xl mx-auto mb-8">
            At PC Packard, we understand the crucial role that printers and
            smart devices play in your daily operations. Our expert team is here
            to provide comprehensive support, whether you need assistance
            on-site or prefer the convenience of remote troubleshooting.
          </p>

          <Button
            onClick={() => navigate("/setup")}
            className="
        bg-white
        text-[#005bb5]
        border-2 border-[#005bb5]
        font-semibold
        py-6 px-8
        text-base md:text-lg
        rounded-full
        shadow-lg
        transition-all duration-300
        hover:scale-105
        hover:text-white
        hover:bg-gradient-to-r
        hover:from-[#005bb5]/90
        hover:to-[#00c5ff]/70
      "
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
                    <h4 className="font-bold text-[#0a1930]">
                      {testimonial.name}
                    </h4>
                    {testimonial.time && (
                      <p className="text-sm text-gray-500">
                        {testimonial.time}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{testimonial.text}</p>
                <div className="mt-4 pt-4 border-t">
                  <a
                    href="#"
                    className="text-[#00c5ff] text-sm font-medium flex items-center gap-1"
                  >
                    View on {testimonial.source}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a1930]">
              Our Partners
            </h2>
          </div>

          {/* Marquee Wrapper */}
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
              {/* First set */}
              <img
                src={P1}
                alt="Partner 1"
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition"
              />
              <img
                src={P2}
                alt="Partner 2"
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition"
              />
              <img
                src={P3}
                alt="Partner 3"
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition"
              />
              <img
                src={P4}
                alt="Partner 4"
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition"
              />
              <img
                src={P5}
                alt="Partner 5"
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition"
              />
              <img
                src={P6}
                alt="Partner 6"
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition"
              />

              {/* Duplicate set for smooth loop */}
              <img
                src={P1}
                alt="Partner 1"
                className="h-12 md:h-16 object-contain opacity-70"
              />
              <img
                src={P2}
                alt="Partner 2"
                className="h-12 md:h-16 object-contain opacity-70"
              />
              <img
                src={P3}
                alt="Partner 3"
                className="h-12 md:h-16 object-contain opacity-70"
              />
              <img
                src={P4}
                alt="Partner 4"
                className="h-12 md:h-16 object-contain opacity-70"
              />
              <img
                src={P5}
                alt="Partner 5"
                className="h-12 md:h-16 object-contain opacity-70"
              />
              <img
                src={P6}
                alt="Partner 6"
                className="h-12 md:h-16 object-contain opacity-70"
              />
            </div>
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
