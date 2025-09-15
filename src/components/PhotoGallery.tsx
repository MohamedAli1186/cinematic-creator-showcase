import { useState } from "react";
import { X } from "lucide-react";
import ana1 from "../assets/ana1.jpg";
import ana2 from "../assets/ana2.jpg";
import ana3 from "../assets/ana3.jpg";
import ana7 from "../assets/ana7.jpg";
import ana5 from "../assets/ana5.jpg";
import ana6 from "../assets/ana6.jpg";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      id: 1,
      src: ana6,
      alt: "Professional headshot 1",
    },
    {
      id: 2,
      src: ana3,
      alt: "Professional headshot 2",
    },
    {
      id: 3,
      src: ana5,
      alt: "Professional headshot 3",
    },
    {
      id: 4,
      src: ana7,
      alt: "Behind the scenes 1",
    },
    {
      id: 5,
      src: ana2,
      alt: "Behind the scenes 2",
    },
    {
      id: 6,
      src: ana1,
      alt: "Professional headshot 4",
    },
  ];

  return (
    <section id="gallery" className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Photo Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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
          className="fixed inset-0 bg-background/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-lg max-h-full">
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
