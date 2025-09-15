import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, X } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import me from "@/assets/me.jpg";

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
          <div className="group relative cursor-pointer w-48 h-48 md:w-56 md:h-56 mx-auto mt-16 rounded-full overflow-hidden" onClick={() => setSelectedImage(me)}>
            <img
              src={me}
              alt="Professional video creator"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-background/80 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="hero-text mb-6 leading-tight">
            Scripted Videos & Ads
            <br />
            <span className="text-accent">Creator</span>
          </h1>
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
            I’m Jimmy, a Front-End Developer. and also a video creator and
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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedImage(null);
            }
          }}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Enlarged profile"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
