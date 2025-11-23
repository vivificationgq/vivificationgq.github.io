import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, GraduationCap, Calendar, User } from 'lucide-react';
import { RoboConnect } from './Illustrations';

export const Timeline: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(EXPERIENCE[0].id);

  const activeItem = EXPERIENCE.find(e => e.id === activeId) || EXPERIENCE[0];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="experience">
      
      {/* Background Decoration */}
      <div className="absolute left-0 top-1/3 w-full h-[400px] opacity-10 pointer-events-none -z-0">
        <RoboConnect className="w-full h-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-serif font-bold text-rebecca">Professional Journey</h2>
            <p className="text-slate-500 mt-2">My path through academia and industry.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-lavender flex flex-col md:flex-row min-h-[500px] reveal">
            {/* Left Sidebar - List */}
            <div className="md:w-1/3 bg-queen/10 border-r border-lavender overflow-y-auto max-h-[300px] md:max-h-[600px] custom-scrollbar">
                {EXPERIENCE.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveId(item.id)}
                        className={`w-full text-left p-5 border-b border-lavender/50 transition-all hover:bg-white group relative ${
                            activeId === item.id ? 'bg-white shadow-sm z-10' : 'opacity-70 hover:opacity-100'
                        }`}
                    >
                        {activeId === item.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-royal"></div>
                        )}
                        <div className="flex items-center justify-between mb-1">
                             <span className={`text-xs font-bold tracking-wider uppercase ${
                                 activeId === item.id ? 'text-royal' : 'text-slate-400'
                             }`}>
                                {item.period}
                             </span>
                             {item.type === 'education' ? <GraduationCap size={14} className="text-slate-400"/> : <Briefcase size={14} className="text-slate-400"/>}
                        </div>
                        <h3 className={`font-bold text-sm leading-tight ${activeId === item.id ? 'text-rebecca' : 'text-slate-600'}`}>
                            {item.role}
                        </h3>
                        <p className="text-xs text-slate-500 truncate mt-1">{item.institution}</p>
                    </button>
                ))}
            </div>

            {/* Right Content - Details */}
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden bg-white">
                {/* Background Icon Watermark */}
                <div className="absolute -right-6 -bottom-6 opacity-[0.03] pointer-events-none transform rotate-12 text-rebecca">
                     {activeItem.type === 'education' ? 
                        <GraduationCap size={400} /> : 
                        <Briefcase size={400} />
                     }
                </div>

                <div key={activeItem.id} className="animate-fade-in-up relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                            activeItem.type === 'education' ? 'bg-royal/10 text-royal' : 
                            activeItem.type === 'internship' ? 'bg-parrot/20 text-rebecca' : 'bg-tropical/20 text-rebecca'
                        }`}>
                            {activeItem.type === 'education' ? 'Education' : activeItem.type === 'internship' ? 'Internship' : 'Work Experience'}
                        </span>
                         <span className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                            <Calendar size={12} />
                            {activeItem.period}
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-rebecca mb-2 leading-tight">
                        {activeItem.role}
                    </h3>
                    <h4 className="text-xl text-royal font-medium mb-8 flex items-center gap-2">
                        {activeItem.institution}
                    </h4>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                            {activeItem.description}
                        </p>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="mt-12 pt-8 border-t border-lavender flex items-center gap-4">
                         <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-queen border-2 border-white flex items-center justify-center text-rebecca"><User size={14}/></div>
                         </div>
                         <span className="text-xs text-slate-400 italic">
                            {activeItem.type === 'education' ? 'Academic Milestone' : 'Professional Role'}
                         </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};