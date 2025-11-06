import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring large-scale React applications with proper state management and component architecture.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "React",
    },
    {
      title: "Mastering TypeScript in 2024",
      excerpt: "A comprehensive guide to leveraging TypeScript's powerful type system for building robust applications.",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "TypeScript",
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Explore the latest CSS features including Grid, Flexbox, and custom properties for creating responsive layouts.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "CSS",
    },
    {
      title: "Node.js Performance Optimization",
      excerpt: "Tips and tricks for optimizing Node.js applications, from async operations to memory management.",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "Node.js",
    },
    {
      title: "Introduction to Microservices",
      excerpt: "Understanding microservices architecture and when to use it in your projects.",
      date: "February 20, 2024",
      readTime: "15 min read",
      category: "Architecture",
    },
    {
      title: "Web Accessibility Best Practices",
      excerpt: "Making your web applications accessible to everyone with WCAG guidelines and practical examples.",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Accessibility",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg md:text-xl text-white/90">
              Thoughts, tutorials, and insights on web development
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-large transition-smooth hover:-translate-y-1 flex flex-col"
              >
                <div className="h-48 bg-gradient-secondary rounded-t-lg" />
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full group">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto shadow-large">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest posts delivered right to your inbox
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button className="bg-gradient-primary">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
