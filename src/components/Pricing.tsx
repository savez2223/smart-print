import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Smart Printer Setup",
    price: "$29.99",
    features: [
      "One Printer Setup",
      "Wireless Setup",
      "Driver Installation",
      "24/7 Email Support",
    ],
  },
  {
    name: "Smart Printer Setup",
    price: "$49.99",
    features: [
      "Two Printer Setup",
      "Wireless Setup",
      "Driver Installation",
      "24/7 Phone Support",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Smart Printer Setup",
    price: "$79.99",
    features: [
      "Three Printer Setup",
      "Wireless Setup",
      "Driver Installation",
      "24/7 Premium Support",
      "Remote Assistance",
      "Lifetime Updates",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Smart Printer <span className="text-accent">Setup Plans</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-card-hover transition-all duration-300 ${
                plan.popular ? "border-primary border-2" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center space-y-4 pb-8 pt-8">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/setup</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
