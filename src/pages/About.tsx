import { Award, Heart, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Focused on delivering quality solutions that make a real impact",
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Love for clean code and elegant user experiences",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Believe in teamwork and open communication",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to continuous learning and improvement",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-lg md:text-xl text-white/90">
              Passionate full-stack developer with a love for creating elegant solutions
              to complex problems
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-[400px] bg-gradient-secondary rounded-2xl shadow-large" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a full-stack developer with over 5 years of experience building 
                  web applications that users love. My journey in tech started with a 
                  curiosity about how websites work, which quickly evolved into a passion 
                  for creating them.
                </p>
                <p>
                  Throughout my career, I've worked with startups and established companies, 
                  helping them build scalable applications using modern technologies like 
                  React, Node.js, and cloud platforms.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge through 
                  technical writing and mentoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my work and approach to development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
