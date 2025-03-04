import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Speakers from "@/components/sections/speakers";
import Venue from "@/components/sections/venue";
import Register from "@/components/sections/register";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Speakers />
        <Venue />
        <Register />
      </motion.main>
    </div>
  );
}
