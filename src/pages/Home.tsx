import HeroCarousel from "@/components/HeroCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Vue, Angular with modern CSS frameworks",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, Java with SQL & NoSQL databases",
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Full-stack applications with cloud deployment",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach for all devices",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive full-stack development services with expertise across the entire development lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-large transition-smooth hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-primary mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with modern, scalable solutions
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-primary text-white font-medium hover:opacity-90 transition-smooth"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
