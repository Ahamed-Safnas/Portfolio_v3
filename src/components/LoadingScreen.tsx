
import { useState, useEffect } from "react";
import { Terminal, Code, BrainCircuit, Database } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showSystemReady, setShowSystemReady] = useState(false);

  const loadingSteps = [
    { text: "Initializing AI portfolio system...", icon: Terminal },
    { text: "Loading ML algorithms & data pipelines...", icon: BrainCircuit },
    { text: "Compiling Python modules & databases...", icon: Database },
    { text: "System ready! Launching experience...", icon: Code }
  ];

  useEffect(() => {
    // Progress animation
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setShowSystemReady(true);
          setTimeout(onLoadingComplete, 1200);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  useEffect(() => {
    // Step progression
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => Math.min(prev + 1, loadingSteps.length - 1));
    }, 1500);

    return () => clearInterval(stepTimer);
  }, []);

  const currentLoadingStep = loadingSteps[currentStep];
  const CurrentIcon = currentLoadingStep.icon;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-muted/20 to-accent/10 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, transparent 1px, transparent 30px),
            repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 1px, transparent 30px)
          `
        }}></div>
      </div>

      {/* Floating data particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float font-mono text-primary/20 text-xs"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '8s'
            }}
          >
            {`{ ML_${Math.random().toString(16).substr(2, 4).toUpperCase()} }`}
          </div>
        ))}
      </div>

      {/* Main loading container */}
      <div className="text-center relative z-10 max-w-lg mx-auto px-6">
        {/* Terminal header */}
        <div className="bg-card/95 backdrop-blur-md border-4 border-primary pixel-corners p-8 mb-6 hover-glow shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <Terminal className="w-10 h-10 text-primary animate-pulse mr-3" />
            <div className="font-mono text-2xl font-bold pixel-text text-primary">
              PORTFOLIO.SYS
            </div>
          </div>

          {/* Current loading step */}
          <div className="flex items-center justify-center mb-6">
            <CurrentIcon className="w-8 h-8 text-primary animate-spin mr-3" />
            <span className="font-mono text-lg font-semibold animate-pulse">
              {currentLoadingStep.text}
            </span>
          </div>

          {/* Two-segment progress bar */}
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-sm font-bold">LOADING</span>
              <span className="font-mono text-lg text-primary font-bold">{Math.round(progress)}%</span>
            </div>
            
            {/* Main progress bar with two segments */}
            <div className="relative w-full bg-muted/40 h-4 pixel-bar overflow-hidden">
              {/* First segment (0-50%) */}
              <div 
                className="absolute left-0 top-0 bg-gradient-to-r from-primary to-accent h-full pixel-bar transition-all duration-300"
                style={{ 
                  width: `${Math.min(progress * 2, 100)}%`,
                  boxShadow: progress > 25 ? `0 0 15px hsl(var(--primary) / 0.6)` : 'none'
                }}
              />
              {/* Second segment (50-100%) */}
              {progress > 50 && (
                <div 
                  className="absolute left-1/2 top-0 bg-gradient-to-r from-accent to-primary h-full pixel-bar transition-all duration-300"
                  style={{ 
                    width: `${Math.min((progress - 50) * 2, 100)}%`,
                    boxShadow: progress > 75 ? `0 0 20px hsl(var(--accent) / 0.8)` : 'none'
                  }}
                />
              )}
              {/* Animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>

            {/* Two status indicators */}
            <div className="flex justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 pixel-square ${progress > 25 ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                <span>AI CORE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 pixel-square ${progress > 75 ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                <span>UI MATRIX</span>
              </div>
            </div>
          </div>
        </div>

        {/* System ready notification */}
        {showSystemReady && (
          <div className="animate-scale-in">
            <div className="inline-block p-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-2 border-primary pixel-corners hover-glow">
              <p className="font-mono text-primary font-bold text-lg animate-pulse">
                🚀 SYSTEM ONLINE
              </p>
              <p className="font-mono text-sm text-muted-foreground mt-1">
                Welcome to Ahamed's Digital Universe
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
