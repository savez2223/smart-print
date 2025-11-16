import { Printer, Monitor, Wifi, FileText, Settings, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Printer,
    title: "Unbox the Printer",
    description: "Setup",
  },
  {
    icon: Monitor,
    title: "Plug in the printer",
    description: "Setup",
  },
  {
    icon: Wifi,
    title: "Click on the Wireless button",
    description: "Setup",
  },
  {
    icon: FileText,
    title: "Install the Drivers",
    description: "Setup",
  },
  {
    icon: Settings,
    title: "Complete the Setup Process",
    description: "To Finish",
  },
  {
    icon: Smartphone,
    title: "Connect other devices",
    description: "Setup",
  },
];

const SetupSteps = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center space-y-3 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupSteps;
