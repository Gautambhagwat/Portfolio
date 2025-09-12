import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Github, Linkedin, Mail, Download } from "lucide-react";
import { useState, useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDark);
  }, [isDark]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const handleResumeDownload = async () => {
    try {
      const resumePath = "https://drive.google.com/file/d/1qR_QdHufeZ4DhRXtTFxqKwVhfCIOjPbC/view?usp=drive_link"; // place resume.pdf in public/
      const response = await fetch(resumePath, { method: "HEAD" });
      if (response.ok) {
        const link = document.createElement("a");
        link.href = resumePath;
        link.download = "Gautam_Bhagwat_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }
    } catch (_) {
      // fall back below
    }
    window.open("mailto:gautambhagwat007@gmail.com?subject=Resume Request", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Portfolio</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-6 text-sm font-medium ml-auto mr-auto">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-foreground/80 ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links & Theme Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <a
                href="https://github.com/Gautambhagwat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <a
                href="https://linkedin.com/in/gautam-bhagwat-71bbb5231"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleResumeDownload}
              aria-label="Download Resume"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Gautam Vinayak Bhagwat. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:gautambhagwat007@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="ml-2">Contact</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              Back to top ↑
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;