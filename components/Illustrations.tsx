import React from 'react';

// Reusable filter for that "paper texture" artistic look
export const PaperTextureFilter = () => (
  <svg width="0" height="0" className="absolute">
    <filter id="paperNoise">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
      <feBlend in="SourceGraphic" mode="multiply" />
    </filter>
  </svg>
);

// 1. NeuroFlow: Abstract Brain Waves / Cognitive Science
export const NeuroFlow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#paperNoise)">
      {/* Organic blobs representing brain activity */}
      <path d="M45.7,-76.4C58.9,-69.3,69.1,-58.1,77.1,-45.8C85.1,-33.5,90.9,-20.1,90.1,-7.1C89.4,5.9,82.1,18.5,73.6,29.8C65.1,41.1,55.4,51.1,44.5,58.9C33.6,66.7,21.5,72.3,8.9,74.1C-3.7,75.9,-16.8,73.9,-29.5,68.7C-42.2,63.5,-54.5,55.1,-63.9,44.1C-73.3,33.1,-79.8,19.5,-81.2,5.3C-82.6,-8.9,-78.9,-23.7,-70.8,-35.8C-62.7,-47.9,-50.2,-57.3,-37.6,-64.6C-25,-71.9,-12.5,-77.1,1.5,-79.4C15.5,-81.7,31,-81.1,45.7,-76.4Z" 
        transform="translate(100 100)" 
        fill="#E0BAC9" 
        className="opacity-60 animate-flow" 
      />
      <path d="M38.6,-63.3C49.8,-55.7,58.7,-45.5,65.6,-34.1C72.5,-22.7,77.4,-10.1,76.5,2.1C75.6,14.3,68.9,26.1,59.9,35.9C50.9,45.7,39.6,53.5,27.7,58.5C15.8,63.5,3.3,65.7,-8.6,64.8C-20.5,63.9,-31.8,59.9,-42.2,53.3C-52.6,46.7,-62.1,37.5,-67.8,26.3C-73.5,15.1,-75.4,1.9,-72.6,-10.1C-69.8,-22.1,-62.3,-32.9,-52.7,-41.3C-43.1,-49.7,-31.4,-55.7,-19.6,-58.3C-7.8,-60.9,4.1,-60.1,15.5,-59.4" 
        transform="translate(100 100) scale(0.9)" 
        fill="#C5A7E0" 
        className="opacity-50 animate-flow" 
        style={{ animationDelay: '1s' }}
      />
      <path d="M26.4,-43.5C34.1,-37.1,40.4,-29.3,44.9,-20.6C49.4,-11.9,52.1,-2.3,51.2,7.1C50.3,16.5,45.8,25.7,39.2,33.5C32.6,41.3,23.9,47.7,14.3,50.9C4.7,54.1,-5.8,54.1,-15.6,51.5C-25.4,48.9,-34.5,43.7,-41.6,36.2C-48.7,28.7,-53.8,18.9,-54.8,8.7C-55.8,-1.5,-52.7,-12.1,-47,-21.2C-41.3,-30.3,-33,-37.9,-23.9,-43.2C-14.8,-48.5,-4.9,-51.5,3.2,-50.8" 
        transform="translate(100 100) scale(0.8)" 
        fill="#875DAF" 
        className="opacity-40 animate-flow" 
        style={{ animationDelay: '2s' }}
      />
    </g>
  </svg>
);

// 2. CyberLidar: Abstract Autonomous Vehicle Sensing / Radar
export const CyberLidar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#paperNoise)" className="origin-center animate-spin-slower">
      {/* Outer Ring */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="#D794AF" strokeWidth="1" strokeDasharray="10 10" className="opacity-40" />
      
      {/* Scanning Arc */}
      <path d="M100,100 L100,10 A90,90 0 0,1 190,100 Z" fill="#C5A7E0" className="opacity-20" />
      
      {/* Middle Ring */}
      <circle cx="100" cy="100" r="60" fill="none" stroke="#875DAF" strokeWidth="2" className="opacity-30" />
      
      {/* Inner Elements (Car/Core) */}
      <circle cx="100" cy="100" r="20" fill="#633C94" className="opacity-80" />
      
      {/* Rays */}
      <line x1="100" y1="100" x2="160" y2="40" stroke="#E0BAC9" strokeWidth="2" className="opacity-50" />
      <line x1="100" y1="100" x2="40" y2="160" stroke="#E0BAC9" strokeWidth="2" className="opacity-50" />
    </g>
  </svg>
);

// 3. RoboConnect: Abstract Nodes for iCub/HRI Teaming
export const RoboConnect = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#paperNoise)">
      {/* Connections */}
      <path d="M30,170 Q100,100 170,30" fill="none" stroke="#875DAF" strokeWidth="2" className="animate-pulse opacity-40" />
      <path d="M30,30 Q100,100 170,170" fill="none" stroke="#D794AF" strokeWidth="2" className="animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
      
      {/* Nodes */}
      <circle cx="30" cy="170" r="10" fill="#633C94" className="animate-float" />
      <circle cx="170" cy="30" r="15" fill="#E0D0DC" stroke="#633C94" strokeWidth="3" className="animate-float-delayed" />
      <circle cx="30" cy="30" r="8" fill="#C5A7E0" className="animate-float" style={{ animationDelay: '1.5s' }} />
      <circle cx="170" cy="170" r="12" fill="#D794AF" className="animate-float-delayed" style={{ animationDelay: '0.5s' }} />
      
      {/* Central Hub */}
      <rect x="85" y="85" width="30" height="30" rx="8" fill="none" stroke="#875DAF" strokeWidth="2" className="animate-spin-reverse origin-center" />
    </g>
  </svg>
);
