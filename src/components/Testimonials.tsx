import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "Octo-Up transformed our digital presence completely. Their team's creativity and technical expertise resulted in a 200% increase in our online conversions. They truly understand what it means to help a brand take flight.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Founder, EcoStore",
      content: "Working with Octo-Up was a game-changer for our e-commerce business. Their strategic approach to design and marketing helped us scale from startup to market leader in just 18 months.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, FitLife",
      content: "The team at Octo-Up doesn't just deliver projects, they deliver results. Our new brand identity and digital strategy increased brand recognition by 300%. They're true creative partners.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      position: "Owner, Thompson & Associates",
      content: "Professional, creative, and results-driven. Octo-Up's web development and digital marketing services helped us establish a strong online presence and attract high-quality clients.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Lisa Park",
      position: "Brand Manager, Luxe Fashion",
      content: "Octo-Up's photography and branding work exceeded our expectations. They captured our brand essence perfectly and created visuals that truly resonate with our target audience.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Robert Martinez",
      position: "CTO, InnovateLab",
      content: "Their technical expertise is impressive, but what sets Octo-Up apart is their ability to understand business needs and translate them into effective digital solutions. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it. Here's what our clients say about working with Octo-Up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="shadow-soft hover:shadow-glow transition-all duration-300 border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/30 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;