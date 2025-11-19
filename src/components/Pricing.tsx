import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Shield, DollarSign, X, Headphones, Lock } from "lucide-react"; // Example icons

const plans = [
  {
    name: "Smart Printer Setup",
    duration: "1-Year Subscription",
    device: "1 Device",
    price: "$12.99",
    total: "$155.88",
    popular: false,
  },
  {
    name: "Smart Printer Setup",
    duration: "2-Year Subscription",
    device: "2 Devices",
    price: "$12.99",
    total: "$623.52",
    popular: true,
  },
  {
    name: "Smart Printer Setup",
    duration: "5-Year Subscription",
    device: "5 Devices",
    price: "$12.99",
    total: "$2338.2",
    popular: false,
  },
];

const features = [
  {
    icon: <Shield className="text-primary" size={20} />,
    label: "Immediate Activation",
  },
  {
    icon: <DollarSign className="text-primary" size={20} />,
    label: "30-day money-back guarantee",
  },
  {
    icon: <X className="text-primary" size={20} />,
    label: "Effortless subscription cancellation",
  },
  {
    icon: <Headphones className="text-primary" size={20} />,
    label: "24*7 Technical and Sales Help",
  },
  {
    icon: <Lock className="text-primary" size={20} />,
    label: "Protected payment encryption",
  },
];

const Pricing = () => {
  return (
    <section className="py-6 md:py-8 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Smart Printer <span className="text-accent">Setup Plans</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                plan.popular ? "border-primary border-2" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center space-y-2 pb-8 pt-8">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.duration}</p>
                <p className="text-sm text-muted-foreground">{plan.device}</p>
                <div>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className="text-lg font-semibold mt-2">
                  Total: <span className="text-primary">{plan.total}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-lg shadow"
                  size="lg"
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Features/Benefits Section */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 md:mt-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white py-2 md:py-3 px-3 md:px-5 rounded-lg shadow-md min-w-[180px] md:min-w-[220px]"
            >
              {feature.icon}
              <span className="font-medium text-gray-700 text-xs md:text-sm">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
