import { Button } from "@/components/ui/button";
import supportAgent from "../images/support27.png";

const Support = () => {
  return (
    <section className="py-6 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-accent">24/7</span> Professional Help
          </h2>
          <p className="text-xl font-semibold mb-2">Support When You Need It</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <img
              src={supportAgent}
              alt="Customer Support"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Our dedicated support team is available 24/7 to help you with any
              printer setup issues. Whether you're setting up your first printer
              or adding another device to your network, we're here to assist you
              every step of the way.
            </p>
            <p className="text-muted-foreground">
              We provide multiple support channels including phone, email, and
              live chat to ensure you get the help you need, when you need it.
              Our experienced technicians can guide you through any technical
              challenges and ensure your printer is working perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Chat with Expert
              </Button>
              <Button size="lg" variant="outline">
                Call Now: 1-760-274-0909
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
