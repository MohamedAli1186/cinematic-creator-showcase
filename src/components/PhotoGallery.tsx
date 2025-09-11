import { useState } from "react";
import { X } from "lucide-react";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      alt: "Professional headshot 1"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop",
      alt: "Professional headshot 2"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop",
      alt: "Professional headshot 3"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop",
      alt: "Behind the scenes 1"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=600&h=400&fit=crop",
      alt: "Behind the scenes 2"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop",
      alt: "Professional headshot 4"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Photo Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional headshots and behind-the-scenes moments from recent shoots
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={photo.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(photo.src)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Selected photo"
              className="max-w-full max-h-full object-contain rounded-lg"
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

export default PhotoGallery;