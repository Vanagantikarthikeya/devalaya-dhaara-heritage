import { Button } from "@/components/ui/button";
import { Languages, Home, User, Upload, Image, Info, LogIn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: "/", label: t('header.home'), icon: Home },
    { path: "/about", label: t('header.about'), icon: Info },
    { path: "/gallery", label: t('header.gallery'), icon: Image },
    { path: "/upload", label: t('header.upload'), icon: Upload },
    { path: "/profile", label: t('header.profile'), icon: User },
    { path: "/login", label: t('header.login'), icon: LogIn },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-glow">
              <img 
                src="/lovable-uploads/a911a0b6-feea-4daa-a875-efaf909622f7.png" 
                alt="Devalayala Dhaara Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                {t('header.websiteName')}
              </h1>
              <p className="text-sm text-muted-foreground">{t('header.tagline')}</p>
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

          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center space-x-2"
            onClick={toggleLanguage}
          >
            <Languages size={16} />
            <span>{t('header.language')}</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;