import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const videos = [
    {
      id: 1,
      title: "WaffarX Product Campaign",
      description: "High-converting advertising video for major e-commerce platform",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      duration: "1:30",
      category: "Commercial"
    },
    {
      id: 2,
      title: "Tech Startup Explainer",
      description: "Engaging explainer video for innovative tech solution",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
      duration: "2:15",
      category: "Explainer"
    },
    {
      id: 3,
      title: "Fashion Brand Story",
      description: "Lifestyle commercial showcasing premium fashion collection",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      duration: "1:45",
      category: "Fashion"
    },
    {
      id: 4,
      title: "Fitness App Promo",
      description: "Dynamic promotional video for health and wellness app",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      duration: "1:00",
      category: "Health"
    },
    {
      id: 5,
      title: "Real Estate Commercial",
      description: "Luxurious property showcase with cinematic storytelling",
      thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      duration: "2:30",
      category: "Real Estate"
    },
    {
      id: 6,
      title: "Social Media Campaign",
      description: "Viral social media content series for lifestyle brand",
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop",
      duration: "0:45",
      category: "Social"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of compelling video content that drives engagement and delivers results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={video.id} 
              className="portfolio-item glass border-none"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 relative group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
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
                  <p className="text-muted-foreground mb-4">
                    {video.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary font-medium">View Project</span>
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;