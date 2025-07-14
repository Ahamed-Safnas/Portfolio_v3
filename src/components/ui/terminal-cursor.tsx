
import React from 'react';

interface TerminalCursorProps {
  className?: string;
}

const TerminalCursor: React.FC<TerminalCursorProps> = ({ className = "" }) => {
  return (
    <span className={`inline-block w-2 h-4 bg-primary animate-pulse ml-1 ${className}`}
          style={{ animationDuration: '1s' }}>
    </span>
  );
};

export default TerminalCursor;
