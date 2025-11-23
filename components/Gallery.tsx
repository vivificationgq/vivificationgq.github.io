import React from 'react';
import { Camera, Music, Plane, BookOpen } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden" id="gallery">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
         <div className="absolute top-10 right-10 w-96 h-96 bg-tropical rounded-full blur-[100px]"></div>
         <div className="absolute bottom-10 left-10 w-96 h-96 bg-parrot rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-serif font-bold mb-4 text-rebecca">Life Outside Lab</h2>
            <div className="w-20 h-1 bg-royal mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
                "Research is my passion, but exploring the world fuels my creativity."
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">
            {/* Large Item */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-lavender reveal">
                <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" alt="Travel" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-rebecca/90 via-transparent to-transparent flex flex-col justify-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 text-parrot mb-2">
                            <Plane size={20} />
                            <span className="font-bold uppercase tracking-wider text-sm">Travel</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white">Global Exploration</h3>
                        <p className="text-queen text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">From Hokkaido to Genoa, experiencing different cultures shapes my perspective on human interaction.</p>
                    </div>
                </div>
            </div>

            {/* Small Items */}
            <div className="relative group overflow-hidden rounded-2xl bg-lavender aspect-square md:aspect-auto reveal">
                <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80" alt="Photography" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-rebecca/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white">
                        <Camera className="mx-auto mb-2 text-tropical" />
                        <span className="font-bold">Photography</span>
                    </div>
                </div>
            </div>

             <div className="relative group overflow-hidden rounded-2xl bg-lavender aspect-square md:aspect-auto reveal">
                <img src="https://images.unsplash.com/photo-1459749411177-0473ef716070?auto=format&fit=crop&w=600&q=80" alt="Music" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"/>
                 <div className="absolute inset-0 bg-rebecca/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white">
                        <Music className="mx-auto mb-2 text-parrot" />
                        <span className="font-bold">Music & Arts</span>
                    </div>
                </div>
            </div>

             {/* Wide Item Bottom Right */}
             <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-lavender md:h-full h-64 reveal">
                <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80" alt="Reading" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-rebecca/90 via-transparent to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 text-tropical mb-1">
                        <BookOpen size={18} />
                        <span className="font-bold uppercase tracking-wider text-xs">Reading</span>
                    </div>
                    <p className="text-white font-medium">Continuous Learning</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};