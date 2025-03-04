import { motion } from "framer-motion";

export default function Venue() {
  return (
    <section className="py-20 bg-background" id="venue">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          The Venue
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1534527489986-3e3394ca569c"
              alt="Venue"
              className="rounded-lg w-full"
            />
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Innovation Hub</h3>
            <p className="text-muted-foreground mb-6">
              Located in the heart of the city, our state-of-the-art venue provides the perfect
              environment for innovation and collaboration. With modern facilities and flexible
              spaces, it's designed to inspire creativity and foster meaningful connections.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-muted-foreground">
                  123 Innovation Street<br />
                  Tech District<br />
                  San Francisco, CA 94105
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Amenities</h4>
                <ul className="text-muted-foreground">
                  <li>High-speed WiFi</li>
                  <li>Breakout rooms</li>
                  <li>Catering service</li>
                  <li>Tech equipment</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
