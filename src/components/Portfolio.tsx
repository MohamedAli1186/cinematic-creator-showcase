import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink, X } from "lucide-react";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import vid4 from "../assets/vid4.mp4";
import vid5 from "../assets/vid5.mp4";
import vid6 from "../assets/vid6.mp4";
import vid7 from "../assets/vid7.mp4";
import vid8 from "../assets/vid8.mp4";
import vid9 from "../assets/vid9.mp4";
import vid10 from "../assets/vid10.mp4";
import vid11 from "../assets/vid11.mp4";
import vid12 from "../assets/vid12.mp4";
import vid13 from "../assets/vid13.mp4";
import vid14 from "../assets/vid14.mp4";
import vid15 from "../assets/vid15.mp4";
import soravid1 from "../assets/soravid1.png";
import soravid2 from "../assets/soravid2.png";
import soravid3 from "../assets/soravid3.png";
import soravid4 from "../assets/soravid4.png";
import soravid5 from "../assets/soravid5.png";
import soravid6 from "../assets/soravid6.png";
import soravid7 from "../assets/soravid7.png";
import soravid8 from "../assets/soravid8.png";
import soravid9 from "../assets/soravid9.jpeg";
import soravid10 from "../assets/soravid10.png";
import soravid12 from "../assets/soravid12.png";
import soravid11 from "../assets/soravid11.png";
import soravid13 from "../assets/soravid13.png";
import soravid14 from "../assets/soravid14.png";
import soravid15 from "../assets/soravid15.png";

import { Button } from "./ui/button";

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [videosPerRow, setVideosPerRow] = useState(3);

  useEffect(() => {
    const calculateVideosPerRow = () => {
      if (window.innerWidth < 1024) {
        setVideosPerRow(2);
      } else {
        setVideosPerRow(3);
      }
    };
    calculateVideosPerRow();
    window.addEventListener("resize", calculateVideosPerRow);
    return () => window.removeEventListener("resize", calculateVideosPerRow);
  }, []);

  const handleToggleClick = () => {
    if (showAll) {
      const titleElement = document.getElementById("portfolio");
      if (titleElement) {
        titleElement.scrollIntoView({ behavior: "instant" });
      }
    }
    setShowAll(!showAll);
  };

  const videos = [
    {
      id: 9,
      title: "Why Only Gas!",
      thumbnail: soravid9,
      videoUrl: vid9,
      duration: "0:56",
      category: "Explainer",
    },
    {
      id: 15,
      title: "You are not Broke?",
      thumbnail: soravid15,
      videoUrl: vid15,
      duration: "1:05",
      category: "Explainer",
    },
    {
      id: 14,
      title: "Learn English in week!",
      thumbnail: soravid14,
      videoUrl: vid14,
      duration: "0:50",
      category: "Commercial",
    },
    {
      id: 11,
      title: "Cashback or Full Tank",
      thumbnail: soravid11,
      videoUrl: vid11,
      duration: "0:48",
      category: "Commercial",
    },
    {
      id: 10,
      title: "New IPhone 17",
      thumbnail: soravid10,
      videoUrl: vid10,
      duration: "1:10",
      category: "Explainer",
    },

    {
      id: 12,
      title: "HOLD UP!!",
      thumbnail: soravid12,
      videoUrl: vid12,
      duration: "0:57",
      category: "Commercial",
    },
    {
      id: 4,
      title: "Samsung M55",
      thumbnail: soravid4,
      videoUrl: vid4,
      duration: "1:09",
      category: "Explainer",
    },
    {
      id: 8,
      title: "Amazon Prime Week",
      thumbnail: soravid8,
      videoUrl: vid8,
      duration: "0:42",
      category: "Explainer",
    },
    {
      id: 1,
      title: "WaffarX Kenz Campaign",
      thumbnail: soravid1,
      videoUrl: vid1,
      duration: "0:56",
      category: "Commercial",
    },
    {
      id: 13,
      title: "Learn English?",
      thumbnail: soravid13,
      videoUrl: vid13,
      duration: "0:50",
      category: "Commercial",
    },

    {
      id: 2,
      title: "Back To School",
      thumbnail: soravid2,
      videoUrl: vid2,
      duration: "0:48",
      category: "Explainer",
    },

    {
      id: 5,
      title: "Don't Forget Us",
      thumbnail: soravid5,
      videoUrl: vid5,
      duration: "0:37",
      category: "Explainer",
    },
    {
      id: 6,
      title: "Amazon Back To School",
      thumbnail: soravid6,
      videoUrl: vid6,
      duration: "0:53",
      category: "Explainer",
    },
    {
      id: 7,
      title: "Looking For Something?",
      thumbnail: soravid7,
      videoUrl: vid7,
      duration: "0:55",
      category: "Explainer",
    },
    {
      id: 3,
      title: "Looking For New Mobile?",
      thumbnail: soravid3,
      videoUrl: vid3,
      duration: "1:00",
      category: "Commercial",
    },
  ];

  const videosToDisplay = showAll ? videos : videos.slice(0, videosPerRow);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient" id="portfolio-title">
              Featured Work
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of compelling video content that drives engagement and
            delivers results
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {videosToDisplay.map((video, index) => (
            <Card
              key={video.id}
              className="portfolio-item glass border-none cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              <CardContent className="p-0 relative group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-background" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium">
                    {video.duration}
                  </div>
                  <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium text-background">
                    {video.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  {/* <p className="text-muted-foreground mb-4">
                    {video.description}
                  </p> */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary font-medium">
                      View Video
                    </span>
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {videos.length > videosPerRow && (
          <div className="text-center mt-12">
            <Button
              type="button"
              variant="neon"
              title="show more"
              onClick={handleToggleClick}
            >
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}

        {/* Popup Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative max-w-sm w-auto bg-background rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
              />
              <button
                title="close"
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
