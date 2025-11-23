import React, { useState } from 'react';
import { PUBLICATIONS } from '../constants';
import { PublicationType, Publication } from '../types';
import { FileText, ExternalLink, Book, ArrowRight, ArrowLeft, Quote, Calendar, Tag } from 'lucide-react';

// --- List Component ---
export const Publications: React.FC = () => {
  const [filter, setFilter] = useState<PublicationType | 'All'>('All');

  const filteredPubs = filter === 'All' 
    ? PUBLICATIONS 
    : PUBLICATIONS.filter(p => p.type === filter);

  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
            <div>
                <h2 className="text-4xl font-serif font-bold text-rebecca mb-2">Publications</h2>
                <p className="text-slate-600">Selected peer-reviewed research contributions.</p>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
            {['All', ...Object.values(PublicationType)].map((type) => (
                <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    filter === type 
                    ? 'bg-rebecca text-white shadow-lg transform -translate-y-0.5' 
                    : 'bg-white text-slate-500 hover:bg-queen/30 border border-lavender'
                }`}
                >
                {type}
                </button>
            ))}
            </div>
        </div>

        <div className="space-y-4">
          {filteredPubs.map((pub, index) => (
            <button 
              key={pub.id} 
              onClick={() => window.location.hash = `#/publication/${pub.id}`}
              className="w-full text-left bg-white p-8 rounded-2xl border border-lavender/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden reveal" 
              style={{ transitionDelay: `${index * 50}ms` }}
            >
               {/* Hover Indicator */}
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-royal transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

              <div className="flex items-start gap-6">
                <div className="hidden sm:flex flex-col items-center min-w-[60px]">
                    <span className="text-3xl font-serif font-bold text-lavender group-hover:text-royal transition-colors">{pub.id}</span>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start gap-4 mb-2">
                         <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-rebecca transition-colors">{pub.title}</h3>
                         <ArrowRight className="text-lavender group-hover:text-royal transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                   
                    <p className="text-slate-600 text-sm mb-4 font-light leading-relaxed">
                        {pub.authors.split('Gao, Q.').map((part, i, arr) => (
                            <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && <strong className="text-rebecca font-semibold bg-queen/20 px-1 rounded">Gao, Q.</strong>}
                            </React.Fragment>
                        ))}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-50 pt-4">
                        <span className="flex items-center gap-1.5 font-medium text-rebecca bg-tropical/10 px-2.5 py-1 rounded-full border border-tropical/20">
                            <Book size={12} className="text-royal"/>
                            {pub.venue}
                        </span>
                        <span className="flex items-center gap-1.5 font-medium text-slate-500">
                            <Calendar size={12} />
                            {pub.year}
                        </span>
                        <span className="flex items-center gap-1.5 font-medium text-slate-500 ml-auto group-hover:text-royal transition-colors">
                            Read Abstract
                        </span>
                    </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Detail Component ---
export const PublicationDetail: React.FC<{ id: string }> = ({ id }) => {
    const pub = PUBLICATIONS.find(p => p.id === id);

    if (!pub) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h2 className="text-2xl font-bold text-rebecca mb-4">Publication not found</h2>
                <button onClick={() => window.location.hash = '#/publications'} className="text-royal hover:underline">Back to list</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-24 animate-fade-in-up">
             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <button 
                    onClick={() => window.location.hash = '#/publications'}
                    className="group flex items-center gap-2 text-slate-500 hover:text-royal transition-colors mb-8"
                 >
                    <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow border border-lavender">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="text-sm font-medium">Back to Publications</span>
                 </button>

                 <div className="bg-white rounded-3xl shadow-xl border border-lavender overflow-hidden">
                    {/* Header */}
                    <div className="bg-rebecca text-white p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-royal rounded-full mix-blend-overlay filter blur-3xl opacity-40 translate-x-1/4 -translate-y-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-parrot rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/4 translate-y-1/4"></div>
                        
                        <div className="relative z-10">
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="bg-royal/30 text-white border border-royal/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {pub.type}
                                </span>
                                <span className="bg-white/10 text-white/80 border border-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {pub.year}
                                </span>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8">
                                {pub.title}
                            </h1>

                             <div className="text-queen text-base md:text-lg font-light leading-relaxed border-l-2 border-parrot pl-6">
                                {pub.authors.split('Gao, Q.').map((part, i, arr) => (
                                    <React.Fragment key={i}>
                                        {part}
                                        {i < arr.length - 1 && <strong className="text-white font-semibold underline decoration-parrot decoration-2 underline-offset-4">Gao, Q.</strong>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            
                            {/* Left Sidebar: Meta */}
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <Tag size={14} /> Venue
                                    </h4>
                                    <p className="text-slate-800 font-medium leading-relaxed">
                                        {pub.venue}
                                    </p>
                                </div>

                                {pub.doi && (
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <ExternalLink size={14} /> Links
                                        </h4>
                                        <a 
                                            href={`https://doi.org/${pub.doi}`} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-royal font-bold hover:text-rebecca hover:underline decoration-2 underline-offset-2"
                                        >
                                            View DOI <ExternalLink size={14}/>
                                        </a>
                                    </div>
                                )}
                                
                                <div className="p-6 bg-queen/20 rounded-2xl border border-lavender">
                                     <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                                        Cite this paper
                                     </h4>
                                     <code className="block text-xs text-slate-600 bg-white p-3 rounded border border-lavender break-words">
                                         Gao, Q. et al. ({pub.year}). {pub.title}. {pub.venue}.
                                     </code>
                                </div>
                            </div>

                            {/* Main Content: Abstract */}
                            <div className="md:col-span-2">
                                <h3 className="text-2xl font-serif font-bold text-rebecca mb-6 flex items-center gap-3">
                                    <Quote size={24} className="text-tropical fill-tropical/20 rotate-180" />
                                    Abstract
                                </h3>
                                <div className="prose prose-lg prose-slate max-w-none">
                                    <p className="text-slate-600 leading-relaxed">
                                        {pub.abstract || "Abstract not available."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    );
}