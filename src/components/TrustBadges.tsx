import { Shield, Lock, Award, Headphones } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Award-Winning Service",
    description: "Recognized for excellence",
  },
  {
    icon: Lock,
    title: "Partnership With Leading Brands",
    description: "Authorized by top manufacturers",
  },
  {
    icon: Award,
    title: "Trusted Quality & Service",
    description: "100% satisfaction guaranteed",
  },
  {
    icon: Headphones,
    title: "Secure Transactions",
    description: "Safe and encrypted payments",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-6 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <badge.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{badge.title}</h3>
                <p className="text-sm opacity-90">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
