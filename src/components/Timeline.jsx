import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    year: "2025",
    title: "Engineering Manager QA",
    company: "Wingify",
    period: "04/2025 - Present",
    location: "Remote",
    points: [
      "Leading a QA organization of 8 engineers across 5 product pods for VWO.",
      "Spearheading QA AI initiatives - building Locator Healer and AI-based test generation.",
      "Established a centralized test intelligence framework for data-driven defect analysis.",
      "Built and scaled high-performing teams through mentoring and strategic hiring.",
      "Partnered with leadership to introduce quality KPIs, reducing defect leakage by 30%."
    ]
  },
  {
    year: "2021",
    title: "Lead QA Engineer",
    company: "Wingify",
    period: "02/2021 - 03/2025",
    location: "Remote",
    points: [
      "Spearheaded cross-department automation integration, saving 500+ engineering hours monthly.",
      "Led Protractor to Playwright (NodeJS) migration, cutting execution time by 50%.",
      "Implemented Slack–Jenkins integration, reducing automation process time by 30%.",
      "Transitioned over 2,000 Runscope test cases to REST Assured.",
      "Built a JMeter-based performance suite, increasing throughput by 40%."
    ]
  },
  {
    year: "2019",
    title: "Senior Software Engineer, Automation",
    company: "Springboard",
    period: "09/2019 - 02/2021",
    location: "Bangalore, India",
    points: [
      "Elevated automation coverage by 75% across multiple products.",
      "Built and managed a UI automation framework (Selenium, Python, PyTest) integrated into CI/CD.",
      "Advised CTO on a unified company-wide strategy, boosting efficiency by 20%.",
      "Integrated LinkedIn Learning & Next Tech via LTI.",
      "Improved Django framework performance and backend stability."
    ]
  },
  {
    year: "2017",
    title: "Senior QA Engineer",
    company: "Wingify",
    period: "07/2017 - 08/2019",
    location: "Delhi, India",
    points: [
      "Reduced testing cycles by 50% through improved test planning and automation.",
      "Developed a Node.js API testing framework for 200+ enterprise-level API calls daily.",
      "Implemented a Selenium Grid with Docker Swarm for parallel execution.",
      "Built and executed end-to-end test cases for the VWO web app."
    ]
  },
  {
    year: "2013",
    title: "Senior QA Engineer",
    company: "Compro Technologies",
    period: "07/2013 - 03/2017",
    location: "Delhi, India",
    points: [
      "Increased test coverage from 0% to 50% using Java, TestNG, Selenium.",
      "Integrated Jenkins CI, achieving a 30% improvement in build efficiency.",
      "Streamlined QA artifacts, improving test documentation accuracy by 20%."
    ]
  }
];

const Timeline = () => {
  return (
    <section className="section-compact">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <Briefcase className="text-primary" /> Professional <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="timeline-container" style={{ position: 'relative', maxWidth: '800px' }}>
          {/* Vertical Line - Hidden on small mobile or adjusted */}
          <div className="timeline-line" style={{ 
            position: 'absolute', 
            left: '80px', 
            top: 0, 
            bottom: 0, 
            width: '2px', 
            background: 'linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--accent)))',
            opacity: 0.3
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="timeline-item"
                style={{ display: 'flex', gap: '2rem', position: 'relative' }}
              >
                {/* Year Label */}
                <div className="timeline-year" style={{ 
                  width: '60px', 
                  textAlign: 'right', 
                  paddingTop: '0.25rem',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: 'hsl(var(--primary))',
                  flexShrink: 0
                }}>
                  {exp.year}
                </div>

                {/* Dot on the line */}
                <div className="timeline-dot" style={{ 
                  position: 'absolute', 
                  left: '73px', 
                  top: '10px', 
                  width: '16px', 
                  height: '16px', 
                  borderRadius: '50%', 
                  background: 'hsl(var(--background))',
                  border: '3px solid hsl(var(--primary))',
                  zIndex: 2,
                  boxShadow: '0 0 10px hsl(var(--primary) / 0.3)'
                }} />

                {/* Content Card */}
                <div className="card glass-panel" style={{ padding: '1.25rem', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div>
                      <div className="mobile-year" style={{ display: 'none', color: 'hsl(var(--primary))', fontWeight: 800, marginBottom: '0.25rem' }}>{exp.year}</div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.1rem' }}>{exp.title}</h3>
                      <p style={{ color: 'hsl(var(--primary))', fontWeight: 700, fontSize: '1rem' }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: 'right', color: 'hsl(var(--text-muted))', fontSize: '0.8rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end', fontWeight: 600 }}>
                        <Calendar size={12} /> {exp.period}
                      </p>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end', marginTop: '0.1rem' }}>
                        <MapPin size={12} /> {exp.location}
                      </p>
                    </div>
                  </div>
                  
                  <ul style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {exp.points.map((point, i) => (
                      <li key={i} style={{ color: 'hsl(var(--text-main))', fontSize: '0.9rem', lineHeight: '1.4' }}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
