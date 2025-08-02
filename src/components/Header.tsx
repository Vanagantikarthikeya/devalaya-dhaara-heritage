import { Button } from "@/components/ui/button";
import { Languages, Home, User, Upload, Image, Info, LogIn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/gallery", label: "Gallery", icon: Image },
    { path: "/upload", label: "Upload", icon: Upload },
    { path: "/profile", label: "Profile", icon: User },
    { path: "/login", label: "Login", icon: LogIn },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-xl">🕉</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Devalayala Dhaara
              </h1>
              <p className="text-sm text-muted-foreground">Temple Voices Stream</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Languages size={16} />
            <span>తెలుగు</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;