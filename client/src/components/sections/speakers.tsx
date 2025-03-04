import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const speakers = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVentures",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296"
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLabs",
    image: "https://images.unsplash.com/photo-1553484771-898ed465e931"
  },
  {
    name: "David Wilson",
    role: "Investment Partner",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
  },
  {
    name: "Emily Roberts",
    role: "Tech Strategist",
    image: "https://images.unsplash.com/photo-1484981138541-3d074aa97716"
  }
];

export default function Speakers() {
  return (
    <section className="py-20 bg-muted" id="speakers">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Speakers
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                  <p className="text-muted-foreground">{speaker.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
