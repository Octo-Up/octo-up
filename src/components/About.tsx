import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Every project begins with understanding your goals and crafting strategies that deliver measurable results."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work as an extension of your team, ensuring seamless communication and shared success."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Leveraging cutting-edge technologies and creative solutions to keep you ahead of the competition."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Uncompromising attention to detail and quality in every aspect of our work."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Octo-Up</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              "Octo" represents multipleness and wholeness, inspired by the number 8. "Up" symbolizes growth, progress, and elevation. Together, Octo-Up means a full-powered creative partner that helps brands take flight.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just another digital agency. We're your strategic partners in digital transformation, combining creativity with technology to deliver solutions that drive real business results. Our friendly, supportive, and confident approach ensures your brand gets the elevation it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Our Story
              </Button>
              <Button variant="outline" size="lg">
                Meet the Team
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="shadow-soft hover:shadow-glow transition-all duration-300 border-border/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;