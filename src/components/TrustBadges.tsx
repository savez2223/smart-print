import oi1 from "../images/oi-1.png";
import oi2 from "../images/oi-1.png";
import oi3 from "../images/oi-3.png";
import oi4 from "../images/oi-4.png";

const badges = [
  {
    icon: oi1,
    title: "Assured Satisfaction",
    sub: "Enjoy our money-back guarantee and 30-day risk-free trial.",
  },
  {
    icon: oi2,
    title: "Premium Help",
    sub: "Get 24/7 client support to assist with any problems or queries.",
  },
  {
    icon: oi3,
    title: "Trusted Security",
    sub: "Our software is 100% safe, secure, and free from adware.",
  },
  {
    icon: oi4,
    title: "Secure Transactions",
    sub: "Quick and fast downloads with encrypted connections.",
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
              <div className="rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <img src={badge.icon} className="h-12 w-12" alt="" />
              </div>

              <div>
                <h3 className="font-semibold mb-1">{badge.title}</h3>
                <p className="text-xs opacity-80 mt-1">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
