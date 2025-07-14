import { Code, Terminal, Zap, Github, Linkedin, Mail, Download, Star, FileCode, Database, Cpu, BrainCircuit } from "lucide-react";
import { HyperText } from "@/components/ui/hyper-text";
import { WordRotate } from "@/components/ui/word-rotate";
import CircularText from "@/components/ui/circular-text";
import WavingHand from "@/components/ui/waving-hand";
import FloatingTechElements from "@/components/ui/floating-tech-elements";
import TerminalCursor from "@/components/ui/terminal-cursor";
import SyntaxHighlight from "@/components/ui/syntax-highlight";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/20 pt-20 lg:pt-8">
      {/* Enhanced animated background elements with tech vibes */}
      <div className="absolute inset-0">
        <FloatingTechElements />
        
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary/20 pixel-square animate-float"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-accent/30 pixel-square animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-secondary/40 pixel-square animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-primary/15 pixel-square animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary/25 pixel-square animate-float transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-32 right-1/4 w-3 h-3 bg-accent/20 pixel-square animate-float-delayed"></div>
        
        <div className="absolute top-16 right-16 w-2 h-2 bg-green-400/30 pixel-square animate-float">
          <Code className="w-full h-full text-green-400/50" />
        </div>
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-blue-400/20 pixel-square animate-float-delayed">
          <Database className="w-full h-full text-blue-400/50" />
        </div>
        <div className="absolute top-1/3 right-1/2 w-2 h-2 bg-purple-400/30 pixel-square animate-float">
          <Cpu className="w-full h-full text-purple-400/50" />
        </div>
        
        {/* Enhanced matrix-style grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 dark:opacity-15">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, transparent 1px, transparent 15px),
                              repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 1px, transparent 15px),
                              repeating-linear-gradient(45deg, hsl(var(--accent)) 0px, transparent 1px, transparent 30px)`
          }}></div>
        </div>

        {/* Digital rain effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float font-mono text-green-400 text-xs whitespace-nowrap"
              style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '12s'
              }}
            >
              {`${Math.random().toString(2).substr(2, 8)} ${Math.random().toString(2).substr(2, 8)}`}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10 h-full flex items-center">
        {/* Main content with proper spacing from navbar */}
        <div className="w-full md:ml-20 px-4 py-8 min-h-screen flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
            {/* Right side - Profile image (now order-1 on mobile, order-2 on lg+) */}
            <div className="flex flex-col items-center justify-center space-y-4 order-1 lg:order-2">
              {/* Profile image with circular text border - increased size */}
              <div className="relative">
                <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                  {/* Circular text animation as border */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CircularText
                      text="PYTHON*DEVELOPER*DATA*SCIENTIST*ML*ENGINEER*"
                      spinDuration={30}
                      onHover="speedUp"
                      className="w-full h-full text-primary/80 text-xs md:text-sm"
                    />
                  </div>
                  {/* Profile image - increased padding for larger image */}
                  <div className="absolute inset-8 md:inset-10 lg:inset-12 rounded-full overflow-hidden border-2 border-primary/20 hover-glow">
                    <img
                      src="/me.png"
                      loading="lazy"
                      alt="Ahamed Safnas - Python Developer & Data Scientist"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating achievement badges */}
                  <div className="absolute -top-1 -right-1 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                    <Star className="w-2 h-2 inline mr-1" />
                    Available
                  </div>
                  {/* Additional floating programming icons */}
                  <div className="absolute -bottom-2 -left-2 bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
                    <FileCode className="w-2 h-2 inline mr-1" />
                    Python
                  </div>
                </div>
              </div>

              {/* Enhanced Social links and stats with glow effects */}
              <div className="flex flex-col items-center gap-3">
                {/* Social links with enhanced hover effects */}
                <div className="flex gap-3">
                  <a href="https://github.com/Ahamed-Safnas" className="p-3 bg-card/80 border border-border pixel-corners hover:bg-accent hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-125 backdrop-blur-sm group">
                    <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/ahamed-safnas-8a968723b" className="p-3 bg-card/80 border border-border pixel-corners hover:bg-accent hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-125 backdrop-blur-sm group">
                    <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a href="mailto:safnas2042ahmed@gmail.com" className="p-3 bg-card/80 border border-border pixel-corners hover:bg-accent hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-125 backdrop-blur-sm group">
                    <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>

                {/* Enhanced Quick stats with glow effects */}
                <div className="flex gap-6 text-sm font-mono text-muted-foreground">
                  <div className="text-center p-3 bg-card/60 border border-border pixel-corners hover:bg-accent hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-110 transition-all duration-300 cursor-pointer group">
                    <div className="text-2xl font-bold text-primary group-hover:text-accent-foreground transition-colors">15+</div>
                    <div className="text-foreground group-hover:text-accent-foreground transition-colors">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-card/60 border border-border pixel-corners hover:bg-accent hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-110 transition-all duration-300 cursor-pointer group">
                    <div className="text-2xl font-bold text-primary group-hover:text-accent-foreground transition-colors">2+</div>
                    <div className="text-foreground group-hover:text-accent-foreground transition-colors">Years Exp</div>
                  </div>
                  <div className="text-center p-3 bg-card/60 border border-border pixel-corners hover:bg-accent hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-110 transition-all duration-300 cursor-pointer group">
                    <div className="text-2xl font-bold text-primary group-hover:text-accent-foreground transition-colors">∞</div>
                    <div className="text-foreground group-hover:text-accent-foreground transition-colors">Coffee Cups</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left side - Main content (now order-2 on mobile, order-1 on lg+) */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-6 order-2 lg:order-1">
              <div className="text-left">
                <div className="inline-block p-2 bg-card border-2 border-border pixel-corners mb-3 hover-glow">
                  <Terminal className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto animate-pulse" />
                </div>
                <div className="mb-2">
                  <HyperText
                    text="<Ahamed Safnas />"
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono font-bold text-foreground pixel-text"
                    duration={1000}
                  />
                </div>

                {/* Introduction with waving hand and rotating roles */}
                <div className="text-base md:text-lg lg:text-xl font-mono mb-3">
                  <span className="text-foreground">Hi</span>
                  <WavingHand />
                  <span className="text-foreground">, I'm </span>
                  <WordRotate
                    words={["ML Engineer", "Data Scientist", "Python Developer"]}
                    duration={3000}
                    className="text-primary font-bold inline-block"
                    framerProps={{
                      initial: { opacity: 0, y: -20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 20 },
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                  />
                </div>
                
                {/* Enhanced code block with syntax highlighting */}
                <SyntaxHighlight className="mb-4">
                  <div>
                    <span className="text-blue-500 dark:text-blue-400">const</span>{" "}
                    <span className="text-foreground">developer</span>{" "}
                    <span className="text-yellow-600 dark:text-yellow-400">=</span>{" "}
                    <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
                    <br />
                    <span className="ml-4 text-red-500 dark:text-red-400">edu:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">"BE.Computer Engineer"</span>,
                    <br />
                    <span className="ml-4 text-red-500 dark:text-red-400">passion:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">"Building ML Solutions"</span>,
                    <br />
                    <span className="ml-4 text-red-500 dark:text-red-400">status:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">"Open to Work"</span>
                    <TerminalCursor />
                    <br />
                    <span className="text-gray-600 dark:text-gray-400">{"}"}</span>;
                    <br />
                    <br />
                    <span className="text-purple-500 dark:text-purple-400">// Specialized in:</span>
                    <br />
                    <span className="text-gray-500 dark:text-gray-400">// Machine Learning • Data Analysis • Python • AI</span>
                  </div>
                </SyntaxHighlight>

                {/* Enhanced skills badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-1 px-2 py-1 bg-card/80 border border-border pixel-corners hover:scale-105 transition-transform duration-200 backdrop-blur-sm">
                    <Code className="w-3 h-3 text-blue-500" />
                    <span className="font-mono text-xs text-foreground">Python</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-card/80 border border-border pixel-corners hover:scale-105 transition-transform duration-200 backdrop-blur-sm">
                    <BrainCircuit className="w-3 h-3 text-green-500" />
                    <span className="font-mono text-xs text-foreground">Data Science</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-card/80 border border-border pixel-corners hover:scale-105 transition-transform duration-200 backdrop-blur-sm">
                    <Zap className="w-3 h-3 text-yellow-500" />
                    <span className="font-mono text-xs text-foreground">Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-card/80 border border-border pixel-corners hover:scale-105 transition-transform duration-200 backdrop-blur-sm">
                    <Database className="w-3 h-3 text-purple-500" />
                    <span className="font-mono text-xs text-foreground">Analytics</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                  <a
                    href="#about"
                    className="px-3 py-2 md:px-4 bg-primary text-primary-foreground font-mono font-bold text-xs md:text-sm border-2 border-primary hover:bg-primary/90 transition-all duration-200 pixel-corners hover:scale-105 hover-glow flex items-center justify-center"
                  >
                    ./explore-portfolio
                  </a>
                  <a
                    href="/[CV]Ahamed_Safnas.pdf"
                    download
                    className="px-3 py-2 md:px-4 bg-transparent text-primary font-mono font-bold text-xs md:text-sm border-2 border-primary hover:bg-primary/10 transition-all duration-200 pixel-corners hover:scale-105 flex items-center justify-center gap-1"
                  >
                    <Download className="w-3 h-3" />
                    ./download-cv
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator with glitch effect */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-4 h-6 border border-primary pixel-corners flex justify-center hover-glow">
            <div className="w-1 h-2 bg-primary pixel-bar mt-1 animate-pulse"></div>
          </div>
          <div className="font-mono text-xs text-center mt-1 text-muted-foreground">
            scroll
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
