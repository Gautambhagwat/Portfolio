import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart, Coffee } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["React", "TypeScript", "Node.js", "Express", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Java Full Stack",
      icon: <Coffee className="h-6 w-6" />,
      skills: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Maven", "JUnit"]
    },
    {
      title: "Data Science",
      icon: <Database className="h-6 w-6" />,
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"]
    },
    {
      title: "Data Analytics",
      icon: <BarChart className="h-6 w-6" />,
      skills: ["SQL", "Tableau", "Power BI", "Excel", "R", "Statistical Analysis"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software engineer with a diverse technical background spanning multiple 
            IT domains. Currently building my expertise across web development, data science, and 
            enterprise Java applications. I believe in continuous learning and creating solutions that 
            make a real impact.
          </p>
        </div>

        {/* My Journey Section */}
        <Card className="p-8 mb-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My passion for technology started early, and I've been dedicated to expanding my skills across 
                different domains of IT. From building responsive web applications to analyzing complex datasets, 
                I enjoy tackling diverse challenges and learning new technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm focused on building a comprehensive portfolio of projects that demonstrate my 
                capabilities across web development, data science, Java enterprise applications, and analytical solutions.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-hero-gradient rounded-full flex items-center justify-center">
                  <Code className="h-24 w-24 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-card rounded-full shadow-lg flex items-center justify-center">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-full shadow-lg flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.title} className="p-6 shadow-card hover:shadow-card-hover transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Info */}
        <Card className="p-8 shadow-card">
          <h2 className="text-3xl font-bold text-center mb-8">Get to Know Me</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Education Focus</h3>
              <p className="text-muted-foreground">
                Currently pursuing B.E. in Information Technology with a strong academic record (CGPA: 8.34)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Interests</h3>
              <p className="text-muted-foreground">
                AI/ML applications, Full-stack development, Data visualization, and solving real-world problems
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Goals</h3>
              <p className="text-muted-foreground">
                Building innovative solutions, contributing to open source, and continuous learning in emerging technologies
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;