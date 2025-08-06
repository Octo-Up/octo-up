import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@octo-up.com",
      description: "Send us a message anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Digital Street, Creative City, CC 12345",
      description: "Our creative headquarters"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to elevate your brand? Let's discuss how we can help your business take flight.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={item.title} 
                  className="flex items-start space-x-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-primary font-medium mb-1">{item.info}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-primary p-6 rounded-2xl text-primary-foreground">
              <h4 className="text-xl font-bold mb-2">Ready to Start?</h4>
              <p className="mb-4 opacity-90">
                Schedule a free consultation to discuss your project and see how we can help.
              </p>
              <Button variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-soft border-border/50">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input placeholder="Your Company Name" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Service Interested In</label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>Select a service</option>
                    <option>Web & Mobile Development</option>
                    <option>Branding & Graphic Design</option>
                    <option>Photography & Videography</option>
                    <option>Digital Marketing</option>
                    <option>UI/UX Design</option>
                    <option>Full Package</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Project Details</label>
                  <Textarea 
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={4}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;