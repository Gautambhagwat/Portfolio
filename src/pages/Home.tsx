import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const skills = [
    { name: "Java ☕", color: "text-orange-600" },
    { name: "Python 🐍", color: "text-green-500" },
    { name: "Machine Learning 🤖", color: "text-pink-600" },
    { name: "AI ֎", color: "text-blue-800" },
    { name: "Spring Boot 🍃", color: "text-green-600" },
    { name: "Data Science 📊", color: "text-purple-600" },
    { name: "SQL 💾", color: "text-indigo-600" },
    { name: "Power BI ⚡", color: "text-yellow-600" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const handleScrollToSkills = () => {
    document.querySelector('.skills-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full animate-bounce-in"></div>
        </div>
        
        <div className={`mx-auto max-w-4xl text-center relative z-10 transition-all duration-1000 ${isVisible ? 'animate-enter' : 'opacity-0'}`}>
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Hi, I'm <span className="bg-hero-gradient bg-clip-text text-transparent animate-pulse">Gautam Bhagwat</span>
          </h1>
          
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Software Developer | AI & Data Science Enthusiast
          </p>
          
          {/* Animated rotating skills */}
          <div className="mt-4 h-8">
            <p className="text-lg">
              Currently working with{" "}
              <span className={`font-bold transition-all duration-500 ${skills[currentSkillIndex].color}`}>
                {skills[currentSkillIndex].name}
              </span>
            </p>
          </div>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Delivering scalable solutions across Frontend Development, Backend Systems, Data Science & ML, 
            and Business Intelligence. Committed to leveraging cutting-edge technologies and industry best practices 
            to solve complex business challenges and drive measurable results.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild className="hover:scale-105 transition-transform">
              <Link to="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <Button variant="ghost" size="sm" asChild className="hover:scale-110 transition-transform">
              <a
                href="https://github.com/Gautambhagwat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5 hover:animate-spin" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hover:scale-110 transition-transform">
              <a
                href="https://linkedin.com/in/gautam-bhagwat-71bbb5231"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5 hover:animate-pulse" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hover:scale-110 transition-transform">
              <a
                href="mailto:gautambhagwat007@gmail.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <Button 
            variant="ghost" 
            onClick={handleScrollToSkills}
            className="mt-8"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="skills-section py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-enter">
              <Sparkles className="inline h-8 w-8 mr-2 text-primary" />
              Technical Expertise
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Badge 
                key={skill.name} 
                variant="secondary" 
                className={`px-4 py-3 text-sm hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg animate-enter ${skill.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="p-8 shadow-card hover:shadow-card-hover transition-all duration-500 animate-enter hover:scale-[1.02]">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              I'm a dedicated Software Engineer with Bachelor of Engineering in Information Technology from 
              D. Y. Patil College Of Engineering, Pune. With a strong academic foundation (CGPA: 8.34/10.0) 
              and comprehensive experience across multiple technology domains, I specialize in delivering 
              enterprise-grade solutions that address complex business challenges and drive organizational success.
            </p>
            <div className="mt-8 text-center">
              <Button variant="outline" asChild className="hover:scale-105 transition-transform">
                <Link to="/about">Explore My Background</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;