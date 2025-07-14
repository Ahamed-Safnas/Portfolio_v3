
import React from 'react';

const Logo = () => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="relative cursor-pointer hover:scale-110 transition-all duration-300 p-3 border-2 border-border bg-card/80 backdrop-blur-sm pixel-corners hover-glow">
        <div className="font-bold text-primary relative" style={{ fontFamily: 'Space Mono, monospace' }}>
          <span className="relative text-4xl hover:text-accent transition-colors duration-300">
            A
            <span className="absolute -top-1 -right-3 text-3xl text-primary hover:text-accent transition-colors duration-300 font-black">
              S
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
