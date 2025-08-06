import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Camera, TrendingUp, Smartphone, Eye } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web & Mobile Development",
      description: "Custom web applications and mobile apps built with the latest technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Mobile Apps", "API Development", "E-commerce Solutions"]
    },
    {
      icon: Palette,
      title: "Branding & Graphic Design",
      description: "Complete brand identity creation and graphic design services that make your business stand out from the competition.",
      features: ["Logo Design", "Brand Guidelines", "Print Design", "Marketing Materials"]
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional photography and video production services to showcase your products and tell your brand story effectively.",
      features: ["Product Photography", "Corporate Videos", "Social Media Content", "Event Coverage"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive growth, increase brand awareness, and generate qualified leads.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"]
    },
    {
      icon: Eye,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive interfaces that enhance user experience and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: Smartphone,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies tailored to your business goals and market requirements.",
      features: ["Digital Consulting", "Technology Planning", "Growth Strategy", "Digital Transformation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We offer comprehensive digital services designed to elevate your brand and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="shadow-soft hover:shadow-glow transition-all duration-300 border-border/50 group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;