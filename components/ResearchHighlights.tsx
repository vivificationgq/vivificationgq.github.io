import React from 'react';
import { Brain, Car, Users, Activity, Eye, Layers } from 'lucide-react';
import { CyberLidar, NeuroFlow } from './Illustrations';

interface ResearchCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    tags: string[];
    colorClass: string; // e.g. 'text-royal'
    bgClass: string; // e.g. 'bg-royal/10'
    accentClass: string; // e.g. 'bg-royal'
}

const ResearchCard: React.FC<ResearchCardProps> = ({ title, description, icon, tags, colorClass, bgClass, accentClass }) => (
  <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-lavender/50 hover:-translate-y-2 relative overflow-hidden reveal z-10">
    <div className={`absolute top-0 right-0 w-32 h-32 ${accentClass} rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700 ease-in-out opacity-10`}></div>
    
    <div className={`relative h-14 w-14 ${bgClass} rounded-xl flex items-center justify-center ${colorClass} mb-6 group-hover:rotate-12 transition-transform duration-300`}>
      {icon}
    </div>
    
    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 relative z-10">{title}</h3>
    <p className="text-slate-600 mb-6 text-base leading-relaxed relative z-10 min-h-[72px]">{description}</p>
    
    <div className="flex flex-wrap gap-2 relative z-10">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-queen/30 text-slate-600 text-xs rounded-full font-medium border border-lavender/50 group-hover:bg-white group-hover:shadow-sm transition-all">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export const ResearchHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      
      {/* Background Illustrations */}
      <div className="absolute top-20 left-10 w-96 h-96 opacity-30 pointer-events-none">
        <CyberLidar className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-10 w-96 h-96 opacity-20 pointer-events-none rotate-180">
        <NeuroFlow className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl font-serif font-bold text-rebecca mb-4">Research Domains</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            My work integrates psychological theory with engineering applications to create more intuitive and trustworthy intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResearchCard 
            title="Social Robotics"
            description="How do we perceive agency when collaborating with the iCub robot? Investigating the 'Joint Sense of Agency' in physical HRI scenarios."
            icon={<Users size={28} />}
            tags={['Human-Robot Interaction', 'Sense of Agency', 'iCub']}
            colorClass="text-royal"
            bgClass="bg-royal/10"
            accentClass="bg-royal"
          />
          <ResearchCard 
            title="Autonomous Cockpits"
            description="Deconstructing trust and control in Level 3+ autonomous driving. Creating the 'Agent Teaming Situation Awareness' (ATSA) framework."
            icon={<Car size={28} />}
            tags={['Trust Calibration', 'Situation Awareness', 'Safety']}
            colorClass="text-tropical"
            bgClass="bg-tropical/20"
            accentClass="bg-tropical"
          />
          <ResearchCard 
            title="Neuro-Cognition"
            description="Utilizing EEG and Eye-tracking to decode mental workload and attention distribution during complex monitoring tasks."
            icon={<Brain size={28} />}
            tags={['EEG', 'Physiology', 'Cognitive Load']}
            colorClass="text-rebecca"
            bgClass="bg-rebecca/10"
            accentClass="bg-rebecca"
          />
          <ResearchCard 
            title="Virtual Reality"
            description="Examining working memory capacity for biological motion and gesture commands within immersive VR environments."
            icon={<Layers size={28} />}
            tags={['VR', 'Unity 3D', 'Spatial Computing']}
            colorClass="text-parrot"
            bgClass="bg-parrot/20"
            accentClass="bg-parrot"
          />
          <ResearchCard 
            title="Interaction Design"
            description="Ergonomic evaluation of interface designs. From animation effects in control panels to digital finance interfaces."
            icon={<Activity size={28} />}
            tags={['UI/UX', 'Figma', 'Ergonomics']}
            colorClass="text-royal"
            bgClass="bg-royal/10"
            accentClass="bg-royal"
          />
          <ResearchCard 
            title="Visual Attention"
            description="Tracking eye movements to understand how humans process dynamic information in high-stakes environments."
            icon={<Eye size={28} />}
            tags={['Eye Tracking', 'Attention', 'Psychophysics']}
            colorClass="text-rebecca"
            bgClass="bg-rebecca/10"
            accentClass="bg-rebecca"
          />
        </div>
      </div>
    </section>
  );
};