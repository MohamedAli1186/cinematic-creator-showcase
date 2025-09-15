import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Instagram,
  MessageCircle,
  Linkedin,
  Mail,
  MapPin,
  Clock,
  Facebook,
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      handle: "@mohameedaallii",
      href: "https://www.instagram.com/mohameedaallii/",
      color: "text-pink-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      handle: "Mohamed Ali",
      href: "https://www.facebook.com/mohamed.ali.245833",
      color: "text-blue-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: "Mohamed Ali",
      href: "https://www.linkedin.com/in/mohameed-ali/",
      color: "text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      handle: "mohameedaallii10@gmail.com",
      href: "mailto:mohameedaallii10@gmail.com",
      color: "text-primary",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Based in",
      value: "Cairo, Egypt",
    },
    {
      icon: Clock,
      label: "Availability Time",
      value: "24 hours",
    },
  ];

  return (
    <section id="contact" className="pb-20 pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create something amazing together? Let's discuss your next
            project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <Card className="glass border-none p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border/20">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full text-lg px-8 py-3"
                  as="a"
                  href="https://wa.me/201011533423"
                  target="_blank"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Me
                </Button>
              </div>
            </Card>

            <Card className="glass border-none p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Quick Response
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to discuss new projects and collaborations.
                Whether you need a compelling advertising video or professional
                modeling services, let's create something extraordinary
                together.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  Usually responds within 2-4 hours
                </span>
              </div>
            </Card>
          </div>

          {/* Social Links */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-gradient">
              Follow My Journey
            </h3>

            {socialLinks.map((social, index) => (
              <Card
                key={index}
                className="glass border-none p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center bg-background/10 ${social.color} group-hover:scale-110 transition-transform`}
                  >
                    <social.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {social.label}
                    </h4>
                    <p className="text-muted-foreground">{social.handle}</p>
                  </div>
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-primary text-sm">→</span>
                  </div>
                </a>
              </Card>
            ))}

            <div className="mt-8 p-6 bg-gradient-card rounded-lg border border-border/20">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Ready to Start?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Send me a message and let's discuss your project requirements.
                </p>
                <Button
                  variant="neon"
                  size="lg"
                  className="w-full"
                  as="a"
                  href="https://wa.me/201011533423"
                  target="_blank"
                >
                  Start Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
