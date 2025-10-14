import { Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl transform scale-x-[-1]">🚡</span>
              <span className="text-xl font-bold text-foreground">Jeamlit</span>
            </div>
            <p className="text-muted-foreground">
              Build interactive data applications with Java in minutes.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://docs.jeamlit.io"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  Documentation
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/jeamlit/jeamlit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  GitHub Repository
                  <Github className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-muted-foreground text-sm">
              Jeamlit enables rapid prototyping and deployment of data applications in Java.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Jeamlit.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
