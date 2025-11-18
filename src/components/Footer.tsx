const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #005bb5 0%, #00c5ff 100%)",
      }}
      className="text-primary-foreground py-12"
    >
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Get to know us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Live Chat
                </a>
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
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Email: support@pcpackard.com</li>
              {/* <li>Phone: 1-760-274-0909</li> */}
              <li>Hours: 24/7 Support</li>
              <li>Location: United States</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>
            &copy; 2025 Smart-Print. All rights reserved. | Privacy Policy |
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
