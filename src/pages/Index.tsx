import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import PhotoGallery from "@/components/PhotoGallery";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <PhotoGallery />
        <Clients />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
