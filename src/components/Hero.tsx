import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import me from "@/assets/me.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}

      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Professional video studio setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <img
            src={me}
            alt="Professional video creator"
            className="md:w-56 mt-16 md:h-auto h-48 w-48 object-cover mx-auto rounded-full"
          />
          <h1 className="hero-text mb-6 leading-tight">
            Scripted Videos & Ads
            <br />
            <span className="text-accent">Creator</span>
          </h1>
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
            I’m Mohamed Ali, a Front-End Developer. and also a video creator and
            advertising model, I craft compelling and story-driven video content
            that grabs attention, builds trust, and drives results for brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              as="a"
              href="https://wa.me/201011533423"
              target="_blank"
              variant="hero"
              size="lg"
              className="text-lg px-8 py-3"
            >
              Work with Me
            </Button>
            <Button
              as="a"
              href="#portfolio"
              variant="neon"
              size="lg"
              className="text-lg px-8 py-3"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Reels
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
