
import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code2, Folder, Mail, ChevronRight } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isHeroSection, setIsHeroSection] = useState(true);

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      // Check if we're in hero section
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsHeroSection(scrollPosition < heroBottom - 200);
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Show full navbar in hero section
  if (isHeroSection) {
    return (
      <>
        {/* Desktop Navigation - Left side vertical dock in hero */}
        <div className="hidden md:block fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col gap-3 bg-card/90 backdrop-blur-md border-2 border-border pixel-corners p-3 shadow-lg hover-glow">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-3 transition-all duration-200 hover:scale-110 pixel-corners ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground shadow-lg hover-glow'
                    : 'bg-background hover:bg-accent text-foreground border border-border'
                }`}
                title={item.label}
              >
                <item.icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation - Top hamburger in hero */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 right-4 z-50 p-3 bg-card/90 backdrop-blur-sm border-2 border-border pixel-corners hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {isOpen && (
            <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex items-center justify-center animate-fade-in">
              <div className="bg-card/90 backdrop-blur-md border-4 border-border pixel-corners p-6 shadow-2xl animate-scale-in max-w-xs w-full mx-4">
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-3 w-full p-3 border-2 pixel-corners transition-all duration-300 transform hover:scale-105 ${
                        activeSection === item.id
                          ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                          : 'bg-muted border-border hover:bg-accent hover:shadow-md'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <item.icon className="w-4 h-4 transition-transform duration-200" />
                      <span className="font-mono font-bold text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  // Show minimal navbar in other sections
  return (
    <>
      {/* Desktop Navigation - Minimal expandable dock */}
      <div className="hidden md:block fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center">
          {/* Trigger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-3 bg-card/90 backdrop-blur-md border-2 border-border pixel-corners shadow-lg transition-all duration-300 hover:scale-110 hover-glow ${
              isOpen ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground hover:bg-accent'
            }`}
            title="Navigation Menu"
          >
            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Expandable menu */}
          {isOpen && (
            <div className="mt-2 flex flex-col gap-2 bg-card/90 backdrop-blur-md border-2 border-border pixel-corners p-2 shadow-lg animate-scale-in">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-2 transition-all duration-200 hover:scale-110 pixel-corners ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-background hover:bg-accent text-foreground border border-border'
                  }`}
                  title={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation - Floating hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 p-3 bg-card/90 backdrop-blur-sm border-2 border-border pixel-corners hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex items-center justify-center animate-fade-in">
            <div className="bg-card/90 backdrop-blur-md border-4 border-border pixel-corners p-6 shadow-2xl animate-scale-in max-w-xs w-full mx-4">
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 w-full p-3 border-2 pixel-corners transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                        : 'bg-muted border-border hover:bg-accent hover:shadow-md'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="w-4 h-4 transition-transform duration-200" />
                    <span className="font-mono font-bold text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
