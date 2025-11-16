import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The setup process was incredibly simple. I had my printer connected and working in less than 10 minutes!",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "Outstanding customer support! They walked me through every step and made sure everything was working perfectly.",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "Best printer setup service I've ever used. Quick, professional, and hassle-free. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-accent">Happy</span> Clients
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
