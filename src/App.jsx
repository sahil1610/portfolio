import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  Globe 
} from 'lucide-react';

// Components
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Philosophy from './components/Philosophy';
import Timeline from './components/Timeline';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="app">
      <div className="layout-wrapper">
        {/* Left Panel - Fixed */}
        <aside className="left-panel">
          <div id="hero">
            <Hero compact={true} />
          </div>
          
          <div id="philosophy">
            <Philosophy />
          </div>
          
          <div id="tech">
            <TechStack />
          </div>
        </aside>

        {/* Right Panel - Scrollable */}
        <main className="right-panel">
          <div id="projects" className="section-compact">
            <FeaturedProjects />
          </div>

          <div id="experience" className="section-compact">
            <Timeline />
          </div>

          <div className="bento-grid">
            <div id="achievements" className="section-compact">
              <section>
                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.8rem' }}>
                  <Award className="text-primary" /> Achievements
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="card glass-panel" style={{ padding: '1.5rem' }}>
                    <h4 style={{ color: 'hsl(var(--primary))', fontSize: '1.1rem' }}>YBA Award at Springboard</h4>
                    <p style={{ marginTop: '0.5rem', color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>In recognition of excellent demonstration of continuous improvement in a structured and process-oriented approach.</p>
                  </div>
                  <div className="card glass-panel" style={{ padding: '1.5rem' }}>
                    <h4 style={{ color: 'hsl(var(--primary))', fontSize: '1.1rem' }}>Wingify Champ</h4>
                    <p style={{ marginTop: '0.5rem', color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>Recognized multiple times for leadership in automation excellence and cross-team quality transformation.</p>
                  </div>
                </div>
              </section>
            </div>

            <div id="education" className="section-compact">
              <section>
                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.8rem' }}>
                  <BookOpen className="text-primary" /> Education
                </h3>
                <div className="card glass-panel" style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem' }}>Bachelor of Technology</h4>
                  <p style={{ color: 'hsl(var(--primary))', fontWeight: '600', marginTop: '0.25rem', fontSize: '0.9rem' }}>Punjabi University Patiala</p>
                  <p style={{ color: 'hsl(var(--text-muted))', marginTop: '0.25rem', fontSize: '0.85rem' }}>2013 - 2014 (Completion)</p>
                  <p style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>GPA: 7.61 / 10.0</p>
                </div>
                
                <div style={{ marginTop: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>Certifications</h4>
                  <div className="card glass-panel" style={{ padding: '1rem' }}>
                    <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>ISTQB Foundation Level</p>
                    <p style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))' }}>May 2015</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'hsl(var(--text-muted))', borderTop: '1px solid hsl(var(--secondary))' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}><Globe size={14} /> English, Hindi, Punjabi</span>
            </div>
            <p style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} Sahil Goyal. All rights reserved.</p>
            <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Built with React, Vite, and Framer Motion</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
