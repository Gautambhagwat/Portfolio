import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "D. Y. Patil College Of Engineering, Pune",
      degree: "Bachelor of Engineering in Information Technology",
      duration: "2021 - 2025",
      location: "Pune, Maharashtra",
      grade: "CGPA: 8.34/10.0",
      description: "Focused on computer science fundamentals with emphasis on software development and data analysis.",
      achievements: ["Dean's List", "Computer Science Honor Society", "Outstanding Student Award"],
      coursework: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering"]
    },
    {
      institution: "P. Dr. Vikhe Patil College, Loni",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "2019 - 2021", 
      location: "Loni, Maharashtra",
      grade: "Percentage: 82.83%",
      description: "Excelled in STEM subjects with particular focus on mathematics and early computer programming.",
      achievements: ["Valedictorian", "National Honor Society", "Computer Science Club President"],
      coursework: ["AP Computer Science", "AP Calculus", "AP Physics", "Advanced Mathematics"]
    },
    {
      institution: "Padmashri Dr. Vitthalrao Vikhe Patil Vidyalaya, Loni",
      degree: "Secondary School Certificate (SSC)",
      duration: "2014 - 2019",
      location: "Loni, Maharashtra", 
      grade: "Percentage: 91.0%",
      description: "Developed strong foundation in mathematics and discovered passion for technology and problem-solving.",
      achievements: ["Honor Roll", "Math Competition Winner", "Science Fair Champion"],
      coursework: ["Advanced Mathematics", "Introduction to Programming", "Science Olympiad"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Education</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My educational journey has provided me with a strong foundation in computer science, 
            mathematics, and problem-solving skills that drive my passion for technology.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
          
          {educationData.map((edu, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>
              
              {/* Education Card */}
              <Card className="ml-20 p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                    <h4 className="text-lg text-primary font-semibold mb-3">{edu.degree}</h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="mb-4">
                      {edu.grade}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {edu.description}
                </p>
                
                {/* Key Achievements */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-5 w-5 text-primary" />
                    <h5 className="font-semibold">Key Achievements</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <Badge key={achievement} variant="outline">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Relevant Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h5 className="font-semibold">Relevant Coursework</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <Badge key={course} variant="secondary">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;