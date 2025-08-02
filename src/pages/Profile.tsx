import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { User, MapPin, Mail, Calendar, Award, Volume2, Video, FileText, Edit } from "lucide-react";

const Profile = () => {
  const userData = {
    name: "Raghava Sharma",
    region: "Andhra Pradesh",
    email: "raghava.sharma@gmail.com",
    joinDate: "March 15, 2024",
    totalContributions: 47,
    audioContributions: 23,
    videoContributions: 12,
    textContributions: 12,
    streak: 127
  };

  const badges = [
    { name: "Temple Guardian", icon: "🏛️", earned: true },
    { name: "Story Preserver", icon: "📜", earned: true },
    { name: "Voice of Heritage", icon: "🎙️", earned: true },
    { name: "Video Chronicle", icon: "🎬", earned: false },
    { name: "Master Contributor", icon: "👑", earned: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <Card className="mb-8 bg-gradient-divine border-primary/20 shadow-divine">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                    <User size={64} className="text-white" />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h1 className="text-3xl font-bold text-foreground mb-2 md:mb-0">
                        {userData.name}
                      </h1>
                      <Button variant="outline" size="sm">
                        <Edit size={16} className="mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                    
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <MapPin size={16} />
                        <span>{userData.region}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Mail size={16} />
                        <span>{userData.email}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Calendar size={16} />
                        <span>Joined {userData.joinDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contribution Stats */}
              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="text-primary" size={24} />
                    <span>Contribution Statistics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {userData.totalContributions}
                    </div>
                    <p className="text-muted-foreground">Total Contributions</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Volume2 className="text-accent" size={20} />
                        <span>Audio</span>
                      </div>
                      <span className="font-semibold">{userData.audioContributions}</span>
                    </div>
                    <Progress value={(userData.audioContributions / userData.totalContributions) * 100} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Video className="text-primary" size={20} />
                        <span>Video</span>
                      </div>
                      <span className="font-semibold">{userData.videoContributions}</span>
                    </div>
                    <Progress value={(userData.videoContributions / userData.totalContributions) * 100} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileText className="text-foreground" size={20} />
                        <span>Text</span>
                      </div>
                      <span className="font-semibold">{userData.textContributions}</span>
                    </div>
                    <Progress value={(userData.textContributions / userData.totalContributions) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Badges & Achievements */}
              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="text-accent" size={24} />
                    <span>Badges & Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {badges.map((badge, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border text-center transition-all duration-300 ${
                          badge.earned
                            ? "bg-primary/10 border-primary/20 shadow-glow"
                            : "bg-muted/10 border-muted/20 opacity-50"
                        }`}
                      >
                        <div className="text-2xl mb-2">{badge.icon}</div>
                        <h3 className="font-semibold text-sm">{badge.name}</h3>
                        {badge.earned && (
                          <Badge variant="secondary" className="mt-2 text-xs">
                            Earned
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Streak */}
            <Card className="mt-8 bg-gradient-hero text-white shadow-divine">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🔥</div>
                <h2 className="text-3xl font-bold mb-2">{userData.streak} Day Streak</h2>
                <p className="text-white/80 mb-6">
                  You're on fire! Keep contributing to maintain your streak.
                </p>
                <Button variant="secondary" size="lg">
                  Continue Streak
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;