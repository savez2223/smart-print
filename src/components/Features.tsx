import {
  Cloud,
  Clock,
  FileText,
  Home,
  Shield,
  Layers,
  Repeat,
  Settings,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import mainImage from "../images/virus-pc.webp";

// Assign appropriate Lucide or custom icons
const features = [
  {
    icon: Cloud,
    title: "Remote Business App Printing",
    description:
      "Deploy Smart-Print alongside your business applications in the cloud to enable printing across local and remote printers, all within your trusted network.",
  },
  {
    icon: Clock,
    title: "Fast Setup for New Office Locations",
    description:
      "Utilize our remote printing ability to set up a print network within an hour, decreasing the time and resources required to allow printing at new locations, without the requirement for VPNs.",
  },
  {
    icon: FileText,
    title: "Printing to Third-Party Locations",
    description:
      "Print documents such as shipping labels or buy orders across disparate networks, even to third-party locations, without a straightforward network connection.",
  },
  {
    icon: Home,
    title: "Trackable and Secure Home Office Printing",
    description:
      "Evaluate your system’s performance by modernizing drivers with our improved optimization tools, providing a smoother and quicker procedure.",
  },
  {
    icon: Shield,
    title: "Comprehensive Security",
    description:
      "Our solution guarantees that all print jobs are protected, whether you submit them from a desktop, remotely, or a mobile device. We rescue your data with encryption while in ongoing submission, rendering, and at rest.",
  },
  {
    icon: Layers,
    title: "Scalable and Flexible",
    description:
      "Smart-Print Smart Printer Setup evolves with your enterprise. It’s modular, authorizing you to add or subtract elements as your needs develop, and Guides both cloud deployments and on-premise.",
  },
  {
    icon: Repeat,
    title: "Constant Print Experience",
    description:
      "Enjoy a constant print experience whether you’re working or office remotely. Our software guarantees that all networks, devices, and printers work smoothly together.",
  },
  {
    icon: Settings,
    title: "Efficient Workflow Management",
    description:
      "Streamline your print workflows with tools that handle and track all print jobs, minimize downtime, and guarantee high availability.",
  },
];

const Features = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            New!{" "}
            <span className="text-blue-600">Unravel Your Print Obstacles</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            New! Smart-Print Smart Printer Setup is prepared to address the
            common obstacles that businesses face in their everyday printing
            work. If you want to connect remote offices, manage secure home
            printing, or allow printing across diverse networks, our software
            delivers the solutions that you want.
          </p>
        </div>
        {/* Main feature image */}
        <div className="mb-10 flex justify-center">
          <img
            src={mainImage}
            alt="Printer Setup Showcase"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="transition-all duration-300 rounded-lg shadow-sm hover:scale-105 hover:shadow-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent"
            >
              <CardContent className="flex flex-col items-center p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
