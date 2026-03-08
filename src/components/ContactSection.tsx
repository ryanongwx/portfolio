import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:your@email.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-2xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary tracking-[0.2em] mb-3">{"// 04"}</p>
          <h2 className="section-heading neon-text mb-6">Get In Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Interested in collaborating on AI, blockchain, or cutting-edge web projects? 
            Let's connect and build something extraordinary together.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 glass-card flex items-center justify-center text-muted-foreground 
                           hover:text-primary hover:border-primary/40 transition-colors"
                aria-label={s.label}
              >
                <s.icon size={20} />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:your@email.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase rounded-sm
                       shadow-[0_0_20px_hsl(185_100%_50%/0.3)] hover:shadow-[0_0_30px_hsl(185_100%_50%/0.5)] transition-shadow"
          >
            Say Hello
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <p className="font-mono text-xs text-muted-foreground/50">
          {"</"} Built with passion & neon lights {"/>"}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
