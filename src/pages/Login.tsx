import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import { Mail, Lock, User, Phone, MapPin, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <img 
                  src="/lovable-uploads/a911a0b6-feea-4daa-a875-efaf909622f7.png" 
                  alt="Devalayala Dhaara Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h1 className="text-3xl font-bold mb-2">
                {isLogin ? t('login.title') : t('login.createAccount')}
              </h1>
              <p className="text-muted-foreground">
                {t('login.subtitle')}
              </p>
            </div>

            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm shadow-divine">
              <CardHeader>
                <CardTitle className="text-center">
                  {isLogin ? t('login.signin') : t('login.createAccount')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{t('login.fullName')}</span>
                    </Label>
                    <Input id="fullName" placeholder={t('login.fullName')} />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail size={16} />
                    <span>{t('login.email')}</span>
                  </Label>
                  <Input id="email" type="email" placeholder={t('login.email')} />
                </div>

                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="region" className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{t('login.region')}</span>
                      </Label>
                      <Input id="region" placeholder={t('login.region')} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="flex items-center space-x-2">
                        <Phone size={16} />
                        <span>{t('login.mobile')}</span>
                      </Label>
                      <Input id="mobile" placeholder={t('login.mobile')} />
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center space-x-2">
                    <Lock size={16} />
                    <span>{t('login.password')}</span>
                  </Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder={t('login.password')} 
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                  </div>
                </div>

                <Button variant="divine" className="w-full">
                  {isLogin ? t('login.signin') : t('login.createAccountBtn')}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-primary/20" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  {t('login.continueGoogle')}
                </Button>

                {isLogin && (
                  <div className="text-center">
                    <Button variant="link" className="text-sm text-primary">
                      {t('login.forgotPassword')}
                    </Button>
                  </div>
                )}

                <div className="text-center text-sm">
                  <span className="text-muted-foreground">
                    {isLogin ? t('login.noAccount') : t('login.haveAccount')}
                  </span>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? t('login.signupHere') : t('login.loginHere')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;