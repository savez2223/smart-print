import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />

      <PageHeroBanner title="Disclaimer" breadcrumb="Disclaimer" />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                General Disclaimer
              </h2>
              <p className="mb-4">
                The information provided on this website is for general
                informational purposes only. While we strive to keep the
                information up to date and accurate, we make no representations
                or warranties of any kind, express or implied, about the
                completeness, accuracy, reliability, suitability, or
                availability with respect to the website or the information,
                products, services, or related graphics contained on the website
                for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                Third-Party Independence
              </h2>
              <p className="mb-4">
                PC-Connect Hub is an independent third-party technical support
                service provider. We are not affiliated with, endorsed by, or
                sponsored by any printer manufacturer, including but not limited
                to HP, Canon, Epson, Brother, Lexmark, Dell, Samsung, or Xerox,
                unless explicitly stated otherwise.
              </p>
              <p className="mb-4">
                All trademarks, brand names, and logos mentioned on this website
                are the property of their respective owners. The use of any
                trademark, brand name, or logo is for identification purposes
                only and does not imply endorsement or affiliation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                Service Limitations
              </h2>
              <p className="mb-4">
                Our technical support services are provided on an "as is" and
                "as available" basis. We do not guarantee that our services
                will:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Meet all your specific requirements</li>
                <li>Be uninterrupted, timely, secure, or error-free</li>
                <li>
                  Resolve all technical issues with your printer or device
                </li>
                <li>Provide results that are always accurate or reliable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                No Professional Advice
              </h2>
              <p className="mb-4">
                The content on this website does not constitute professional
                technical advice. Any reliance you place on such information is
                strictly at your own risk. We recommend consulting with
                qualified professionals for specific technical issues or
                concerns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                External Links
              </h2>
              <p className="mb-4">
                This website may contain links to external websites that are not
                provided or maintained by, or in any way affiliated with,
                PC-Connect Hub. Please note that we do not guarantee the
                accuracy, relevance, timeliness, or completeness of any
                information on these external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                Limitation of Liability
              </h2>
              <p className="mb-4">
                In no event shall PC-Connect Hub, its directors, employees,
                partners, agents, suppliers, or affiliates be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  Your access to or use of (or inability to access or use) our
                  services
                </li>
                <li>
                  Any conduct or content of any third party on our services
                </li>
                <li>Any content obtained from our services</li>
                <li>
                  Unauthorized access, use, or alteration of your transmissions
                  or content
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                Accuracy of Information
              </h2>
              <p className="mb-4">
                While we endeavor to keep the information on this website
                accurate and up to date, we cannot guarantee that all
                information is current, complete, or free from errors. Technical
                specifications, pricing, and availability of services are
                subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                User Responsibility
              </h2>
              <p className="mb-4">
                Users are responsible for ensuring that their use of our
                services complies with all applicable laws and regulations.
                Users should back up their data before seeking technical support
                and should not share sensitive personal information unless
                necessary for service delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                Changes to This Disclaimer
              </h2>
              <p className="mb-4">
                We reserve the right to modify or update this disclaimer at any
                time without prior notice. We encourage users to review this
                page periodically for any changes. Your continued use of the
                website after any modifications constitutes acceptance of the
                updated disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions or concerns about this disclaimer,
                please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>Email:</strong> contact@pcconnecthub.com
                </li>
                <li>
                  <strong>Phone:</strong> +1(760)-274-0601
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

export default Disclaimer;
