import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2018 - 2020",
      description: "Specialized in Software Engineering and Cloud Computing",
      achievements: ["GPA: 3.9/4.0", "Dean's List", "Research in Distributed Systems"],
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      year: "2014 - 2018",
      description: "Foundation in Computer Science and Programming",
      achievements: ["GPA: 3.7/4.0", "Honor Student", "Led Development Club"],
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "React Advanced Certification",
    "Node.js Certified Developer",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Education</h1>
            <p className="text-lg md:text-xl text-white/90">
              Academic background and professional certifications
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Journey</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-card hover:shadow-large transition-smooth">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 rounded-lg bg-gradient-primary">
                        <BookOpen className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                        <span className="text-muted-foreground">{edu.year}</span>
                      </div>
                      <p className="text-lg text-primary mb-3">{edu.institution}</p>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications demonstrating expertise in various technologies
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6 flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
