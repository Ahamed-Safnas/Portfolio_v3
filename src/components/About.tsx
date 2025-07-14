import { User, Brain, Database, Code } from "lucide-react";
import SyntaxHighlight from "@/components/ui/syntax-highlight";
import TerminalCursor from "@/components/ui/terminal-cursor";

const About = () => {
  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary rotate-45 pixel-corners"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-accent pixel-corners"></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-primary pixel-square animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent pixel-square animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-card border-3 border-border pixel-corners mb-4 hover-glow">
            <User className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 pixel-text">
            ./about
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto pixel-bar"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Code Representation */}
          <div className="space-y-8">
            <SyntaxHighlight>
              <div className="text-sm">
                <div className="text-blue-600 mb-2">
                  <span className="text-purple-600">class</span>{" "}
                  <span className="text-yellow-600">Ahamed_Safnas</span>:
                </div>
                <div className="ml-4 space-y-1">
                  <div>
                    <span className="text-purple-600">def</span>{" "}
                    <span className="text-blue-600">__init__</span>(self):
                  </div>
                  <div className="ml-4 space-y-1 rgb(0, 102, 204)">
                    <div>self.education = <span className="text-green-400">"BE Computer Engineering"</span></div>
                    <div>self.university = <span className="text-green-400">"NED University"</span></div>
                    <div>self.graduation = <span className="text-green-400">"2024"</span></div>
                    <div>self.location = <span className="text-green-400">"Karachi, Pakistan"</span></div>
                  </div>
                  <div className="mt-3">
                    <span className="text-purple-600">def</span>{" "}
                    <span className="text-blue-600">get_journey</span>(self):
                  </div>
                  <div className="ml-4 text-gray-600">
                    <span className="text-purple-600">return</span> {"{"}
                    <div className="ml-4">
                      <span className="text-green-400">"started"</span>: <span className="text-green-400">"2022 as Python Developer"</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-green-400">"evolved"</span>: <span className="text-green-400">"Into Data Science & ML"</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-green-400">"focus"</span>: <span className="text-green-400">"Building Smart Solutions"</span>
                    </div>
                    {"}"}
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-gray-600"># Ready to build the future</span>
                  <TerminalCursor />
                </div>
              </div>
            </SyntaxHighlight>
          </div>

          {/* Right Column - My Journey & Current Focus */}
          <div className="space-y-8">
            <div className="bg-card border-4 border-gray-800 pixel-corners p-6">
              <h4 className="font-mono font-bold text-lg mb-4 text-primary">
                // My Journey
              </h4>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I began my tech journey at NED University, where a curiosity for Python grew into a passion for data science and machine learning. 
                  With over 2 years of experience, I’ve built end-to-end ML solutions—handling everything from data preprocessing to deployment. 
                  I'm currently focused on MLOps, deep learning, and scalable data pipelines, and always open to collaborating on impactful, data-driven projects
                </p>
              </div>
            </div>

            <div className="bg-card border-4 border-gray-800 pixel-corners p-6">
              <h4 className="font-mono font-bold text-lg mb-4 text-primary">
                // Current Focus
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-gray-900" />
                  <span>Advanced Machine Learning Techniques</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-gray-900" />
                  <span>Big Data Processing & Analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-gray-900" />
                  <span>MLOps & Model Deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-gray-900" />
                  <span>Exploring the development of AI agents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
