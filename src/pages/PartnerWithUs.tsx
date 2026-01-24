import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  Handshake,
  TrendingUp,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const PartnerWithUs = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      desc: "Earn competitive commissions and grow your revenue stream with our partnership program.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      desc: "Get access to dedicated account managers and priority technical support for your clients.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Expand your service offerings with our worldwide network and infrastructure.",
    },
    {
      icon: Handshake,
      title: "Strong Partnership",
      desc: "Build a lasting business relationship with mutual growth and shared success.",
    },
  ];

  const partnerTypes = [
    {
      title: "Reseller Partner",
      desc: "Resell our services under your brand and earn attractive margins.",
      features: [
        "White-label solutions",
        "Volume discounts",
        "Sales training",
        "Marketing support",
      ],
    },
    {
      title: "Referral Partner",
      desc: "Refer customers to us and earn commissions on every successful conversion.",
      features: [
        "Simple referral process",
        "Competitive commissions",
        "Real-time tracking",
        "Monthly payouts",
      ],
    },
    {
      title: "Technology Partner",
      desc: "Integrate our services with your technology platform or software.",
      features: [
        "API access",
        "Technical documentation",
        "Integration support",
        "Co-marketing opportunities",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />

      <PageHeroBanner title="Partner With Us" breadcrumb="Partner With Us" />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Intro */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0aa5d9] mb-4">
              Grow Together With Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Join our partner ecosystem and unlock new revenue opportunities
              while providing exceptional printer support services to your
              customers.
            </p>
          </div>

          {/* Benefits */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all"
                >
                  <benefit.icon className="w-14 h-14 text-[#06b6d4] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Partner Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#0aa5d9] mb-8 text-center">
              Partnership Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 hover:border-[#06b6d4] hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold text-[#0aa5d9] mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{type.desc}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-[#06b6d4]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#0aa5d9] mb-8 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Apply",
                  desc: "Submit your partnership application",
                },
                {
                  step: "02",
                  title: "Review",
                  desc: "Our team reviews your application",
                },
                {
                  step: "03",
                  title: "Onboard",
                  desc: "Get onboarded with training & resources",
                },
                {
                  step: "04",
                  title: "Grow",
                  desc: "Start earning and growing together",
                },
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-[#0aa5d9] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-3 w-6 h-6 text-[#06b6d4]" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0aa5d9] to-[#06b6d4] rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Partner?
            </h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Contact us today to learn more about our partnership programs and
              how we can grow together.
            </p>
            <a
              href="mailto:partners@PC-Connect Hub.com"
              className="inline-flex items-center gap-2 bg-white text-[#0aa5d9] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Partnership Team
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerWithUs;
