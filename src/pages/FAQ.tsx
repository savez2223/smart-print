import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "What services does SmartPrint provide?",
          a: "SmartPrint provides comprehensive printer support services including setup, installation, troubleshooting, driver updates, wireless configuration, and ongoing maintenance for all major printer brands.",
        },
        {
          q: "What printer brands do you support?",
          a: "We support all major printer brands including HP, Canon, Epson, Brother, Lexmark, Samsung, Dell, Xerox, and many more. Our technicians are trained to handle any printer model.",
        },
        {
          q: "Is SmartPrint affiliated with any printer manufacturer?",
          a: "SmartPrint is an independent third-party technical support provider. We are not affiliated with any printer manufacturer unless explicitly stated.",
        },
        {
          q: "How can I contact SmartPrint for support?",
          a: "You can reach us via our toll-free number available 24/7, through our website's live chat, or by sending an email to our support team.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "How does remote support work?",
          a: "Our technicians connect to your computer securely with your permission using industry-standard remote access software. They can then diagnose and fix issues directly while you watch.",
        },
        {
          q: "Can you help with wireless printer setup?",
          a: "Yes! We specialize in wireless printer setup including WiFi configuration, network troubleshooting, and setting up printing from multiple devices like computers, phones, and tablets.",
        },
        {
          q: "My printer shows offline even though it's connected. Can you help?",
          a: "Absolutely! Printer offline issues are common and can be caused by various factors. Our technicians will diagnose the root cause and resolve the issue quickly.",
        },
        {
          q: "Do you provide on-site support?",
          a: "Currently, we primarily offer remote support which allows us to resolve most issues quickly. For complex hardware issues, we may recommend local service centers.",
        },
      ],
    },
    {
      category: "Billing & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, debit cards, and PayPal. Payment is processed securely through encrypted payment gateways.",
        },
        {
          q: "Is there a fee for diagnosis?",
          a: "We offer free initial diagnosis to identify your printer issue. You only pay if you choose to proceed with our technical support services.",
        },
        {
          q: "Do you offer refunds?",
          a: "We strive for 100% customer satisfaction. If we're unable to resolve your issue, we offer a full refund. Please refer to our refund policy for details.",
        },
        {
          q: "Are there any hidden charges?",
          a: "No, we believe in transparent pricing. The quoted price is what you pay, with no hidden fees or surprise charges.",
        },
      ],
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          q: "Is my data safe during remote support?",
          a: "Yes, we use encrypted connections for all remote sessions. Our technicians only access what's necessary to resolve your issue, and you can end the session at any time.",
        },
        {
          q: "How do you protect my personal information?",
          a: "We follow strict data protection policies and never sell or share your personal information. All data is stored securely and accessed only by authorized personnel.",
        },
        {
          q: "Will you store my payment information?",
          a: "We do not store your complete payment information. Payment processing is handled by secure, PCI-compliant payment processors.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />
      
      <PageHeroBanner title="Frequently Asked Questions" breadcrumb="FAQ" />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Intro */}
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg">
              Find answers to commonly asked questions about our services, support, and policies.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-10">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold text-[#005bb5] mb-4">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${sectionIndex}-${index}`}
                      className="border border-gray-200 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-[#005bb5]">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#005bb5] mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <a 
              href="tel:+1-800-XXX-XXXX" 
              className="inline-flex items-center gap-2 bg-[#005bb5] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#004494] transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
