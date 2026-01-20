import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />

      <PageHeroBanner title="Privacy Policy" breadcrumb="Privacy Policy" />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                1. Introduction
              </h2>
              <p className="mb-4">
                At SmartPrint, we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect the following types of information:
              </p>
              <h3 className="text-xl font-semibold text-[#0aa5d9] mb-2">
                Personal Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  Name and contact information (email, phone number, address)
                </li>
                <li>Payment and billing information</li>
                <li>Device and printer information for technical support</li>
                <li>Communication records with our support team</li>
              </ul>
              <h3 className="text-xl font-semibold text-[#0aa5d9] mb-2">
                Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Device identifiers and operating system</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and improving our technical support services</li>
                <li>Processing transactions and sending related information</li>
                <li>
                  Communicating with you about services, updates, and promotions
                </li>
                <li>Responding to your inquiries and support requests</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Ensuring the security of our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                4. Information Sharing
              </h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who
                  assist in our operations
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you have given
                  explicit permission
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                5. Data Security
              </h2>
              <p className="mb-4">
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure storage systems with access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                6. Cookies and Tracking
              </h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your browsing
                experience, analyze website traffic, and personalize content.
                You can manage your cookie preferences through your browser
                settings. Note that disabling cookies may affect the
                functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                7. Your Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of your personal data
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing
                  communications
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to
                  another service
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                8. Children's Privacy
              </h2>
              <p className="mb-4">
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                children. If you believe we have inadvertently collected such
                information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                9. Third-Party Links
              </h2>
              <p className="mb-4">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                external sites. We encourage you to review the privacy policies
                of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                10. Changes to This Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. We will notify
                you of any material changes by posting the updated policy on our
                website with a new effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0aa5d9] mb-4">
                11. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong className="text-[#0aa5d9]">Email:</strong>{" "}
                  privacy@smartprint.com
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

export default PrivacyPolicy;
