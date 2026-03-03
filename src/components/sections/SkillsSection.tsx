import React from 'react';
import NeonCard from '../NeonCard';

const tools = ['Jetbrains IDEs', 'VSCode', 'Canva', 'Postman', 'Terminal', 'Claude & Claude Code', 'GitHub', 'Windows Powershell', 'Zsh', 'Bash', 'Google Gemini'];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="neon-orb neon-orb-aqua w-80 h-80 -right-40 top-0 animate-pulse-glow" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary neon-text-purple mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <NeonCard title="Currently Learning" icon="📚">
            <ul className="space-y-3">
              {['Backend Development', 'Architecture', 'DevOps', 'Docker', 'Data Management & Security'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary shadow-neon" />
                  {item}
                </li>
              ))}
            </ul>
          </NeonCard>

          <NeonCard title="Tools I Use" icon="🛠️" variant="purple">
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-sm bg-muted border border-secondary/30 rounded-md text-foreground hover:border-secondary hover:shadow-neon-purple transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </NeonCard>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
