import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#005bb5] mb-8">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Welcome to SmartPrint. By accessing and using our website and services, you agree to comply with and be bound by these terms and conditions.
            </p>
            <p className="mb-6">
              All content, trademarks, and intellectual property on this website are owned by SmartPrint. Unauthorized use or reproduction is strictly prohibited.
            </p>
            <p className="mb-6">
              We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes made.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
