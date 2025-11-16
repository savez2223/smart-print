import { Button } from "@/components/ui/button";
import printAnywhere from "@/assets/print-anywhere.png";

const PrintAnywhere = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={printAnywhere}
              alt="Print Anywhere"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Print Anywhere and Anytime
            </h2>
            <p className="text-muted-foreground">
              PRINTING FROM ANOTHER ROOM HAS NEVER BEEN SO EASY
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Gone are the days when you could only print from a computer attached to your printer. Now, your favorite device 
                is a remote printing machine. Moreover, managing the print queues on your computer will be a thing of the past. 
                It requires less investment and is able to provide you with printing flexibility that you'll love.
              </p>
              <p>
                Go wireless with our printer setup. By using a wireless network, you can print from your iPad, tablets, laptops, 
                and your smartphones at ease and with utmost flexibility. The setup is quick and easy, requiring minimal support. 
                It is necessary to have a proper Wi-Fi network setup at home. Try printing wirelessly by following the simple instructions.
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Setup Printer Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintAnywhere;
