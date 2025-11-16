import { Download, Zap, Shield, Clock, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Download,
    title: "Hassle-Free App Download",
    description: "A feature-loaded app that gives you the freedom to configure your printer settings on the fly. Try Today!",
  },
  {
    icon: Zap,
    title: "Easy Install With PC Packard setup",
    description: "Get best-in-class software and drivers, all designed to make the printer setup as quick as possible. Quick Setup.",
  },
  {
    icon: Shield,
    title: "Reliable Machine Setup",
    description: "Connect your device in a hassle-free environment with machine setup via our support engineers all hours.",
  },
  {
    icon: Clock,
    title: "Online and Offline support",
    description: "We offer client support through online and offline channels. Choose a channel to get the best-in-class services.",
  },
  {
    icon: Users,
    title: "Well Trained",
    description: "Get proper assistance by our well-trained and skilled support professionals. Free up yourself and get the quickest support possible!",
  },
  {
    icon: Award,
    title: "Remote Assistance Available 24/7",
    description: "Facing troubles? Leave all your worries to our support agents. Connect with us 24/7 to solve your doubts about installation.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Never <span className="text-accent">Uninstall</span> Your Print Obstacles
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Get the PC Packard smart setup app to download the features and install it in just a snap! It gives you the freedom 
            to configure printer settings on the go without going through the mess. To enjoy this service and utilize the features, 
            you can take it to the next level now!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
