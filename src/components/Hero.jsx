import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, BookOpen } from 'lucide-react';

const Hero = ({ compact = false }) => {
  const titles = [
    "Engineering Manager – QA",
    "AI-Driven Quality Strategist",
    "Automation Architect",
    "Team Builder & Mentor"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  React.useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTitleIndex];
      
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
        
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <header className={compact ? "hero" : "hero section"} style={{ 
      minHeight: compact ? 'auto' : '80vh', 
      display: 'flex', 
      alignItems: 'center',
      padding: compact ? '0' : '5rem 0'
    }}>
      <div className={compact ? "" : "container"}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ 
              color: 'hsl(var(--primary))', 
              fontWeight: 600, 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase',
              fontSize: compact ? '0.75rem' : '0.9rem'
            }}
          >
            Welcome to my portfolio
          </motion.span>
          
          <h1 style={{ 
            fontSize: compact ? '2.5rem' : 'clamp(3rem, 8vw, 5rem)', 
            lineHeight: 1.1,
            margin: '0.5rem 0',
            fontWeight: 800
          }}>
            I'm <span className="text-gradient">Sahil Goyal</span>
          </h1>
          
          <div style={{ height: compact ? '2rem' : '3rem', marginBottom: compact ? '1rem' : '2rem' }}>
            <h2 style={{ 
              fontSize: compact ? '1.2rem' : 'clamp(1.2rem, 4vw, 2rem)', 
              color: 'hsl(var(--text-muted))',
              fontWeight: 500
            }}>
              {displayText}<span className="animate-pulse">|</span>
            </h2>
          </div>

          <p style={{ 
            maxWidth: compact ? '100%' : '600px', 
            fontSize: compact ? '0.95rem' : '1.1rem', 
            marginBottom: compact ? '1.5rem' : '2.5rem',
            color: 'hsl(var(--text-muted))'
          }}>
            Building scalable, AI-driven quality systems for enterprise SaaS products. 
            Specializing in automation strategy and team leadership.
          </p>
          
          <div className="contact-links" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="mailto:sahil.goyal2@gmail.com" className="btn btn-primary" style={{ padding: compact ? '0.5rem 1rem' : '0.75rem 1.5rem', fontSize: compact ? '0.85rem' : '1rem' }}>
              <Mail size={compact ? 16 : 18} /> Get in Touch
            </a>
            <a href="/Sahil_Goyal_Resume.pdf" download className="btn glass-panel" style={{ padding: compact ? '0.5rem 1rem' : '0.75rem 1.5rem', fontSize: compact ? '0.85rem' : '1rem' }}>
              <BookOpen size={compact ? 16 : 18} /> Resume
            </a>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a href="https://www.linkedin.com/in/sahilgoyal16/" target="_blank" rel="noopener noreferrer" className="btn glass-panel" style={{ padding: '0.5rem' }}>
                <Linkedin size={compact ? 18 : 20} />
              </a>
              <a href="https://github.com/sahil1610" target="_blank" rel="noopener noreferrer" className="btn glass-panel" style={{ padding: '0.5rem' }}>
                <Github size={compact ? 18 : 20} />
              </a>
            </div>
          </div>

          {!compact && (
            <div className="contact-info" style={{ marginTop: '3rem', display: 'flex', gap: '2rem', color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> Delhi, India</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> +91 8586004630</span>
            </div>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
