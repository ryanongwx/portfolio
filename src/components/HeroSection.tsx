import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["AI Engineer", "Blockchain Developer", "Vibecoder", "Problem Solver", "Web3 Architect"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }} />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }} />
      

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground mb-6 uppercase">
            {"// welcome_to_my_portfolio"}
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="neon-text">Ryan</span>{" "}
            <span className="text-foreground">Ong</span>
          </h1>

          <div className="h-12 md:h-14 flex items-center justify-center mb-8">
            <span className="font-mono text-xl md:text-2xl text-muted-foreground">
              {">"} <span className="text-primary">{displayText}</span>
              <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
            </span>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Building the future at the intersection of AI and decentralized systems. 
            Passionate vibecoder solving real-world problems through elegant code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase rounded-sm
                         shadow-[0_0_20px_hsl(185_100%_50%/0.3)] hover:shadow-[0_0_30px_hsl(185_100%_50%/0.5)] transition-shadow">
              
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-primary/40 text-primary font-display text-sm tracking-wider uppercase rounded-sm
                         hover:bg-primary/10 transition-colors">
              
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}>
          
          

          
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;