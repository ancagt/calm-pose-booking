import { Button } from "@/components/ui/button";
import heroImage from "@/assets/yoga-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Find Your
          <span className="block text-transparent bg-gradient-to-r from-white to-coral-light bg-clip-text">
            Inner Peace
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
          Experience transformative yoga sessions designed to nurture your mind, body, and soul
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Start Your Journey
          </Button>
          <Button variant="outline-zen" size="lg" className="text-lg px-8 py-4">
            Watch Videos
          </Button>
        </div>
      </div>
    </section>
  );
};