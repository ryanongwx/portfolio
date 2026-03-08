import { motion } from "framer-motion";

const timeline = [
  { year: "2026", title: "Development Engineer", place: "Shanghai Westwell Technology Co., Ltd", desc: "" },
  { year: "2026", title: "CS Degree", place: "National University of Singapore", desc: "Bachelor of Computing · Specialized in Computer Networks & AI" },
];



const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16">
          
          <p className="font-mono text-sm text-primary tracking-[0.2em] mb-3">{"// 03"}</p>
          <h2 className="section-heading neon-text">About</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a vibecoder at heart! I believe the best software emerges when you're in flow, driven by curiosity and the urge to solve real-world problems. I don't just write code, I craft solutions that matter.
            

            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From training neural networks to deploying smart contracts, I work across 
              the full stack of emerging tech. My focus is on building tools that 
              democratize access to complex technologies and make a tangible impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's automating tedious workflows, making decentralized finance accessible, or using AI to tackle challenges in healthcare and education, I'm driven by problems worth solving and the creative energy of vibecoding.
            

            </p>
          </motion.div>

          <div className="space-y-0">
            {timeline.map((item, i) =>
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 pb-8 border-l border-border last:pb-0 group">
              
                <div className="absolute left-0 top-0 w-2.5 h-2.5 -translate-x-[5.5px] rounded-full bg-muted border border-primary/50 
                               group-hover:bg-primary group-hover:shadow-[0_0_10px_hsl(185_100%_50%/0.5)] transition-all" />
                <span className="font-mono text-xs text-primary">{item.year}</span>
                <h3 className="font-display text-sm font-semibold tracking-wide text-foreground mt-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.place}</p>
                
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;