import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import AnimatedTramway from "@/components/AnimatedTramway";

const Hero = () => {
  return (
    <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">

          <h1 className="whitespace-pre-line mt-0 text-gray-90 mb-6 col-start-1 col-end-13 sm:col-start-1 sm:col-end-13 xl:col-start-3 xl:col-end-11 text-5xl sm:text-7xl md:text-8xl md:leading-none font-bold">
            A faster way to build data apps in Java.</h1>

          {/* Animated Tramway */}
          <AnimatedTramway />
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Skip the frontend hassle. Skip the event-handling mess.<br/>
            Turn a Java class into a web app in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="xl"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
            >
              <a href="https://docs.javelit.io/get-started" className="flex items-center" target="_blank">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              size="xl"
              variant="outline"
              asChild
              className="text-lg px-8 py-3 border-primary/20"
            >
              <a 
                href="https://github.com/javelit/javelit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
