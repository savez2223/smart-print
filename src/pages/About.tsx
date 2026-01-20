import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  CheckCircle,
  Users,
  Award,
  Shield,
  HeadphonesIcon,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />

      <PageHeroBanner title="About Us" breadcrumb="About Us" />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Mission Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0aa5d9] mb-6">
                  Who We Are
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  SmartPrint is a leading provider of professional printer
                  support and technical assistance services. With years of
                  experience in the industry, we have helped thousands of
                  customers resolve their printer-related issues quickly and
                  efficiently.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our team of certified technicians is dedicated to providing
                  exceptional customer service and technical expertise to ensure
                  your printing experience is seamless and hassle-free.
                </p>
                <ul className="space-y-3">
                  {[
                    "24/7 Expert Support",
                    "Certified Technicians",
                    "Quick Resolution",
                    "Affordable Pricing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-[#06b6d4] w-5 h-5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#005bb5] to-[#06b6d4] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="leading-relaxed opacity-90">
                  To provide reliable, efficient, and affordable printer support
                  services that empower individuals and businesses to focus on
                  what matters most – their work and productivity.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10K+", label: "Happy Customers" },
                { number: "15+", label: "Years Experience" },
                { number: "24/7", label: "Support Available" },
                { number: "98%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-[#0aa5d9] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#0aa5d9] mb-8 text-center">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  desc: "Our certified professionals have extensive experience with all major printer brands.",
                },
                {
                  icon: Award,
                  title: "Proven Track Record",
                  desc: "Thousands of satisfied customers trust us for their printer support needs.",
                },
                {
                  icon: Shield,
                  title: "Secure Service",
                  desc: "Your data and privacy are protected with industry-standard security measures.",
                },
                {
                  icon: HeadphonesIcon,
                  title: "24/7 Support",
                  desc: "Round-the-clock assistance ensures help is always available when you need it.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <item.icon className="w-12 h-12 text-[#06b6d4] mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-3xl font-bold text-[#0aa5d9] mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Integrity",
                  desc: "We maintain the highest standards of honesty and transparency in all our dealings.",
                },
                {
                  title: "Excellence",
                  desc: "We strive for excellence in every service we provide, exceeding customer expectations.",
                },
                {
                  title: "Innovation",
                  desc: "We continuously adapt and innovate to provide cutting-edge solutions for our customers.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-[#0aa5d9] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
