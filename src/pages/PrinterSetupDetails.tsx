import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Footer from "@/components/Footer";
import printerWireless from "../assets/printer-wireless.png";
import usbConnection from "../assets/usb-connection.png";
import GuideAgent from "../images/cont-down1.jpg";
import GuideAgent2 from "../images/cont-down2.jpg";
import setupDownload from "../images/psoft-1.jpg";
import setupConnect from "../images/psoft-2.jpg";
import setupInstall from "../images/psoft-3.jpg";
import setupTest from "../images/psoft-4.jpg";
import Disc from "@/components/Disc";

// declare global {
//   interface Window {
//     JivoApi?: {
//       open: () => void;
//     };
//   }
// }

const PrinterSetupDetails = () => {
  const location = useLocation();
  const printerModel = location.state?.printerModel || "DeskJet 2331";

  const setupSteps = [
    {
      title: "Download the Latest Software",
      description:
        "Download the most up-to-date drivers and printer software compatible with your system.",
      image: setupDownload,
    },
    {
      title: "Connect Your Printer",
      description:
        "Link your printer to a USB cable or Wi-Fi via the printer's wireless setup options.",
      image: setupConnect,
    },
    {
      title: "Install the Printer Drivers",
      description:
        "Follow the on-screen prompts to complete the setup process.",
      image: setupInstall,
    },
    {
      title: "Test the Printer",
      description:
        "Once installation is complete, print a test page to confirm your printer is working.",
      image: setupTest,
    },
  ];

  const troubleshootingSteps = [
    {
      step: 1,
      title: "Reconnect the USB Cable Properly",
      description:
        "Ensure a secure physical connection between your printer and computer.",
      points: [
        "Unplug the USB cable from both the printer and the computer.",
        "Wait a few seconds before reconnecting.",
        "Firmly plug the cable into both ends.",
        "Restart the printer installation process.",
      ],
      showImage: true,
    },
    {
      step: 2,
      title: "Test the USB Port Functionality",
      description: "Make sure the USB port you're using is working correctly.",
      points: [
        "Try connecting the printer to a different USB port.",
        "Alternatively, test the current port by connecting another USB device.",
      ],
      showImage: true,
    },
    {
      step: 3,
      title: "Use a Different USB Cable",
      description: "A faulty cable might be the problem.",
      points: [
        "Swap the existing cable with a known working or new USB cable.",
        "Reconnect the printer and computer, then restart the setup.",
      ],
      showImage: false,
    },
    {
      step: 4,
      title: "Disconnect Unnecessary USB Devices",
      description: "Too many connected devices can cause conflicts.",
      points: [
        "Unplug all non-essential USB devices (e.g., external drives, cameras).",
        "Keep only the mouse, keyboard, and printer connected.",
        "Retry the installation.",
      ],
      showImage: false,
    },
    {
      step: 5,
      title: "Perform a Printer Power Reset",
      description: "A quick reset can restore USB communication.",
      points: [
        "Turn off the printer and unplug it from the wall.",
        "Wait at least 60 seconds.",
        "Plug it back into a direct wall outlet and power it on.",
        "If the setup resumes automatically, proceed with installation. Otherwise, run the installer manually.",
      ],
      showImage: false,
    },
    {
      step: 6,
      title: "Update Drivers via Device Manager",
      description: "Ensure the correct drivers are in place.",
      points: [
        "Open Device Manager from the Start menu.",
        "Expand 'Printers' or 'USB Controllers'.",
        "Locate your printer, right-click it, and choose Update driver → Search automatically for drivers.",
      ],
      showImage: false,
    },
    {
      step: 7,
      title: "Uninstall Previous Printer Software",
      description: "Old or conflicting installations may block setup.",
      points: [
        "Go to Control Panel > Programs > Uninstall a Program.",
        "Find and uninstall your printer software.",
        "Reboot your computer before reinstalling.",
      ],
      showImage: false,
    },
    {
      step: 8,
      title: "Clear Temporary Files",
      description:
        "Clean out junk files that might interfere with installation.",
      points: [
        "Search for and open Disk Cleanup.",
        "Choose your system drive (usually C:).",
        "Select appropriate file categories and click OK to remove them.",
      ],
      showImage: false,
    },
    {
      step: 9,
      title: "Perform a Clean Boot to Disable Interference",
      description: "Eliminate background software conflicts.",
      points: [
        "Open System Configuration (search 'msconfig').",
        "Under the 'General' tab, select Selective Startup and uncheck Load startup items.",
        "Go to the 'Services' tab, check Hide all Microsoft services, and then disable the remaining services.",
        "Restart your computer and run the printer setup again.",
      ],
      showImage: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                  Fix Your{" "}
                  <span style={{ color: "#005bb5" }}>{printerModel}</span>{" "}
                  Printer Software
                </h1>
                <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8">
                  Use our detailed instructions to install and setup your{" "}
                  <span style={{ color: "#000f8f", fontWeight: "bold" }}>
                    {printerModel}
                  </span>{" "}
                  printer with ease. We offer the appropriate answers whether
                  you're troubleshooting or setting up for the first time.
                </p>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {[
                    "Easy & Fast Installation",
                    "Both Windows and macOS compatible",
                    "Current Software & Driver Updates",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 md:gap-3"
                    >
                      <div className="bg-primary rounded p-1 flex-shrink-0">
                        <Check className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      </div>
                      <span className="text-sm md:text-base text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
               <Button
  // Yahan apna Tawk.to ka direct link daal dena
  onClick={() => window.open("https://tawk.to/chat/YOUR_CHAT_ID/default", "_blank")}
  className="bg-primary text-white hover:bg-primary/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg ml-0 md:ml-16 w-full sm:w-auto"
>
  Chat With Us
</Button>
              </div>
              <div>
                <img
                  src={printerWireless}
                  alt="Printer with wireless connection"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Setup Guide */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-3 md:mb-4">
              Step-by-Step Printer Setup Guide
            </h2>
            <p className="text-sm md:text-base text-center text-foreground/70 mb-8 md:mb-12">
              Follow these simple steps to get your printer up and running
              smoothly with the latest drivers and software.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {setupSteps.map((step, index) => (
                <Card
                  key={index}
                  className="p-4 md:p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 shadow-md border-border/50"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-32 md:h-40 object-cover rounded-lg mb-3 md:mb-4"
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-foreground/70">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting Steps */}
        <section className="py-10 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            {troubleshootingSteps.map((item) => (
              <div key={item.step} className="mb-8 md:mb-12">
                <div className="bg-white rounded-lg p-5 md:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-border/30">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">
                    Step {item.step}: {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/80 mb-3 md:mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="text-xs md:text-sm text-foreground/70">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {item.showImage && (
                    <img
                      src={usbConnection}
                      alt="USB connection diagram"
                      className="w-full max-w-md mx-auto rounded-lg"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-3 md:mb-4">
              Solutions for Printer Software Guide
            </h2>
            <p className="text-sm md:text-base text-center text-foreground/70 mb-8 md:mb-12">
              Are you experiencing issues with your printer software? We provide
              knowledgeable assistance with updates, troubleshooting, and
              installation.
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <Card className="p-5 md:p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 shadow-lg border-border/50">
                <img
                  src={GuideAgent}
                  alt="Live chat Guide"
                  className="w-full h-40 md:h-48 object-fit rounded-lg mb-4 md:mb-6"
                />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">
                  Live Chat Assistance
                </h3>
                <p className="text-sm md:text-base text-foreground/70 mb-4 md:mb-6">
                  Connect with our team through live chat for step-by-step
                  guidance in real time.
                </p>
                <Button className="bg-primary text-white hover:bg-primary/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-md w-full sm:w-auto">
                  Chat Now
                </Button>
              </Card>
              <Card className="p-5 md:p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 shadow-lg border-border/50">
                <img
                  src={GuideAgent2}
                  alt="Phone Guide"
                  className="w-full h-40 md:h-48 object-fit rounded-lg mb-4 md:mb-6"
                />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">
                  Personalized Guide
                </h3>
                <p className="text-sm md:text-base text-foreground/70 mb-4 md:mb-6">
                  Get tailored Guide over the phone to address your specific
                  printer setup needs.
                </p>
                <Button className="bg-primary text-white hover:bg-primary/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-md w-full sm:w-auto">
                  Contact Us
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Disc />
    </div>
  );
};

export default PrinterSetupDetails;
