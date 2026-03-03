import React from 'react';
import NeonCard from '../NeonCard';
import { Code, Palette, Zap, Coffee } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
  { icon: <Code className="w-6 h-6" />, title: 'Clean Code', desc: 'Writing maintainable, scalable solutions' },
  { icon: <Palette className="w-6 h-6" />, title: 'Design Focus', desc: 'Bringing UX/UI concepts to life' },
  { icon: <Zap className="w-6 h-6" />, title: 'Fast Learner', desc: 'Always exploring new technologies' },
  { icon: <Coffee className="w-6 h-6" />, title: 'Team Player', desc: 'Collaborative and communicative' }];


  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="neon-orb neon-orb-purple w-72 h-72 -left-36 top-1/2 animate-pulse-glow" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary neon-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <NeonCard title="Who I Am" icon="👨‍💻">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello and welcome to my portfolio page! I'm <span className="text-primary font-semibold">Gabriel Cruz</span>,
                a passionate Software Developer and Engineer who enjoys creating intuitive and engaging experiences.
                My journey in tech started in retail in 2006; learning and growing through mobile smartphones and how
                they tie together with Smart Home Technology. That's when I found out about the Internet of Things,
                known as IoT. That's when I ultimately became curious in wanting to solve everyday problems through
                implementing technology to address health challenges.
              </p>

              <p>
                I specialize in <span className="text-secondary">Java</span> and <span className="text-secondary">Spring Boot</span>.
                However, I have also taken the time and effort to learn other programming languages; examples are Python, C#, C++, SQL,
                Command Line Interface - Bash, Git, Zsh. Also, learning about the Internet of Things allowed me to complete network
                based projects. Such as building an Adblocker with my Router with the Command Line. Another project I've done, is an
                interface-less smart home system using Raspberry Pi.
              </p>

              <p>
                Please feel free to checkout some of my work.
              </p>
            </div>
          </NeonCard>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => <div key={index} className="neon-card p-4 text-center hover:shadow-neon-lg transition-all duration-300">

                <div className="text-primary mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-foreground mb-1 text-sm uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;