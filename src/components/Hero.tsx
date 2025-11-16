import { Button } from "@/components/ui/button";
import printerHero from "@/assets/printer-hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                EASY PRINTER SETUP
              </h1>
              <p className="text-lg text-muted-foreground">
                Fast and stress-free!
              </p>
              <p className="max-w-[600px] text-muted-foreground">
                Get your printer up and running in minutes with our simple setup process. 
                We'll guide you through every step to ensure a smooth installation.
              </p>
            </div>
            <div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Let's Get Started →
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={printerHero}
              alt="Printer Setup"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
