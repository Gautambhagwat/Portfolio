import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  const skills = [
    "Java", "Spring Boot", "React", "TypeScript", "Python", "Data Science", 
    "Machine Learning", "SQL", "PostgreSQL", "Tableau", "Power BI"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Hi, I'm <span className="bg-hero-gradient bg-clip-text text-transparent">Gautam Bhagwat</span>
          </h1>
          
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Software Developer | AI & Data Science Enthusiast
          </p>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions across Data Science, Web Development, Java Full Stack, 
            and Data Analytics. Currently expanding my expertise and creating impactful projects 
            with a strong foundation in computer science and problem-solving.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link to="/projects">
                View Projects <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/Gautambhagwat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://linkedin.com/in/gautam-bhagwat-71bbb5231"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="mailto:gautambhagwat007@gmail.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies & Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="p-8 shadow-card hover:shadow-card-hover transition-shadow">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              I'm a passionate software developer pursuing B.E. in Information Technology at 
              D. Y. Patil College Of Engineering, Pune. With a strong academic foundation (CGPA: 8.34) 
              and hands-on experience in multiple domains, I specialize in creating innovative solutions 
              that bridge the gap between technology and real-world problems.
            </p>
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;