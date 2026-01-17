import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#005bb5] mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              At SmartPrint, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
            </p>
            <p className="mb-6">
              We collect information that you provide directly to us, such as your name, email address, and phone number when you contact us for support services.
            </p>
            <p className="mb-6">
              Your information is never sold to third parties. We use industry-standard security measures to protect your data from unauthorized access.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
