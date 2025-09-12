import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart, Coffee, MousePointer, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards(prev => {
        if (prev.length < skillCategories.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚀" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind CSS", icon: "🎨" }
      ]
    },
    {
      title: "Java Full Stack",
      icon: <Coffee className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Java", icon: "☕" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "REST APIs", icon: "🔗" },
        { name: "Maven", icon: "📦" },
        { name: "JUnit", icon: "🧪" }
      ]
    },
    {
      title: "Data Science",
      icon: <Database className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "Scikit-learn", icon: "🤖" },
        { name: "Matplotlib", icon: "📊" },
        { name: "Jupyter", icon: "📓" }
      ]
    },
    {
      title: "Data Analytics",
      icon: <BarChart className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "SQL", icon: "💾" },
        { name: "Tableau", icon: "📈" },
        { name: "Power BI", icon: "⚡" },
        { name: "Excel", icon: "📋" },
        { name: "R", icon: "📊" },
        { name: "Statistical Analysis", icon: "📉" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-enter">
          <h1 className="text-4xl font-bold tracking-tight mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software engineer with a diverse technical background spanning multiple 
            IT domains. Currently building my expertise across web development, data science and analytics, and 
            enterprise Java applications. I believe in continuous learning and creating solutions that 
            make a real impact.
          </p>
        </div>

        {/* My Journey Section */}
        <Card className="p-8 mb-12 shadow-card animate-enter">
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
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Code className="h-24 w-24 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-card rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-full shadow-lg flex items-center justify-center animate-bounce delay-100">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Skills Section */}
        <div className="mb-12 animate-enter">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className={`p-6 shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:scale-105 cursor-pointer group ${
                  visibleCards.includes(index) ? 'animate-enter' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-all duration-300 transform hover:translate-x-2"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>


        {/* Personal Info */}
        <Card className="p-8 shadow-card animate-enter">
          <h2 className="text-3xl font-bold text-center mb-8">Get to Know Me</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="hover:transform hover:scale-105 transition-transform p-4 rounded-lg hover:bg-muted/30">
              <h3 className="font-semibold text-lg mb-2">Education</h3>
              <p className="text-muted-foreground">
                Completed my B.E. in Information Technology with a strong academic record (CGPA: 8.34) in 2025
              </p>
            </div>
            <div className="hover:transform hover:scale-105 transition-transform p-4 rounded-lg hover:bg-muted/30">
              <h3 className="font-semibold text-lg mb-2">Interests</h3>
              <p className="text-muted-foreground">
                AI/ML applications, Full-stack development, Data visualization, and solving real-world problems
              </p>
            </div>
            <div className="hover:transform hover:scale-105 transition-transform p-4 rounded-lg hover:bg-muted/30">
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