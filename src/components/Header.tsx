// Fully recreated UI (no old header) with steps + product type icons
// Hover: light blue, Active: printer icon stays blue
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
      {/* Top row: Steps + Product Selector in one line */}
      <div className="flex items-center justify-between w-full">
        {/* Steps */}
        <div className="flex items-center gap-3 text-[15px]">
          <div className="flex items-center gap-1.5 text-white font-semibold">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-white text-blue-700 text-[11px]">
              1
            </span>
            Identify
          </div>
          <span className="text-white/70">›</span>

          <div className="flex items-center gap-1.5 text-white/90">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-white/30 text-white text-[11px]">
              2
            </span>
            Download
          </div>
          <span className="text-white/70">›</span>

          <div className="flex items-center gap-1.5 text-white/90">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-white/30 text-white text-[11px]">
              3
            </span>
            Install
          </div>
        </div>

        {/* Product Selector Right Side */}
        <div className="flex items-center gap-3">
          <span className="text-white text-sm font-medium whitespace-nowrap">
            Select a different product type:
          </span>

          {items.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === "printer"; // Printer always blue

            return (
              <button
                key={item.id}
                className={`h-12 w-12 flex items-center justify-center rounded-full border transition-all cursor-default
                  ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                  }`}
              >
                <Icon className="h-5 w-5" />
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
