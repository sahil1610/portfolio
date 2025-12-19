import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Cloud, 
  Cpu, 
  ShieldCheck,
  Zap,
  Settings
} from 'lucide-react';

const techCategories = [
  {
    title: "Languages",
    icon: <Code2 size={18} />,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Node.js"]
  },
  {
    title: "Frameworks",
    icon: <Terminal size={18} />,
    skills: ["Playwright", "Selenium", "Cypress", "REST Assured", "Postman", "JMeter", "PyTest", "TestNG"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud size={18} />,
    skills: ["Jenkins", "Docker", "CircleCI", "GCP", "Git", "Bitbucket", "CI/CD"]
  },
  {
    title: "AI & Innovation",
    icon: <Cpu size={18} />,
    skills: ["LLMs", "Self-Healing Locators", "AI Test Gen", "AI Strategy"]
  },
  {
    title: "Strategy & Leadership",
    icon: <ShieldCheck size={18} />,
    skills: ["Automation Strategy", "API Testing", "Performance", "SDLC/STLC", "Test Management"]
  }
];

const TechStack = () => {
  return (
    <div className="tech-stack-content">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ marginBottom: '1.5rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
      >
        <Layers className="text-primary" size={24} /> Technical <span className="text-gradient">Stack</span>
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {techCategories.map((cat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card glass-panel"
            style={{ padding: '1rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'hsl(var(--primary))' }}>
              {cat.icon}
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{cat.title}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {cat.skills.map((skill, i) => (
                <span key={i} style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.25rem 0.6rem', 
                  borderRadius: '0.4rem', 
                  background: 'hsl(var(--background))', 
                  border: '1px solid hsl(var(--secondary))',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  whiteSpace: 'nowrap'
                }}>
                  <Zap size={10} className="text-primary" /> {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
