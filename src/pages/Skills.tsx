import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "HTML5 / CSS3", level: 98 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js / Express", level: 92 },
        { name: "Python / Django", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 90 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "CI/CD", level: 82 },
        { name: "Kubernetes", level: 75 },
        { name: "Git / GitHub", level: 95 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: [
        { name: "VS Code", level: 98 },
        { name: "Figma", level: 85 },
        { name: "Postman", level: 90 },
        { name: "Jira", level: 88 },
        { name: "Agile / Scrum", level: 92 },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
            <p className="text-lg md:text-xl text-white/90">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card hover:shadow-large transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Continuous Learning</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Technology evolves rapidly, and so do I. I'm constantly learning new technologies, 
            frameworks, and best practices to stay at the forefront of web development.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["GraphQL", "WebAssembly", "Rust", "AI/ML", "Web3", "Microservices"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card rounded-lg shadow-card font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
