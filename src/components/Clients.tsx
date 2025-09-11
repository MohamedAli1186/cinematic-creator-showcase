import { Card } from "@/components/ui/card";

const Clients = () => {
  const clients = [
    {
      name: "WaffarX",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
      description: "E-commerce Platform"
    },
    {
      name: "TechFlow",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
      description: "Tech Solutions"
    },
    {
      name: "StyleHub",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      description: "Fashion Brand"
    },
    {
      name: "FitLife",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=100&fit=crop",
      description: "Fitness App"
    }
  ];

  return (
    <section id="clients" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Trusted By</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Brands and companies that have chosen my creative vision to tell their stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <Card 
              key={index}
              className="glass border-none p-8 text-center hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="w-full h-16 object-contain mx-auto rounded"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {client.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {client.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-card p-6 rounded-lg border border-border/20">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-lg font-medium">Available for new collaborations</span>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;