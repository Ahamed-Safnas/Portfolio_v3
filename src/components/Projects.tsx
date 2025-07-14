import { ExternalLink, Github, Folder, Star, GitBranch, Eye, TrendingUp, Database, Brain } from "lucide-react";
import { HyperText } from "@/components/ui/hyper-text";

const Projects = () => {
  const projects = [
    {
      title: "House Price Prediction",
      description: "ML model using Python to predict housing prices. Preprocessed data, handled missing values, and built Random Forest Regressor outperforming linear baseline. Evaluated using MSE, RMSE, and R2 metrics.",
      tech: ["Python", "Scikit-learn", "Pandas", "Random Forest", "Data Preprocessing"],
      github: "https://github.com/Ahamed-Safnas/DataCamp-House_price_prediction",
      
      featured: true,
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format",
      imageAlt: "Modern house with clean architecture representing real estate prediction"
    },
    {
      title: "Loan Approval Prediction", 
      description: "Conducted EDA on 600+ loan applications revealing key approval trends. Built ML models (Logistic Regression, Decision Tree, Random Forest) achieving 86.18% accuracy with user-friendly prediction tool.",
      tech: ["Python", "FastAPI", "Machine Learning", "EDA", "Model Deployment"],
      github: "https://github.com/najmanmna/loan-predict",
      
      featured: true,
      icon: Database,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format",
      imageAlt: "Banking and financial documents representing loan approval system"
    },
    {
      title: "Customer Churn Analysis",
      description: "Processed customer usage data using Tableau and Excel, created dynamic dashboards. Identified key churn factors and provided actionable insights to improve customer retention.",
      tech: ["Tableau", "Excel", "Data Analysis", "Dashboard", "Customer Analytics"],
      github: "https://public.tableau.com/app/profile/ahamed.safnas/viz/Book-1_16960713820060/ChurnAnalysisofDatabelCompany",
      
      featured: true,
      icon: Brain,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
      imageAlt: "Data analytics dashboard with charts and graphs representing customer analysis"
    },
    {
      title: "HR Analytics Dashboard",
      description: "Built comprehensive HR analytics dashboard using Power BI. Cleaned and preprocessed HR datasets, created visualizations to track performance, satisfaction, and turnover metrics.",
      tech: ["Power BI", "Data Cleaning", "HR Analytics", "Visualization", "KPIs"],
      github: "https://github.com/Ahamed-Safnas/HR-Analytics-Dashboard",
      
      featured: false,
      icon: TrendingUp,
      image: "/hr_analytics.png",
      imageAlt: "Professional team meeting representing HR analytics and management"
    },
    {
      title: "Portfolio Website v2",
      description: "My portfolio is built with Next.js and React for speed, styled with Tailwind CSS, and has smooth animations powered by Framer Motion. It’s hosted on Vercel for top performance, giving my work a clean, modern look",
      tech: ["Javascript", "Typescript", "Next.js", "Three.js", "Tailwind CSS","npm"],
      github: "https://github.com/Ahamed-Safnas/Portfolio_2.0",
      
      featured: false,
      icon: Database,
      image: "/p_v2.png",
      imageAlt: "Computer vision and text recognition technology setup"
    }
    // ,
    // {
    //   title: "Data Science Portfolio",
    //   description: "Comprehensive portfolio showcasing various data science projects, machine learning models, and data analysis techniques with interactive visualizations.",
    //   tech: ["Python", "Jupyter", "Streamlit", "Plotly", "Data Viz"],
    //   github: "#",
      
    //   featured: false,
    //   icon: Brain,
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    //   imageAlt: "Data science workspace with multiple screens showing code and visualizations"
    // }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-32 w-20 h-20 border-4 border-primary pixel-corners rotate-45"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border-2 border-accent pixel-corners"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-card border-3 border-border pixel-corners mb-4 hover-glow">
            <Folder className="w-8 h-8 text-primary" />
          </div>
          <HyperText
            text="./projects"
            className="text-4xl md:text-5xl font-mono font-bold pixel-text"
            duration={1200}
          />
          <div className="w-24 h-1 bg-primary mx-auto pixel-bar mt-4"></div>
        </div>

        {/* Featured Projects - Fixed responsive icon sizing */}
        <div className="mb-16">
          <h3 className="font-mono text-2xl font-bold mb-8 text-center">
            <span className="text-primary">// </span>Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-card border-4 border-border pixel-corners overflow-hidden hover:scale-105 transition-all duration-200 group relative">
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 pixel-corners font-mono text-xs z-10">
                  FEATURED
                </div>
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4 gap-2">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div className="flex-shrink-0">
                        <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <HyperText
                        text={project.title}
                        className="font-mono font-bold text-base sm:text-lg group-hover:text-primary transition-colors min-w-0 truncate"
                        duration={600}
                        animateOnLoad={false}
                      />
                    </div>
                    <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                      <a 
                        href={project.github}
                        className="p-1.5 sm:p-2 bg-muted border border-border pixel-corners hover:bg-accent transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                      {/* <a 
                        href={project.demo}
                        className="p-1.5 sm:p-2 bg-muted border border-border pixel-corners hover:bg-accent transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a> */}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 border border-primary/20 pixel-corners font-mono text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-muted border border-border pixel-corners font-mono text-xs text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects - Also fixed responsive icon sizing */}
        <div>
          <h3 className="font-mono text-2xl font-bold mb-8 text-center">
            <span className="text-accent">// </span>More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-card border-4 border-border pixel-corners overflow-hidden hover:scale-105 transition-all duration-200 group">
                {/* Project Image */}
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4 gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="flex-shrink-0">
                        <project.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <h4 className="font-mono font-bold text-base sm:text-lg group-hover:text-primary transition-colors min-w-0 truncate">
                        {project.title}
                      </h4>
                    </div>
                    <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                      <a 
                        href={project.github}
                        className="p-1.5 sm:p-2 bg-muted border border-border pixel-corners hover:bg-accent transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="w-3 h-3" />
                      </a>
                      {/* <a 
                        href={project.demo}
                        className="p-1.5 sm:p-2 bg-muted border border-border pixel-corners hover:bg-accent transition-colors"
                        aria-label="View live demo"
                      >
                        <Eye className="w-3 h-3" />
                      </a> */}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 border border-primary/20 pixel-corners font-mono text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-muted border border-border pixel-corners font-mono text-xs text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Ahamed-Safnas" 
            className="inline-block px-8 py-4 bg-card border-4 border-border pixel-corners font-mono font-bold hover:bg-accent transition-all duration-200 hover:scale-105 hover-glow"
          >
            View All Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;