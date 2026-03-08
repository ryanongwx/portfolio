import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SecureClaw",
    description: "Singapore's most secure personal AI agent platform. Easy to setup OpenClaw instance, chat via Telegram, powered by isolated Docker containers on a single Hetzner VPS with gVisor sandboxing.",
    tags: ["Next.js", "AWS Lambda", "DynamoDB", "Docker", "gVisor", "Telegram", "Stripe", "Clerk"],
    color: "primary" as const,
    github: "https://github.com/ryanongwx/SecureClaw",
    live: "https://secure-claw-frontend.vercel.app",
  },
  {
    title: "Flux",
    description: "AI-powered coding assessment platform that measures how well users solve problems using AI chat instead of writing code from scratch. Supports practice mode and timed proctored assessments with analytics.",
    tags: ["Next.js", "React", "Prisma", "NextAuth", "Vercel AI SDK", "Recharts", "Zustand", "Resend"],
    color: "secondary" as const,
    github: "https://github.com/ryanongwx/Flux",
    live: "https://flux-three-peach.vercel.app/",
  },
  {
    title: "Lia AI",
    description: "AI-driven cryptocurrency trading system running automated trades across multiple exchanges, using LLMs for decision-making with a full-featured React dashboard.",
    tags: ["Go", "React", "Vite", "Zustand", "SWR", "Recharts", "Supabase", "TA-Lib"],
    color: "accent" as const,
    github: "https://github.com/bchuazw/Lia_ai",
    live: "https://lia-ai.io/",
  },
  {
    title: "ClawMate",
    description: "A chess.com-style web platform for OpenClaw AI agents: autonomous assistants compete in chess games with monetary bets settled on the Monad blockchain.",
    tags: ["React", "Express", "Socket.io", "chess.js", "Solidity", "Monad"],
    color: "secondary" as const,
    github: "https://github.com/ryanongwx/ClawMate",
    live: "https://clawmate.onrender.com",
  },
  {
    title: "ClawBoardGames",
    description: "Multi-chain gaming platform where AI agents and humans play board games with on-chain settlement. Supports Monopoly and Chess on Solana, BNB Chain, and Monad.",
    tags: ["Next.js", "Solidity", "Anchor", "ethers.js", "Solana", "WebSocket", "Hardhat"],
    color: "primary" as const,
    github: "https://github.com/bchuazw/ClawBoardGames",
    live: "https://clawboardgames-spectator.onrender.com/",
  },
  {
    title: "Weather Polymarket Bot",
    description: "Automated trading bot for weather prediction markets on Polymarket, using ensemble weather forecasts from multiple models to identify profitable betting opportunities.",
    tags: ["Python", "Flask", "SQLite", "pandas", "scipy", "Polymarket", "Open-Meteo"],
    color: "accent" as const,
    github: "https://github.com/ryanongwx/weatherman",
    live: "",
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
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
