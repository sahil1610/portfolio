import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Briefcase, 
  Award,
  User
} from 'lucide-react';

const navItems = [
  { id: 'hero', icon: <Home size={20} />, label: 'Home' },
  { id: 'projects', icon: <Zap size={20} />, label: 'Projects' },
  { id: 'philosophy', icon: <ShieldCheck size={20} />, label: 'Philosophy' },
  { id: 'tech', icon: <Layers size={20} />, label: 'Tech Stack' },
  { id: 'experience', icon: <Briefcase size={20} />, label: 'Experience' },
  { id: 'achievements', icon: <Award size={20} />, label: 'Awards' }
];

const Sidebar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="sidebar glass-panel"
      style={{
        position: 'fixed',
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        padding: '1rem',
        borderRadius: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="sidebar-item"
          data-tooltip={item.label}
          style={{
            background: 'none',
            border: 'none',
            color: 'hsl(var(--text-muted))',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '50%',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {item.icon}
        </button>
      ))}
    </motion.nav>
  );
};

export default Sidebar;
