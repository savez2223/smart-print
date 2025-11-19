import { useState } from "react";
import { Printer, Laptop, Smartphone, Monitor } from "lucide-react";

const Header = () => {
  const [active, setActive] = useState("printer");

  const items = [
    { id: "printer", icon: Printer },
    { id: "laptop", icon: Laptop },
    { id: "mobile", icon: Smartphone },
    { id: "monitor", icon: Monitor },
  ];

  return (
    <header
      className="w-full py-4 px-5 border-b text-primary-foreground"
      style={{
        background: "linear-gradient(90deg, #2d9cdb 0%, #1b7fb8 100%)",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4">
        {/* Steps Section: Always visible */}
        <div className="flex items-center gap-2 md:gap-3 text-[13px] md:text-[15px] flex-wrap justify-center lg:justify-start">
          <div className="flex items-center gap-1.5 text-white font-semibold">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-white text-blue-700 text-[11px]">
              1
            </span>
            <span className="hidden sm:inline">Identify</span>
          </div>
          <span className="text-white/70">›</span>
          <div className="flex items-center gap-1.5 text-white/90">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-white/30 text-white text-[11px]">
              2
            </span>
            <span className="hidden sm:inline">Download</span>
          </div>
          <span className="text-white/70">›</span>
          <div className="flex items-center gap-1.5 text-white/90">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-white/30 text-white text-[11px]">
              3
            </span>
            <span className="hidden sm:inline">Install</span>
          </div>
        </div>

        {/* Product Selector: hidden on mobile, shown on md+ */}
        <div className="hidden md:flex items-center gap-2 md:gap-3 flex-wrap justify-center">
          <span className="text-white text-xs md:text-sm font-medium whitespace-nowrap">
            Select a different product type:
          </span>
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === "printer"; // Printer always blue
            return (
              <button
                key={item.id}
                className={`h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full border transition-all cursor-default
                  ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                  }`}
              >
                <Icon className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
