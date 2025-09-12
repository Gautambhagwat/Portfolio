import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filters = ["All Projects", "Web Development", "Java Full Stack", "Data Science", "Data Analytics"];

  // Placeholder projects - these can be updated when real projects are available
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and TypeScript",
      category: "Web Development",
      status: "completed",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Backend",
      description: "RESTful API for e-commerce platform with Spring Boot",
      category: "Java Full Stack",
      status: "in-progress",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
      github: "#",
      demo: "#"
    },
    {
      title: "Sales Data Analysis",
      description: "Comprehensive analysis of retail sales data using Python",
      category: "Data Science",
      status: "planned",
      technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
      github: "#",
      demo: "#"
    },
    {
      title: "Business Dashboard",
      description: "Interactive dashboard for business metrics visualization",
      category: "Data Analytics",
      status: "planned",
      technologies: ["Tableau", "SQL", "Power BI"],
      github: "#",
      demo: "#"
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

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my work across different IT domains. Each project represents my journey in building 
            diverse technical solutions and expanding my expertise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
            <Card key={index} className="p-6 shadow-card hover:shadow-card-hover transition-all group">
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
                  disabled={project.status === "planned"}
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  disabled={project.status === "planned"}
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Button>
              </div>
              
              {project.status === "planned" && (
                <p className="text-xs text-muted-foreground mt-3">
                  This project is currently in planning phase. Stay tuned for updates!
                </p>
              )}
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-4">Interested in Collaborating?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to new opportunities and interesting projects. 
              Let's connect and build something amazing together!
            </p>
            <Button size="lg" asChild>
              <a href="mailto:gautambhagwat007@gmail.com">
                Get In Touch
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;