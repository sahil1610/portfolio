import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Search, MessageSquare } from 'lucide-react';

const projects = [
  {
    title: "AI Locator Healer",
    description: "Developed an AI-driven system that automatically repairs broken UI locators in automation scripts, reducing maintenance overhead by 40%.",
    icon: <Zap size={32} />,
    tags: ["AI", "Self-Healing", "Automation"],
    impact: "40% reduction in manual maintenance"
  },
  {
    title: "AI-Based Test Generation",
    description: "Spearheaded initiatives to generate comprehensive test cases using LLMs, significantly accelerating the test planning phase for new features.",
    icon: <Cpu size={32} />,
    tags: ["LLM", "Test Strategy", "Efficiency"],
    impact: "Faster release readiness"
  },
  {
    title: "AI Support Responder",
    description: "Built an AI-driven responder for support tickets, leveraging historical data to provide instant, accurate solutions to common customer queries.",
    icon: <MessageSquare size={32} />,
    tags: ["NLP", "Customer Success", "Automation"],
    impact: "Improved response time & accuracy"
  },
  {
    title: "Test Intelligence Framework",
    description: "Established a centralized framework for data-driven defect analysis, enabling leadership to make faster, evidence-based release decisions.",
    icon: <Search size={32} />,
    tags: ["Data Analytics", "Defect Analysis", "Strategy"],
    impact: "30% reduction in defect leakage"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="section-compact">
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>AI & <span className="text-gradient">Innovation</span></h2>
          <p style={{ color: 'hsl(var(--text-muted))', maxWidth: '700px' }}>
            Leading the transition from traditional QA to AI-augmented Quality Engineering. 
            Here are some of the key initiatives I've spearheaded to drive efficiency and reliability.
          </p>
        </div>

        <div className="grid-cols-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card glass-panel"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{ color: 'hsl(var(--primary))' }}>{project.icon}</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                <p style={{ color: 'hsl(var(--text-muted))', fontSize: '1rem', marginBottom: '1.5rem' }}>{project.description}</p>
              </div>
              
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '1rem', 
                      background: 'hsl(var(--primary) / 0.1)', 
                      color: 'hsl(var(--primary))',
                      fontWeight: 600
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ 
                  padding: '0.75rem', 
                  borderRadius: '0.5rem', 
                  background: 'hsl(var(--secondary))', 
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Zap size={14} /> {project.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
