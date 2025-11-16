import { Button } from "@/components/ui/button";
import printAnywhere from "../images/printany.png"; // Update path as needed

const PrintAnywhere = () => {
  return (
    <section className="py-10 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          {/* Left: Image */}
          <div className="flex flex-col items-center justify-center">
            <img
              src={printAnywhere}
              alt="Print Anywhere"
              className="w-80 h-auto rounded-lg"
              // Reduce width slightly to help balance the grid
            />
          </div>
          {/* Right: Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-sky-500">
              Print Anywhere and Anytime
            </h2>
            <h3 className="text-2xl font-semibold text-primary">
              Maximize Your Printer with Updated Drivers
            </h3>
            <div className="space-y-4 text-base text-foreground font-medium">
              <p>
                Smart Printer Setup is your all-in-one solution for fast, smooth
                printing from any desktop, laptop, or mobile device to any
                printer, no significance the network in between. It is created
                to cater to homes and organizations of all sizes. Our software
                delivers centralized management and is ideal for both simple and
                complex workflows. Via Smart Printer Setup, you acquire the
                flexibility to operate your printing services on-premise or in
                the cloud, guaranteeing your printing demands are met now and in
                the future.
              </p>
              <p className="text-xs text-muted-foreground">
                Smart-Print is a self-dependent solution provider for software
                products. By downloading Smart Printer Support, you agree to our{" "}
                <a
                  href="https://pcpackard.com/privacy-policy"
                  className="underline"
                >
                  Privacy Policy
                </a>
                ,{" "}
                <a
                  href="https://pcpackard.com/terms-condition"
                  className="underline"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="https://pcpackard.com/eula" className="underline">
                  EULA
                </a>
                . Complete access to management features and printer
                troubleshooting requires an $11.99 monthly subscription, with
                more premium assistance available via upgrades. All names and
                trademarks cited are for reference purposes only, and no
                affiliation is indicated with any third-party companies. Smart
                Printer Help DOES NOT sell or supply third-party technical
                support.
              </p>
            </div>
            <Button
              size="lg"
              className="
    bg-primary
    text-primary-foreground
    shadow-lg
    transition-all
    duration-150
    ease-in-out
    hover:shadow-[0_8px_32px_0_rgba(0,164,255,0.30),0_0_0_8px_rgba(0,164,255,0.1)]
    hover:-translate-y-1
    hover:bg-primary/95
    relative
    "
              style={{
                boxShadow: "0 4px 24px 0 rgba(0,164,255,0.18)",
              }}
            >
              Contact for Download
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintAnywhere;
