
import React from 'react';

interface SyntaxHighlightProps {
  children: React.ReactNode;
  className?: string;
}

const SyntaxHighlight: React.FC<SyntaxHighlightProps> = ({ children, className = "" }) => {
  return (
    <div className={`font-mono leading-relaxed bg-card/90 backdrop-blur-sm border-2 border-border pixel-corners overflow-hidden ${className}`}>
      <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full pixel-square"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full pixel-square"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full pixel-square"></div>
        </div>
        <span className="font-mono text-xs text-muted-foreground ml-2">developer.py</span>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default SyntaxHighlight;
