import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />

      <PageHeroBanner
        title="Terms and Conditions"
        breadcrumb="Terms and Conditions"
      />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                1. Introduction
              </h2>
              <p className="mb-4">
                Welcome to PC-Connect Hub. By accessing and using our website
                and services, you agree to comply with and be bound by these
                terms and conditions. Please read them carefully before using
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                2. Services Provided
              </h2>
              <p className="mb-4">
                PC-Connect Hub provides technical support services for printers
                and related devices. Our services include but are not limited
                to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Printer setup and installation assistance</li>
                <li>Troubleshooting and technical support</li>
                <li>Driver installation and updates</li>
                <li>Network printer configuration</li>
                <li>Remote technical assistance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                3. User Responsibilities
              </h2>
              <p className="mb-4">By using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Provide accurate and complete information when contacting
                  support
                </li>
                <li>Follow instructions provided by our technical team</li>
                <li>
                  Not misuse or attempt to gain unauthorized access to our
                  systems
                </li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                4. Intellectual Property
              </h2>
              <p className="mb-4">
                All content, trademarks, logos, and intellectual property on
                this website are owned by PC-Connect Hub or its licensors.
                Unauthorized use, reproduction, or distribution of any materials
                without prior written consent is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                5. Payment Terms
              </h2>
              <p className="mb-4">
                Payment for services is due at the time of service unless
                otherwise agreed upon. We accept major credit cards and other
                payment methods as displayed on our website. All fees are
                non-refundable unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                6. Limitation of Liability
              </h2>
              <p className="mb-4">
                PC-Connect Hub shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or
                related to your use of our services. Our total liability shall
                not exceed the amount paid by you for the services in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                7. Disclaimer of Warranties
              </h2>
              <p className="mb-4">
                Our services are provided "as is" without any warranties,
                express or implied. We do not guarantee that our services will
                be uninterrupted, error-free, or meet your specific
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                8. Third-Party Services
              </h2>
              <p className="mb-4">
                PC-Connect Hub is an independent technical support provider and
                is not affiliated with any printer manufacturers unless
                explicitly stated. We may recommend or use third-party software
                or services, for which separate terms may apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                9. Modifications to Terms
              </h2>
              <p className="mb-4">
                We reserve the right to modify these terms and conditions at any
                time without prior notice. Continued use of our services after
                any changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                10. Governing Law
              </h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which PC-Connect Hub
                operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                11. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms and Conditions,
                please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong className="text-[#0aa5d9]">Email:</strong>{" "}
                  support@PC-Connect Hub.com
                </li>
                <li>
                  <strong className="text-[#0aa5d9]">Phone:</strong>{" "}
                  +1(760)274-0601
                </li>
              </ul>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
