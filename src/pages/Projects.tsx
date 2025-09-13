import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filters = ["All Projects", "Frontend Development", "Backend Development", "Data Science & ML", "Data Analytics & BI"];

  // Professional project portfolio showcasing diverse technical expertise
  const projects = [
    {
      title: "Professional Portfolio Platform",
      description: "A modern, responsive portfolio website showcasing technical expertise and professional achievements. Built with cutting-edge frontend technologies and optimized for performance and accessibility.",
      category: "Frontend Development",
      status: "completed",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/Gautambhagwat/gautam-dev-folio",
      demo: "https://your-portfolio-demo.example.com"
    },
    {
      title: "Enterprise E-Commerce API",
      description: "Scalable RESTful API architecture for e-commerce platform with comprehensive business logic, authentication, and database optimization. Implements industry best practices for security and performance.",
      category: "Backend Development",
      status: "in-progress",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "RESTful APIs", "JWT"],
      github: "https://github.com/Gautambhagwat/placeholder-ecommerce",
      demo: ""
    },
    {
      title: "Retail Analytics & Forecasting",
      description: "Advanced data science project analyzing retail sales patterns and implementing predictive models for inventory optimization and revenue forecasting using machine learning algorithms.",
      category: "Data Science & ML",
      status: "planned",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter Notebooks"],
      github: "",
      demo: ""
    },
    {
      title: "Executive Business Intelligence Dashboard",
      description: "Comprehensive BI solution providing real-time insights into key business metrics, KPI tracking, and data visualization for strategic decision-making and performance monitoring.",
      category: "Data Analytics & BI",
      status: "planned",
      technologies: ["Tableau", "SQL", "Power BI", "Statistical Modeling"],
      github: "",
      demo: ""
    }
  ];

  const filteredProjects = activeFilter === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in-progress": return "bg-blue-100 text-blue-800";
      case "planned": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "planned": return "Coming Soon";
      default: return "Unknown";
    }
  };

  const openLink = (url?: string) => {
    if (!url) return;
    const trimmed = url.trim();
    if (!trimmed) return;
    window.open(trimmed, "_blank", "noreferrer");
  };

  return (
    <div className="min-h-screen py-0 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full animate-bounce-in"></div>
        </div>
        <div className="mx-auto max-w-6xl text-center relative z-10 animate-enter">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Projects</h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover my portfolio of innovative solutions across diverse technology domains. 
            Each project demonstrates expertise in modern development practices and business-focused problem solving.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-enter">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (


<Card key={index} className="p-6 shadow-card hover:shadow-card-hover transition-all group animate-enter">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge className={getStatusColor(project.status)}>
                    {getStatusText(project.status)}
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  disabled={!project.github || project.status === "planned"}
                  onClick={() => openLink(project.github)}
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  disabled={!project.demo || project.status === "planned"}
                  onClick={() => openLink(project.demo)}
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Button>
              </div>
              {project.status === "planned" && (
                <p className="text-xs text-muted-foreground mt-3">
                  This project is currently in development phase. Implementation details and updates coming soon.
                </p>
              )}
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-enter">
          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-muted-foreground mb-6">
              I'm actively seeking new opportunities to contribute to innovative projects and 
              deliver exceptional solutions. Let's discuss how we can work together to achieve your goals.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:gautambhagwat007@gmail.com">
                Start a Conversation
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;