import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:gautambhagwat007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
    toast({
      title: "Message Sent!",
      description: "Your email client has been opened. Thank you for reaching out!"
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, label: "Email", value: "gautambhagwat007@gmail.com", href: "mailto:gautambhagwat007@gmail.com" },
    { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+91-7820805770", href: "tel:+917820805770" },
    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Pune, Maharashtra, India", href: "#" }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/Gautambhagwat" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com/in/gautam-bhagwat-71bbb5231" }
  ];

  return (
    <div className="min-h-screen py-0 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full animate-bounce-in"></div>
        </div>
        <div className="mx-auto max-w-6xl text-center relative z-10 animate-enter">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Get In Touch</h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's connect.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-card animate-enter">
            <div className="flex items-center gap-2 mb-6">
              <Send className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Send a Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or just say hi!" rows={6} required />
              </div>
              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 shadow-card animate-enter">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href && info.href !== "#" ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-8 shadow-card animate-enter">
              <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button key={index} variant="outline" size="lg" asChild className="flex-1">
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      {social.icon}
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Connect with me on social media for updates and insights!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;