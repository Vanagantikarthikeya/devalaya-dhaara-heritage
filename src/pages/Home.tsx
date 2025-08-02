import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { ArrowRight, Flame, Heart, Shield, Volume2, Video, FileText, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-divine"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
              A Living Stream of Temple Voices
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Preserve your temple's story in your voice.
            </p>
            <Link to="/upload">
              <Button variant="divine" size="lg" className="mb-8">
                Contribute Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            {/* Streak Counter */}
            <Card className="inline-block bg-card/50 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Flame className="text-accent" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-accent">127</p>
                    <p className="text-sm text-muted-foreground">Day Contribution Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 bg-gradient-divine">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Why This Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:shadow-divine transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Heart className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-4">Sacred Heritage</h3>
                <p className="text-muted-foreground">
                  Every temple holds centuries of stories, prayers, and traditions that risk being lost forever.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:shadow-divine transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Volume2 className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-4">Living Voices</h3>
                <p className="text-muted-foreground">
                  The voices of devotees, priests, and elders carry the soul of our spiritual heritage.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:shadow-divine transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Shield className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-4">Future Generations</h3>
                <p className="text-muted-foreground">
                  Preserve these treasures for our children and their children to experience and cherish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hear the Voices Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Hear the Voices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "Audio", icon: Volume2, count: "1,247", color: "text-accent" },
              { type: "Video", icon: Video, count: "892", color: "text-primary" },
              { type: "Stories", icon: FileText, count: "2,156", color: "text-foreground" }
            ].map((item) => (
              <Card key={item.type} className="bg-card border-primary/20 hover:shadow-divine transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <item.icon className={`mx-auto mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`} size={48} />
                  <h3 className="text-2xl font-bold mb-2">{item.count}</h3>
                  <p className="text-muted-foreground">{item.type} Contributions</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Be a Temple Guardian Section */}
      <section className="py-16 bg-gradient-divine">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Be a Temple Guardian
          </h2>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of devotees who are preserving our sacred heritage, one story at a time.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <Star className="mx-auto mb-2 text-accent" size={32} />
                <p className="font-semibold">Your story is a scripture</p>
              </div>
              <div>
                <Star className="mx-auto mb-2 text-accent" size={32} />
                <p className="font-semibold">Echo the past. Inspire the future</p>
              </div>
              <div>
                <Star className="mx-auto mb-2 text-accent" size={32} />
                <p className="font-semibold">One voice. One temple. A thousand memories</p>
              </div>
            </div>
            <Link to="/upload">
              <Button variant="golden" size="lg">
                Start Contributing Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;