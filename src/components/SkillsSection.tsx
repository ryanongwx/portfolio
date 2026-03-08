import { motion } from "framer-motion";
import { Brain, Blocks, Code2, Database, Globe, Shield } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    skills: ["PyTorch", "TensorFlow", "LangChain", "Transformers", "Computer Vision", "NLP"],
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "IPFS", "DeFi Protocols", "ZK-Proofs"],
  },
  {
    icon: Code2,
    title: "Languages",
    skills: ["TypeScript", "Python", "Rust", "Solidity", "Go", "SQL"],
  },
  {
    icon: Globe,
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion", "WebGL"],
  },
  {
    icon: Database,
    title: "Backend & Data",
    skills: ["Node.js", "FastAPI", "PostgreSQL", "Redis", "GraphQL", "Docker"],
  },
  {
    icon: Shield,
    title: "DevOps & Security",
    skills: ["AWS", "Kubernetes", "CI/CD", "Smart Contract Auditing", "Cryptography", "Linux"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-[0.2em] mb-3">{"// 02"}</p>
          <h2 className="section-heading neon-text">Skills & Tech</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 group hover:border-primary/40 transition-colors duration-500"
            >
              <cat.icon className="w-8 h-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(185_100%_50%/0.6)] transition-all" />
              <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
