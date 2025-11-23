import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, NEWS } from '../constants';
import { NeuroFlow, RoboConnect, PaperTextureFilter } from './Illustrations';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center overflow-hidden">
      
      {/* SVG Filters */}
      <PaperTextureFilter />

      {/* Dynamic Background Illustrations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] -z-10 translate-x-1/3 -translate-y-1/4 opacity-60">
         <NeuroFlow className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] -z-10 -translate-x-1/3 translate-y-1/4 opacity-40">
         <RoboConnect className="w-full h-full" />
      </div>

      {/* News Ticker - Full Width */}
      <div className="w-full mb-8 reveal">
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-lavender rounded-full px-4 py-1.5 text-sm text-slate-600 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-parrot opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-royal"></span>
            </span>
            <span className="font-medium text-rebecca">{NEWS[0].date}:</span>
            <span className="truncate max-w-[200px] sm:max-w-md">{NEWS[0].text}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Left Column: Headlines & Actions */}
        <div className="md:col-span-3 space-y-8 reveal order-1">
          
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-rebecca leading-[1.1]">
              Designing the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-parrot">Future of HRI</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-light">
              Hi, I'm <strong>{PERSONAL_INFO.name}</strong>. I research how humans establish <span className="font-semibold text-rebecca decoration-parrot/50 underline decoration-2 underline-offset-2">Sense of Agency</span> when collaborating with social robots and AI systems. Currently building the next generation of human-robot trust at IIT.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#/research"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-rebecca/90 hover:bg-royal transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Research Focus
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center px-8 py-4 border border-lavender text-base font-medium rounded-full text-rebecca bg-white hover:bg-queen/30 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <Mail className="mr-2 -ml-1 h-5 w-5 text-royal" />
              Get in Touch
            </a>
          </div>
        </div>
        
        {/* Right Column: Profile & Stats */}
        <div className="md:col-span-2 relative reveal mt-12 md:mt-0 flex flex-col items-center justify-start order-2 w-full space-y-10" style={{ transitionDelay: '200ms' }}>
            {/* Profile Picture - Reduced size to 50% */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-[210px] lg:h-[210px]">
               {/* Decorative Background Element */}
               <div className="absolute top-0 right-0 w-full h-full bg-tropical rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float"></div>
               
               {/* Image Container */}
               <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-[4px] border-white transform rotate-2 transition-transform hover:rotate-0 duration-500 bg-white">
                   <img 
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800" 
                    alt="Qi Gao" 
                    className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-rebecca/20 to-transparent pointer-events-none"></div>
               </div>

               {/* Floating Badge - Scaled down for smaller image */}
               <div className="absolute bottom-2 -left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-lavender flex items-center gap-2 animate-float max-w-[140px] origin-bottom-left scale-90" style={{animationDelay: '1s'}}>
                  <div className="bg-queen p-2 rounded-full text-rebecca shrink-0">
                    <Sparkles size={14} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-slate-900 leading-tight">Outstanding Graduate</p>
                    <p className="text-[9px] text-slate-500 truncate">Zhejiang Univ.</p>
                  </div>
               </div>
            </div>

            {/* Stats Block - Moved to Right Column */}
            <div className="flex flex-row items-center gap-6 text-slate-400 text-sm bg-white/60 backdrop-blur-md p-5 rounded-2xl border border-lavender/50 shadow-sm">
                <div className="flex flex-col items-center text-center">
                    <span className="font-bold text-rebecca text-2xl">7+</span>
                    <span className="leading-tight text-slate-600 text-xs">Journal<br/>Publications</span>
                </div>
                 <div className="w-px h-8 bg-lavender"></div>
                <div className="flex flex-col items-center text-center">
                    <span className="font-bold text-rebecca text-2xl">3</span>
                    <span className="leading-tight text-slate-600 text-xs">Major<br/>Tech Partners</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};