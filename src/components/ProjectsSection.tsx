import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Neural Canvas",
    description: "AI-powered generative art platform using diffusion models and neural style transfer. Create, remix, and mint unique digital art pieces.",
    tags: ["AI/ML", "Python", "React", "DALL-E API"],
    color: "primary" as const,
    github: "#",
    live: "#",
  },
  {
    title: "ChainVault",
    description: "Decentralized asset management protocol on Ethereum. Smart contracts for automated portfolio rebalancing and yield optimization.",
    tags: ["Solidity", "Web3.js", "DeFi", "Hardhat"],
    color: "secondary" as const,
    github: "#",
    live: "#",
  },
  {
    title: "SentientBot",
    description: "Conversational AI agent with long-term memory and tool-use capabilities. Built on transformer architecture with RAG pipeline.",
    tags: ["LLM", "LangChain", "Vector DB", "TypeScript"],
    color: "accent" as const,
    github: "#",
    live: "#",
  },
  {
    title: "TokenForge",
    description: "No-code platform for deploying custom ERC-20 and ERC-721 tokens. Includes governance, staking, and liquidity pool templates.",
    tags: ["Blockchain", "Next.js", "Smart Contracts", "IPFS"],
    color: "secondary" as const,
    github: "#",
    live: "#",
  },
  {
    title: "DataMesh",
    description: "Real-time data pipeline orchestrator with ML model monitoring. Auto-scaling inference endpoints with drift detection.",
    tags: ["MLOps", "Kubernetes", "FastAPI", "Redis"],
    color: "primary" as const,
    github: "#",
    live: "#",
  },
  {
    title: "ZK-Auth",
    description: "Zero-knowledge proof authentication system. Privacy-preserving identity verification without revealing personal data on-chain.",
    tags: ["ZK-SNARKs", "Circom", "Rust", "Privacy"],
    color: "accent" as const,
    github: "#",
    live: "#",
  },
];

const colorMap = {
  primary: "border-primary/30 hover:border-primary/60",
  secondary: "border-secondary/30 hover:border-secondary/60",
  accent: "border-neon-green/30 hover:border-neon-green/60",
};

const tagColorMap = {
  primary: "text-primary border-primary/30",
  secondary: "text-secondary border-secondary/30",
  accent: "text-neon-green border-neon-green/30",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-[0.2em] mb-3">{"// 01"}</p>
          <h2 className="section-heading neon-text">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card-hover p-6 flex flex-col group ${colorMap[project.color]}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-lg font-semibold text-foreground tracking-wide">
                  {project.title}
                </h3>
                <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-xs px-2 py-0.5 border rounded-sm ${tagColorMap[project.color]}`}
                  >
                    {tag}
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

export default ProjectsSection;
