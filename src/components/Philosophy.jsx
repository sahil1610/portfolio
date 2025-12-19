import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FastForward, Users } from 'lucide-react';

const Philosophy = () => {
  return (
    <div className="philosophy-content">
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Engineering <span className="text-gradient">Philosophy</span></h2>
        <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem', lineHeight: '1.5' }}>
          Quality is not a phase; it's a culture. My approach centers on integrating quality into every step of the SDLC.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card glass-panel"
          style={{ padding: '1.5rem' }}
        >
          <ShieldCheck size={32} style={{ color: 'hsl(var(--primary))', marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Shift-Left Quality</h3>
          <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>
            Moving testing to the earliest stages of development to catch defects where they are cheapest to fix.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card glass-panel"
          style={{ padding: '1.5rem' }}
        >
          <FastForward size={32} style={{ color: 'hsl(var(--accent))', marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>AI-First Automation</h3>
          <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>
            Leveraging AI to handle mundane aspects of QA—from locator maintenance to test data generation.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card glass-panel"
          style={{ padding: '1.5rem' }}
        >
          <Users size={32} style={{ color: 'hsl(var(--primary))', marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ownership Culture</h3>
          <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>
            Building high-performing teams where every member takes pride in the quality of the product.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;
