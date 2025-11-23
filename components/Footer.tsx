import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-rebecca text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-queen">{PERSONAL_INFO.name}</h3>
            <p className="text-queen/70 text-sm leading-relaxed max-w-xs">
              {PERSONAL_INFO.currentRole}<br/>
              Focusing on the intersection of human cognition and artificial intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-parrot">Connect</h4>
            <div className="space-y-3">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 text-queen/80 hover:text-white transition-colors text-sm">
                <Mail size={16} /> {PERSONAL_INFO.email}
              </a>
              <div className="flex items-center gap-2 text-queen/80 text-sm">
                <MapPin size={16} /> {PERSONAL_INFO.location}
              </div>
            </div>
          </div>

          <div>
             <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-parrot">Social</h4>
             <div className="flex gap-4">
                <a href={PERSONAL_INFO.linkedin} className="w-10 h-10 rounded-full bg-royal flex items-center justify-center hover:bg-parrot transition-colors">
                    <Linkedin size={20} />
                </a>
                <a href={PERSONAL_INFO.scholar} className="w-10 h-10 rounded-full bg-royal flex items-center justify-center hover:bg-parrot transition-colors">
                   <span className="font-serif font-bold text-lg">Gs</span>
                </a>
                {/* GitHub link placeholder since user asked for github.io hosting */}
                <a href="#" className="w-10 h-10 rounded-full bg-royal flex items-center justify-center hover:bg-parrot transition-colors">
                    <Github size={20} />
                </a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-royal/50 mt-12 pt-8 text-center text-xs text-queen/60">
          <p>&copy; {new Date().getFullYear()} Qi Gao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};