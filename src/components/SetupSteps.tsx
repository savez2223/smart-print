import { Card } from "@/components/ui/card";
import first from "../images/printersetup.svg";
import Second from "../images/printeroffline.svg";
import Third from "../images/wirelessprinterissues.svg";
import Fourth from "../images/paperjamissues.svg";
import fifth from "../images/printjobstuck.svg";
import Sixth from "../images/scannerissues.svg";

const steps = [
  {
    icon: first,
    title: "Printer Set Up Issue",
  },
  {
    icon: Second,
    title: "Printer Offline",
  },
  {
    icon: Third,
    title: "Wireless Printer Issue",
  },
  {
    icon: Fourth,
    title: "Paper Jam Issue",
  },
  {
    icon: fifth,
    title: "Printer Job Stuck In Queue",
  },
  {
    icon: Sixth,
    title: "Scanner Issues",
  },
];

const SetupSteps = () => {
  return (
    <section className="py-10 bg-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group p-6 flex flex-col items-center text-center space-y-5 
                bg-gradient-to-b from-blue-50 to-white 
                rounded-xl border border-blue-100
                hover:shadow-2xl hover:scale-105 
                transition-all duration-300 cursor-pointer"
            >
              {/* Bigger SVG */}
              <img
                src={step.icon}
                alt={step.title}
                className="h-14 w-14 transition-all duration-300 group-hover:opacity-80 animate-bounce-slow"
              />

              {/* Blue Text + Light Blue Hover */}
              <p className="text-lg font-semibold text-blue-600 group-hover:text-blue-400 transition-all duration-300">
                {step.title}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-3px); }
          50% { transform: translateY(3px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SetupSteps;
