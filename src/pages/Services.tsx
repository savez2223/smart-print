import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import { Printer, Wifi, Settings, HardDrive, RefreshCw, ShieldCheck, Phone, Monitor } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Printer,
      title: "Printer Setup & Installation",
      desc: "Complete setup assistance for all printer brands including HP, Canon, Epson, Brother, and more.",
      features: ["Hardware setup", "Software installation", "Driver configuration", "Test printing"],
    },
    {
      icon: Wifi,
      title: "Wireless Printer Setup",
      desc: "Connect your printer to WiFi networks for seamless wireless printing from any device.",
      features: ["WiFi configuration", "Network troubleshooting", "Multi-device setup", "Security settings"],
    },
    {
      icon: Settings,
      title: "Troubleshooting & Repair",
      desc: "Expert diagnosis and resolution of all printer-related issues and errors.",
      features: ["Error resolution", "Print quality issues", "Paper jam fixes", "Connectivity problems"],
    },
    {
      icon: HardDrive,
      title: "Driver Installation",
      desc: "Install, update, and configure printer drivers for optimal performance.",
      features: ["Driver updates", "Compatibility fixes", "OS support", "Performance optimization"],
    },
    {
      icon: RefreshCw,
      title: "Maintenance & Support",
      desc: "Regular maintenance services to keep your printer running smoothly.",
      features: ["Preventive maintenance", "Cleaning services", "Performance checks", "Firmware updates"],
    },
    {
      icon: ShieldCheck,
      title: "Security Configuration",
      desc: "Secure your printer network and protect sensitive documents from unauthorized access.",
      features: ["Access controls", "Encryption setup", "Audit logging", "Compliance support"],
    },
    {
      icon: Phone,
      title: "Remote Support",
      desc: "Get instant help from our technicians through secure remote access support.",
      features: ["Screen sharing", "Remote diagnostics", "Real-time fixes", "Guided assistance"],
    },
    {
      icon: Monitor,
      title: "Multi-Platform Support",
      desc: "Setup and support for Windows, Mac, iOS, Android, and Chrome OS devices.",
      features: ["Cross-platform setup", "Cloud printing", "Mobile printing", "Network sharing"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />
      
      <PageHeroBanner title="Our Services" breadcrumb="Services" />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Intro */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#005bb5] mb-4">
              Comprehensive Printer Support Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From setup to troubleshooting, we provide end-to-end printer support services to ensure your printing needs are always met with excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#06b6d4] transition-all group">
                <service.icon className="w-12 h-12 text-[#06b6d4] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#005bb5] to-[#06b6d4] rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Help With Your Printer?</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Our expert technicians are available 24/7 to assist you with any printer-related issues. Get in touch now for immediate support.
            </p>
            <a 
              href="tel:+1-800-XXX-XXXX" 
              className="inline-flex items-center gap-2 bg-white text-[#005bb5] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now: +1-800-XXX-XXXX
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
