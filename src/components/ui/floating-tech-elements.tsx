import React from 'react';
import { Code, Terminal, Database, Cpu, Braces, Hash } from 'lucide-react';

const FloatingTechElements = () => {
  const techElements = [
    { icon: Code, position: 'top-20 left-10', delay: '0s', text: 'def analyze_data():' },
    { icon: Terminal, position: 'top-40 right-20', delay: '1s', text: '$ python main.py' },
    { icon: Database, position: 'bottom-32 left-1/4', delay: '2s', text: 'SELECT * FROM users' },
    { icon: Cpu, position: 'bottom-20 right-1/3', delay: '0.5s', text: 'import pandas as pd' },
    { icon: Braces, position: 'top-1/2 left-1/2', delay: '1.5s', text: '{ "status": "ready" }' },
    { icon: Hash, position: 'top-32 right-1/4', delay: '2.5s', text: 'console.log("Hello");' },
  ];

  const binaryStrings = [
    '01001000 01100101 01101100 01101100 01101111',
    '01001101 01001100 00100000 01000101 01101110 01100111',
    '01000100 01100001 01110100 01100001 00100000 01010011 01100011 01101001',
    '01010000 01111001 01110100 01101000 01101111 01101110',
  ];

  return (
    <>
      {/* Floating Code Snippets */}
      {techElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} opacity-20 hover:opacity-40 transition-opacity duration-300 animate-float-delayed pointer-events-none hidden md:block`}
          style={{ animationDelay: element.delay }}
        >
          <div className="bg-card/60 backdrop-blur-sm border border-primary/30 pixel-corners p-2 hover-glow">
            <div className="flex items-center gap-2 font-mono text-xs text-primary">
              <element.icon className="w-3 h-3" />
              <span>{element.text}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {binaryStrings.map((binary, index) => (
          <div
            key={index}
            className="absolute animate-float font-mono text-xs text-green-400 whitespace-nowrap"
            style={{
              left: `${20 + index * 25}%`,
              top: `${10 + index * 20}%`,
              animationDelay: `${index * 0.8}s`,
              animationDuration: '8s'
            }}
          >
            {binary}
          </div>
        ))}
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50h100M50 0v100" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              <circle cx="25" cy="25" r="2" fill="currentColor" className="text-accent"/>
              <circle cx="75" cy="75" r="2" fill="currentColor" className="text-primary"/>
              <rect x="45" y="45" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Data Stream Effect */}
      <div className="absolute right-4 top-1/4 opacity-20 pointer-events-none hidden lg:block">
        <div className="flex flex-col gap-1 animate-pulse">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary pixel-square animate-pulse"
              style={{
                height: Math.random() * 20 + 5 + 'px',
                animationDelay: `${i * 0.1}s`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
        </div>
      </div>

      {/* Glitch Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" 
             style={{ animationDuration: '3s' }}/>
      </div>
    </>
  );
};

export default FloatingTechElements;
