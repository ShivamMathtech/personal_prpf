import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full Stack",
      description: "Complete online shopping platform with payment integration, admin dashboard, and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      category: "Frontend",
      description: "Collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
      technologies: ["React", "TypeScript", "Tailwind", "Firebase"],
      github: "#",
      demo: "#",
    },
    {
      title: "Analytics Dashboard",
      category: "Full Stack",
      description: "Business intelligence dashboard with data visualization, custom reports, and predictive analytics.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media API",
      category: "Backend",
      description: "RESTful API for social media platform with authentication, posts, comments, and real-time notifications.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Builder",
      category: "Frontend",
      description: "No-code portfolio builder with drag-and-drop editor, custom themes, and deployment options.",
      technologies: ["React", "Next.js", "Tailwind", "Vercel"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Forecast App",
      category: "Frontend",
      description: "Weather application with location-based forecasts, interactive maps, and severe weather alerts.",
      technologies: ["React", "OpenWeather API", "Leaflet", "PWA"],
      github: "#",
      demo: "#",
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-lg md:text-xl text-white/90">
              A showcase of my recent work and personal projects
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-large transition-smooth hover:-translate-y-1 flex flex-col"
              >
                <div className="h-48 bg-gradient-secondary rounded-t-lg" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <span className="text-sm text-primary">{project.category}</span>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-muted rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
