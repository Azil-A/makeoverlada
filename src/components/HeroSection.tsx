import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful makeup products"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 animate-float">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">New Collection Just Dropped</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-4xl mx-auto">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            Glow Up Your
          </span>
          <br />
          <span className="text-foreground">Beauty Game</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover premium makeup sets curated for the modern beauty enthusiast. 
          Shop trending looks and elevate your routine.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-float hover:scale-105 transition-all duration-300 animate-pulse-slow"
          >
            Shop Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 hover:bg-primary/10 transition-all duration-300"
          >
            View Collections
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>Free Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span>Cruelty-Free</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full gradient-premium rounded-full" />
            <span>30-Day Returns</span>
          </div>
        </div>
      </div>
    </section>
  );
};
