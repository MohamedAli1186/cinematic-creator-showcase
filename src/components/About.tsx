import { Card } from "@/components/ui/card";
import { Video, Users, Award, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Video, number: "20+", label: "Videos Created" },
    { icon: Users, number: "20Min", label: "Maximum Time for Filming" },
    { icon: Award, number: "5+", label: "WaffarX Campaigns" },
    { icon: Zap, number: "2M+", label: "Views Generated" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm a passionate{" "}
                <span className="text-primary font-semibold">
                  scripted video creator
                </span>{" "}
                and
                <span className="text-accent font-semibold">
                  {" "}
                  advertising model
                </span>{" "}
                with a proven track record of creating compelling content that
                converts viewers into customers.
              </p>

              <p>
                With over{" "}
                <span className="text-primary font-semibold">
                  10 professional videos
                </span>{" "}
                created for WaffarX and numerous freelance collaborations, I
                specialize in crafting narratives that resonate with audiences
                and drive meaningful engagement for brands.
              </p>

              <p>
                My approach combines{" "}
                <span className="text-accent font-semibold">
                  cinematic storytelling
                </span>{" "}
                with strategic marketing insights to deliver content that not
                only looks stunning but also achieves real business results.
              </p>

              <p className="text-foreground font-medium">
                Ready to collaborate? Let's create something extraordinary
                together.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid cursor-default grid-cols-2 gap-6 animate-fade-in">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="glass border-none p-6 text-center hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default About;
