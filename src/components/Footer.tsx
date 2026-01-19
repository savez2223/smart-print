import FooterBG from "@/images/footer-bg.png";
import Logo from "@/images/pc-logo-2.png"; // 👈 apna logo yaha import karo

// badges
import Sectigo from "@/images/f1.png";
import SafeBrowsing from "@/images/f2.png";
import PaymentBadge from "@/images/f4payment.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${FooterBG})`,
      }}
      className="bg-cover bg-center bg-no-repeat text-white py-12"
    >
      <div className="container">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo + Text */}
          <div>
            <img src={Logo} alt="PC Packard Logo" className="h-14 mb-4" />
            <p className="text-sm opacity-90 leading-relaxed">
              Any Questions? We're here to help! Available between 9 AM – 8 PM
              CT, 7 days a week.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get to know us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:opacity-100">Careers</a>
              </li>
              <li>
                <a className="hover:opacity-100">Press Releases</a>
              </li>
              <li>
                <a className="hover:opacity-100">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Guide Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a className="hover:opacity-100">Help Center</a>
              </li>
              <li>
                <a className="hover:opacity-100">Live Chat</a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Troubleshooting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Email: info@pcpackard.com</li>
              <li>Hours: 9 AM – 8 PM CT</li>
              <li>Location: United States</li>
            </ul>
          </div>
        </div>

        {/* 3 Badges */}
        <div className="flex justify-center items-center gap-8 mb-8">
          {/* Sectigo */}
          <a
            href="https://decoder.link/sslchecker/pcpackard.com/443"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Sectigo}
              alt="Sectigo Secure"
              className="h-10 object-contain opacity-80 hover:opacity-100 transition"
            />
          </a>

          {/* Safe Browsing */}
          <a
            href="https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fpcpackard.com%2F&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={SafeBrowsing}
              alt="Google Safe Browsing"
              className="h-10 object-contain opacity-80 hover:opacity-100 transition"
            />
          </a>

          {/* Payment (non-clickable) */}
          <img
            src={PaymentBadge}
            alt="Payment Methods"
            className="h-10 object-contain"
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 text-center text-sm opacity-90">
          <p>
            © 2025 PC Packard. All rights reserved. | Privacy Policy | Terms &
            Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
