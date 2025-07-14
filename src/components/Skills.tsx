import { Code2, Database, Cloud, Wrench, Trophy, Lightbulb, Brain, BarChart } from "lucide-react";
import { HyperText } from "@/components/ui/hyper-text";
import { CertificateModal, CertificateModalTrigger, CertificateModalContent } from "@/components/ui/certificate-modal";
import { CertificateTooltip, CertificateTooltipTrigger, CertificateTooltipContent, CertificateTooltipProvider } from "@/components/ui/certificate-tooltip";
import FloatingTechElements from "@/components/ui/floating-tech-elements";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
      level: 92
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "OpenCV"],
      level: 88
    },
    {
      icon: Database,
      title: "Databases",  
      skills: ["PostgreSQL", "MySQL", "Oracle", "NoSQL", "Data Warehousing"],
      level: 85
    },
    {
      icon: Cloud,
      title: "Cloud & Tools",
      skills: ["Google Cloud", "Git", "GitHub", "VS Code", "Power BI"],
      level: 80
    },
    {
      icon: BarChart,
      title: "Data Analysis",
      skills: ["Tableau", "Excel", "Statistical Analysis", "Data Visualization", "ETL"],
      level: 90
    },
    {
      icon: Wrench,
      title: "Frameworks",
      skills: ["FastAPI", "REST APIs", "Node.js", "React.js", "Next.js"],
      level: 85
    }
  ];

  const achievements = [
    { icon: Trophy, text: "Years Experience", value: "2+" },
    { icon: Code2, text: "Projects Completed", value: "15+" },
    { icon: Lightbulb, text: "Certifications", value: "15+" }
  ];

  const certifications = [
    { 
      name: "Data Scientist Associate", 
      preview: "/certificates/DS.jpg",
      fullImage: "/certificates/DS.jpg" ,
      websiteUrl:"https://www.datacamp.com/certificate/DSA0014535282467",
    },
    { 
      name: "Data Analyst Associate", 
      preview: "/certificates/DA.jpg",
      fullImage: "/certificates/DA.jpg" ,
      websiteUrl:"https://www.datacamp.com/certificate/DAA0011798414358",
    },
    { 
      name: "AI Fundamentals", 
      preview: "/certificates/AI.jpg",
      fullImage: "/certificates/AI.jpg" ,
      websiteUrl:"https://www.datacamp.com/skill-verification/AIF0026296000854",
    },
    { 
      name: "Python for Genomic Data Science", 
      preview: "/certificates/genomic.jpg",
      fullImage: "/certificates/genomic.jpg" ,
      websiteUrl:"https://www.coursera.org/account/accomplishments/verify/9W8WW25RNM2B"
    },
    { 
      name: "Power BI Fundamentals", 
      preview: "/certificates/BI.jpg",
      fullImage: "/certificates/BI.jpg" ,
      websiteUrl:"https://www.datacamp.com/completed/statement-of-accomplishment/track/4c54cf80c5896bb85011c74fd569dfae7178dc56"
    },
    { 
      name: "Tableau Fundamentals", 
      preview: "/certificates/tableau.jpg",
      fullImage: "/certificates/tableau.jpg" ,
      websiteUrl:"https://www.datacamp.com/completed/statement-of-accomplishment/track/29f4bda057e167d9267f8dd5858fca4c809c0cfe",
    }
  ];

  return (
    <CertificateTooltipProvider>
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Enhanced Tech Background Effects */}
        <FloatingTechElements />
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 border-4 border-primary pixel-corners"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-accent pixel-corners"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-card border-3 border-border pixel-corners mb-4 hover-glow">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
            <HyperText
              text="./skills --list"
              className="text-4xl md:text-5xl font-mono font-bold pixel-text"
              duration={1500}
            />
            <div className="w-24 h-1 bg-primary mx-auto pixel-bar mt-4"></div>
          </div>

          {/* Achievement stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-card border-4 border-border pixel-corners p-6 hover:scale-105 transition-transform duration-200">
                <div className="inline-block p-3 bg-primary/10 border-2 border-primary/20 pixel-corners mb-3">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-mono font-bold text-2xl text-primary mb-1">{achievement.value}</div>
                <div className="font-mono text-sm text-muted-foreground">{achievement.text}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card border-4 border-border pixel-corners p-6 hover:scale-105 transition-transform duration-200 group">
                <div className="text-center mb-6">
                  <div className="inline-block p-3 bg-primary/10 border-2 border-primary/20 pixel-corners mb-3 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-mono font-bold text-lg mb-2">{category.title}</h3>
                  <div className="w-full bg-muted h-2 pixel-bar mb-2">
                    <div 
                      className="bg-primary h-full pixel-bar animate-progress" 
                      style={{width: `${category.level}%`}}
                    ></div>
                  </div>
                  <span className="font-mono text-xs text-primary">{category.level}%</span>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="px-3 py-2 bg-muted border border-border pixel-corners text-center hover:bg-accent transition-colors">
                      <span className="font-mono text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Certifications with Hover Effects */}
          <div className="bg-card border-4 border-border pixel-corners p-8 mb-12">
            <div className="text-center mb-6">
              <h3 className="font-mono text-2xl font-bold mb-4">
                <span className="text-primary">// </span>Certifications
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <CertificateModal key={index}>
                  <CertificateTooltip>
                    <CertificateTooltipTrigger asChild>
                      <CertificateModalTrigger asChild>
                        <div className="flex items-center gap-3 p-4 bg-muted border border-border pixel-corners hover:bg-accent hover:scale-105 transition-all duration-300 cursor-pointer group hover-glow">
                          <Trophy className="w-5 h-5 text-primary flex-shrink-0 group-hover:animate-pulse" />
                          <span className="font-mono text-sm group-hover:text-primary transition-colors">{cert.name}</span>
                        </div>
                      </CertificateModalTrigger>
                    </CertificateTooltipTrigger>
                    <CertificateTooltipContent 
                      certificateName={cert.name}
                      certificatePreview={cert.preview}
                    />
                  </CertificateTooltip>
                  <CertificateModalContent 
                    certificateName={cert.name}
                    certificateImage={cert.fullImage}
                    websiteUrl={cert.websiteUrl}
                  />
                </CertificateModal>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-card border-4 border-border pixel-corners p-6 hover-glow">
              <div className="font-mono text-sm text-muted-foreground mb-2">
                {"// Always learning new technologies"}
              </div>
              <div className="font-mono text-primary mb-2">
                while (alive) {"{ learn(); code(); analyze(); }"}
              </div>
              <div className="font-mono text-xs text-gray-900">
                {"// Powered by curiosity and data 📊"}
              </div>
            </div>
          </div>
        </div>
      </section>
    </CertificateTooltipProvider>
  );
};

export default Skills;