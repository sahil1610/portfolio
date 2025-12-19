import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Lightbulb, TrendingUp } from 'lucide-react';

const insights = [
  {
    title: "The Future of QA: AI-Augmented Testing",
    description: "How LLMs and self-healing systems are redefining the role of quality engineers in 2025.",
    icon: <Lightbulb size={24} />,
    category: "AI & Innovation"
  },
  {
    title: "Scaling Quality in Multi-Squad Organizations",
    description: "Strategies for maintaining high standards across distributed engineering teams without slowing down releases.",
    icon: <TrendingUp size={24} />,
    category: "Strategy"
  },
  {
    title: "Why Shift-Left is Non-Negotiable",
    description: "The economic and technical case for integrating quality at the very start of the development lifecycle.",
    icon: <BookOpen size={24} />,
    category: "Engineering Culture"
  }
];

const Insights = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Thought <span className="text-gradient">Leadership</span></h2>
          <p style={{ color: 'hsl(var(--text-muted))', maxWidth: '700px', margin: '0 auto' }}>
            Sharing insights on the intersection of AI, quality engineering, and organizational strategy.
          </p>
        </div>

        <div className="grid-cols-auto">
          {insights.map((insight, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card glass-panel"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', cursor: 'pointer' }}
              whileHover={{ y: -5 }}
            >
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '12px', 
                background: 'hsl(var(--primary) / 0.1)', 
                color: 'hsl(var(--primary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {insight.icon}
              </div>
              
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {insight.category}
                </span>
                <h3 style={{ fontSize: '1.3rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{insight.title}</h3>
                <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.95rem', lineHeight: '1.6' }}>{insight.description}</p>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--primary))', fontWeight: 600, fontSize: '0.9rem' }}>
                Read Article <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
