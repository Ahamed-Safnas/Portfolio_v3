import { MessageSquare, Send, Sparkles } from "lucide-react";
import FloatingTechElements from "@/components/ui/floating-tech-elements";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const currentForm = form.current;
    if (!currentForm) return;

    const email = currentForm.user_email.value;
    const message = currentForm.message.value;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId1 = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_1;
    const templateId2 = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!email || !message) {
      alert("Email and message are required.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId1, currentForm, publicKey)
      .then(() => {
        emailjs.send(
          serviceId,
          templateId2,
          {
            to_email: email,
            to_name: currentForm.user_name.value,
          },
          publicKey
        );

        alert("Message sent successfully!");
        currentForm.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <FloatingTechElements />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary/20 pixel-square animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent/30 pixel-square animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-secondary/40 pixel-square animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-primary/15 pixel-square animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary/25 pixel-square animate-float transform -translate-x-1/2 -translate-y-1/2"></div>

        <div className="absolute top-32 right-1/4 animate-pulse">
          <Sparkles className="w-6 h-6 text-primary/30" />
        </div>
        <div className="absolute bottom-40 left-1/3 animate-pulse" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-4 h-4 text-accent/40" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-card border-3 border-border pixel-corners mb-4 animate-pulse">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 pixel-text animate-slide-up">
            ./contact
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto pixel-bar animate-progress"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-4 border-border pixel-corners p-8 mb-8 animate-fade-in">
            <div className="font-mono text-sm text-muted-foreground mb-4">
              {"// Let's build something amazing together"}
            </div>
            <div className="font-mono text-lg mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-primary">if</span> (you.hasProject || you.hasIdea) {"{"}
              <br />
              <span className="ml-4 text-gray-600">console.log</span>("Let's talk!");
              <br />
              {"}"}
            </div>
            <p className="text-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              I'm always excited to work on new projects and collaborate with fellow developers. 
              Whether you have a project in mind, want to discuss tech, or just say hello, 
              feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-mono font-bold text-xl mb-6">Let's Connect</h3>

              <div className="bg-card border-4 border-border pixel-corners p-6 hover:bg-accent transition-all duration-300 hover:scale-105 hover-glow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 border-2 border-primary/20 pixel-corners">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono font-bold text-lg">Ready to Collaborate?</div>
                    <div className="text-sm text-muted-foreground">Let's discuss your next project</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm passionate about creating innovative solutions and bringing ideas to life through code.
                  From ML models to web applications, let's build something extraordinary together.
                </p>
                <div className="flex gap-2 text-xs font-mono text-primary">
                  <span className="bg-primary/10 px-2 py-1 rounded">Machine Learning</span>
                  <span className="bg-primary/10 px-2 py-1 rounded">Data Science</span>
                  <span className="bg-primary/10 px-2 py-1 rounded">Python</span>
                  <span className="bg-primary/10 px-2 py-1 rounded">AI Agent</span>
                </div>
              </div>
            </div>

            <div className="bg-card border-4 border-border pixel-corners p-6 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="font-mono text-sm text-muted-foreground mb-4">
                {"// Quick message"}
              </div>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input 
                  type="text" 
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full p-3 bg-muted border-2 border-border pixel-corners font-mono focus:border-primary focus:outline-none transition-colors hover:border-accent"
                />
                <input 
                  type="email" 
                  name="user_email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full p-3 bg-muted border-2 border-border pixel-corners font-mono focus:border-primary focus:outline-none transition-colors hover:border-accent"
                />
                <textarea 
                  name="message"
                  placeholder="Your message here..."
                  rows={4}
                  required
                  className="w-full p-3 bg-muted border-2 border-border pixel-corners font-mono focus:border-primary focus:outline-none transition-colors resize-none hover:border-accent"
                ></textarea>
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-mono font-bold border-4 border-primary hover:bg-primary/90 transition-all duration-200 pixel-corners hover:scale-105 hover-glow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {loading ? "Sending..." : "./send-message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="inline-block bg-card border-4 border-border pixel-corners p-4 hover:bg-accent transition-colors duration-300">
            <div className="font-mono text-sm text-muted-foreground">
              {"// Made with ❤️ and lots of ☕"}
              <br />
              {"© 2025 Ahamed Safnas — Portfolio "}
              <select
                defaultValue="v3.0"
                onChange={(e) => {
                  const selected = e.target.value;
                  if (selected === "v2.0") {
                    window.location.href = "https://ahamedsafnas02.netlify.app/"; 
                  } else if (selected === "v3.0") {
                    window.location.href = "https://ahamedsafnas.me"; // current version
                  }
                }}
                className="bg-transparent text-primary underline cursor-pointer ml-1 focus:outline-none focus:ring-0"
                style={{
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                }}
              >
                <option className="text-foreground bg-background" value="v3.0">v3.0</option>
                <option className="text-foreground bg-background" value="v2.0">v2.0</option>
              </select>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
