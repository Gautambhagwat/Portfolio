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
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "📜" },
        { name: "React.js", icon: "⚛️" },
        { name: "Responsive Design", icon: "📱" },
        { name: "Tailwind CSS", icon: "🎨" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Coffee className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Java", icon: "☕" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "Node.js", icon: "🟢" },
        { name: "RESTful APIs", icon: "🔗" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Maven/Gradle", icon: "📦" }
      ]
    },
    {
      title: "Data Science & ML",
      icon: <Database className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "Scikit-learn", icon: "🤖" },
        { name: "Matplotlib/Seaborn", icon: "📊" },
        { name: "Jupyter Notebooks", icon: "📓" }
      ]
    },
    {
      title: "Data Analytics & BI",
      icon: <BarChart className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "SQL", icon: "💾" },
        { name: "Tableau", icon: "📈" },
        { name: "Power BI", icon: "⚡" },
        { name: "Excel/Google Sheets", icon: "📋" },
        { name: "R", icon: "📊" },
        { name: "Statistical Modeling", icon: "📉" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full animate-bounce-in"></div>
        </div>
        <div className="mx-auto max-w-6xl text-center relative z-10 animate-enter">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">About Me</h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated software engineer with a comprehensive technical foundation across multiple 
            technology domains. I specialize in full-stack development, data science, and enterprise applications, 
            with a strong focus on delivering scalable solutions and driving data-driven insights. 
            Committed to continuous learning and leveraging cutting-edge technologies to solve complex business challenges.
          </p>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

        {/* My Journey Section */}
        <Card className="p-8 mb-12 shadow-card animate-enter">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in technology began with a deep curiosity for problem-solving and innovation. 
                I've systematically developed expertise across multiple technology stacks, from creating 
                scalable web applications to implementing machine learning models and building enterprise-grade solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm focused on developing a robust portfolio that showcases my proficiency in 
                full-stack development, data science methodologies, enterprise Java applications, and 
                business intelligence solutions that drive measurable business value.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center ">
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
          <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
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
                Bachelor of Engineering in Information Technology (CGPA: 8.34/10.0) - Class of 2025
              </p>
            </div>
            <div className="hover:transform hover:scale-105 transition-transform p-4 rounded-lg hover:bg-muted/30">
              <h3 className="font-semibold text-lg mb-2">Specializations</h3>
              <p className="text-muted-foreground">
                Machine Learning, Full-Stack Development, Data Visualization, and Enterprise Software Solutions
              </p>
            </div>
            <div className="hover:transform hover:scale-105 transition-transform p-4 rounded-lg hover:bg-muted/30">
              <h3 className="font-semibold text-lg mb-2">Professional Goals</h3>
              <p className="text-muted-foreground">
                Delivering innovative solutions, contributing to open-source projects, and advancing expertise in emerging technologies
              </p>
            </div>
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default About;