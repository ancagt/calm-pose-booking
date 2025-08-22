import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">🧘‍♀️</div>
          <span className="text-xl font-semibold text-foreground">Calm Pose</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#classes" className="text-foreground hover:text-primary transition-colors">Classes</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#videos" className="text-foreground hover:text-primary transition-colors">Videos</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <Button variant="zen" size="lg">
          Book Now
        </Button>
      </div>
    </header>
  );
};