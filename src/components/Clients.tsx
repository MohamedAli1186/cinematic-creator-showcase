import { Card } from "@/components/ui/card";
import waffarx from "../assets/waffarx.png";
import speako from "../assets/speako.jpg";
import toptech from "../assets/toptech.png";
import { ExternalLink } from "lucide-react";
const Clients = () => {
  const clients = [
    {
      name: "WaffarX",
      logo: waffarx,
      description: "Cash Back Platform",
      link: "https://waffarx.com",
    },
    {
      name: "Speako",
      logo: speako,
      description: "English Courses Platform",
      link: "https://www.facebook.com/speakoenglish",
    },
    {
      name: "TopTech",
      logo: toptech,
      description: "Design Studio",
      link: "https://www.instagram.com/toptech.company/",
    },
  ];

  return (
    <>
      <section id="clients" className="py-20 px-4 mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Trusted By</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Brands and companies that have chosen my creative vision to tell
            their stories
          </p>
        </div>

        <div className="flex justify-center gap-4 ">
          {clients.map((client, index) => (
            <Card
              key={index}
              className=" bg-none! border-none  text-center hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-20 h-20 object-contain mx-auto rounded"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {client.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {client.description}
              </p>
              <a
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                <ExternalLink className="w-4 mx-auto mt-4 h-4 text-primary" />
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mt-5 w-full bg-slate-900">
          <div className="inline-flex items-center gap-4  p-6 rounded-lg border border-border/20">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-lg font-medium">
              Available for new collaborations
            </span>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-500" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
