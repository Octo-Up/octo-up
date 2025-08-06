import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced filtering, payment integration, and inventory management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Stripe"]
    },
    {
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete rebranding including logo, typography, color palette, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      tags: ["Logo Design", "Brand Guide", "Print"]
    },
    {
      title: "Mobile Banking App",
      category: "UI/UX Design",
      description: "Intuitive mobile banking interface with enhanced security features and seamless user experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["Mobile Design", "Fintech", "UX"]
    },
    {
      title: "Product Photography",
      category: "Photography",
      description: "Professional product photography showcasing luxury watches with dramatic lighting and composition.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
      tags: ["Product Photos", "Luxury", "Studio"]
    },
    {
      title: "SaaS Marketing Campaign",
      category: "Digital Marketing",
      description: "Comprehensive digital marketing strategy resulting in 300% increase in qualified leads.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["SEO", "PPC", "Content Marketing"]
    },
    {
      title: "Restaurant Mobile App",
      category: "Mobile Development",
      description: "Food ordering app with real-time tracking, loyalty program, and integrated payment system.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
      tags: ["React Native", "Food Tech", "Mobile"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" size="sm" className="bg-background/90">
                    <Eye className="w-4 h-4 mr-2" />
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;