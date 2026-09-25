import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Clapperboard, Zap, TrendingUp, Play, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import bromoVideo from "@/assets/bromo-vid.mp4";

const INSTAGRAM_URL = "https://www.instagram.com/p/Ddrey07lBOJ/";

const LatestVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
    }
  }, [isMuted]);

  const handleToggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    setIsMuted((prev) => {
      const next = !prev;
      video.muted = next;
      if (!next) {
        video.play().catch(() => {});
      }
      return next;
    });
  };

  return (
    <section id="latest-video" className="relative py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Latest Drop</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hot off the timeline — tap the speaker to hear it, or click to
            watch in full
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          {/* Text content — desktop only */}
          <div className="hidden md:block max-w-md animate-slide-up">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Scripted. Shot.{" "}
              <span className="text-gradient">Delivered.</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Every project gets the same treatment — a tight script, a
              deliberate shot list, and an edit built to hold attention from
              the very first frame.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="bg-primary/10 rounded-full p-2">
                  <Clapperboard className="w-5 h-5 text-primary" />
                </span>
                <span className="text-foreground/90">
                  Professionally shot & edited
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-accent/10 rounded-full p-2">
                  <Zap className="w-5 h-5 text-accent" />
                </span>
                <span className="text-foreground/90">
                  Edited for scroll-stopping hooks
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary/10 rounded-full p-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </span>
                <span className="text-foreground/90">
                  Built to grab attention & convert
                </span>
              </li>
            </ul>
            <Button as="a" href="#portfolio" variant="neon" size="lg">
              <Play className="w-5 h-5 mr-2" />
              See More Work
            </Button>
          </div>

          {/* Video card */}
          <div
            className="relative w-[80vw] max-w-[340px] sm:max-w-[380px] shrink-0 animate-fade-in"
            onClick={() => setIsPopupOpen(true)}
          >
            <div className="portfolio-item glass rounded-2xl overflow-hidden border-none cursor-pointer">
              <div className="relative aspect-[9/16] bg-background">
                <video
                  ref={videoRef}
                  src={bromoVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Top badge */}
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-background">
                  New
                </div>

                {/* Instagram link */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on Instagram"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-foreground" />
                </a>

                {/* Sound toggle */}
                <button
                  type="button"
                  onClick={handleToggleSound}
                  title={isMuted ? "Unmute" : "Mute"}
                  className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-3 hover:bg-background hover:scale-110 transition-all duration-300 glow-electric"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-foreground" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-primary" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Video Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="relative max-w-sm w-auto bg-background rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={bromoVideo} controls autoPlay className="w-full h-auto rounded-lg" />
            <button
              title="close"
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
              onClick={() => setIsPopupOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              <Instagram className="w-4 h-4" />
              View on Instagram
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestVideo;
