import React, { useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { SKILLS } from '../constants';
import { Skill } from '../types';
import { Code, PenTool, Microscope, MousePointerClick } from 'lucide-react';
import { CyberLidar } from './Illustrations';

export const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<Skill>(SKILLS[0]);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const displaySkill = hoveredSkill || activeSkill;

  // Group skills by category
  const researchSkills = SKILLS.filter(s => s.category === 'Research');
  const techSkills = SKILLS.filter(s => s.category === 'Tech');
  const designSkills = SKILLS.filter(s => s.category === 'Design');

  const charts = [
    { 
      title: 'Research', 
      data: researchSkills, 
      icon: <Microscope size={18} />, 
      color: '#875DAF', // Royal Purple
      fill: '#875DAF', 
      bg: 'bg-royal/10',
      text: 'text-royal'
    },
    { 
      title: 'Tech', 
      data: techSkills, 
      icon: <Code size={18} />, 
      color: '#C5A7E0', // Tropical Violet
      fill: '#C5A7E0', 
      bg: 'bg-tropical/20',
      text: 'text-rebecca' // Darker text for readability
    },
    { 
      title: 'Design', 
      data: designSkills, 
      icon: <PenTool size={18} />, 
      color: '#D794AF', // Parrot Pink
      fill: '#D794AF', 
      bg: 'bg-parrot/20',
      text: 'text-rebecca'
    }
  ];

  const activeCategoryConfig = charts.find(c => c.title === displaySkill.category) || charts[0];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
       {/* Dynamic Illustration Background */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none">
           <CyberLidar className="w-full h-full" />
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 reveal">
           <h2 className="text-4xl font-serif font-bold text-rebecca mb-4">Technical Proficiency</h2>
           <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
             A multidisciplinary toolkit bridging psychological theory and engineering implementation.
           </p>
        </div>

        {/* Top Section: Detail Card */}
        <div className="mb-16 max-w-4xl mx-auto reveal">
             <div className="bg-white rounded-2xl p-8 shadow-xl border border-lavender relative overflow-hidden transition-all duration-300">
                <div className={`absolute top-0 right-0 w-48 h-48 ${activeCategoryConfig.bg} rounded-bl-full opacity-50 transition-colors duration-500`}></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                    {/* Skill Info */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${activeCategoryConfig.bg} ${activeCategoryConfig.text}`}>
                                {activeCategoryConfig.icon}
                                {displaySkill.category}
                            </span>
                            <span className="text-2xl font-bold text-rebecca">{displaySkill.level}%</span>
                        </div>
                        
                        <h3 className="text-3xl font-serif font-bold text-slate-900 mb-3">{displaySkill.name}</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {displaySkill.description}
                        </p>
                    </div>

                    {/* Progress Visual */}
                    <div className="w-full md:w-1/3 shrink-0">
                        <div className="flex justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                            <span>Proficiency</span>
                            <span>{displaySkill.level}/100</span>
                        </div>
                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div 
                                className="h-full rounded-full transition-all duration-700 ease-out"
                                style={{ 
                                    width: `${displaySkill.level}%`,
                                    backgroundColor: activeCategoryConfig.color
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        {/* Bottom Section: 3 Graphs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal" style={{ transitionDelay: '200ms' }}>
            {charts.map((chart) => (
                <div key={chart.title} className="flex flex-col items-center bg-queen/20 rounded-2xl p-6 border border-lavender/50 relative">
                    <h3 className={`font-bold text-lg mb-6 flex items-center gap-2 ${chart.text}`}>
                        {chart.icon}
                        {chart.title}
                    </h3>
                    
                    <div className="w-full h-[250px] relative">
                         <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chart.data}>
                            <PolarGrid stroke="#E0BAC9" /> {/* Lavender */}
                            <PolarAngleAxis 
                                dataKey="name" 
                                tick={(props) => {
                                    const isActive = displaySkill.name === props.payload.value;
                                    return (
                                        <text
                                            x={props.x}
                                            y={props.y}
                                            dy={3}
                                            fill={isActive ? chart.color : '#64748b'}
                                            fontSize={11}
                                            fontWeight={isActive ? 700 : 500}
                                            textAnchor="middle"
                                            className="cursor-pointer transition-all select-none"
                                            onClick={() => {
                                                const s = chart.data.find(sk => sk.name === props.payload.value);
                                                if(s) setActiveSkill(s);
                                            }}
                                            onMouseEnter={() => {
                                                const s = chart.data.find(sk => sk.name === props.payload.value);
                                                if(s) setHoveredSkill(s);
                                            }}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                        >
                                            {props.payload.value}
                                        </text>
                                    );
                                }}
                            />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar
                                name={chart.title}
                                dataKey="level"
                                stroke={chart.color}
                                strokeWidth={3}
                                fill={chart.fill}
                                fillOpacity={0.4}
                                dot={(props: any) => {
                                    const { cx, cy, payload } = props;
                                    const isActive = displaySkill.name === payload.name;
                                    
                                    return (
                                        <g
                                            onMouseEnter={() => setHoveredSkill(payload)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                            onClick={() => setActiveSkill(payload)}
                                            className="cursor-pointer"
                                        >
                                            <circle cx={cx} cy={cy} r={15} fill="transparent" />
                                            <circle
                                                cx={cx}
                                                cy={cy}
                                                r={isActive ? 6 : 4}
                                                fill={isActive ? chart.color : 'white'}
                                                stroke={chart.color}
                                                strokeWidth={2}
                                                className="transition-all duration-300"
                                            />
                                            {isActive && (
                                                <circle cx={cx} cy={cy} r={10} fill={chart.fill} opacity={0.4} className="animate-ping"/>
                                            )}
                                        </g>
                                    );
                                }}
                            />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                    
                    <div className="absolute top-4 right-4 text-[10px] text-slate-400 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm border border-lavender">
                        <MousePointerClick size={10} />
                        Interact
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};