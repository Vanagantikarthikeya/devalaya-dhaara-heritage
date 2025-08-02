import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Heart, Users, Globe, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-white text-3xl">🕉</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
                Why Devalayala Dhaara?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Preserving the sacred voices and stories of rural temples across India, 
                one contribution at a time.
              </p>
            </div>

            {/* Mission Statement */}
            <Card className="mb-12 bg-gradient-divine border-primary/20 shadow-divine">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Sacred Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                  In the heart of rural India, thousands of ancient temples hold stories that have never been told, 
                  prayers that echo through generations, and traditions that risk being lost forever. Devalayala Dhaara 
                  is not just a platform—it's a movement to preserve our spiritual heritage through the authentic voices 
                  of those who live and breathe these sacred spaces.
                </p>
              </CardContent>
            </Card>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:shadow-divine transition-all duration-300">
                <CardContent className="p-8">
                  <Heart className="text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-4">Authentic Voices</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that the most powerful stories come from the people who live them. 
                    Every priest, devotee, and community member has a unique perspective that deserves to be heard.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:shadow-divine transition-all duration-300">
                <CardContent className="p-8">
                  <Users className="text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This platform belongs to the community. Every contribution, every story, 
                    and every voice adds to our collective heritage and strengthens our spiritual bonds.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:shadow-divine transition-all duration-300">
                <CardContent className="p-8">
                  <Globe className="text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-4">Cultural Preservation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rural temples are repositories of local culture, language, and traditions. 
                    By documenting these spaces, we preserve not just buildings, but entire ways of life.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:shadow-divine transition-all duration-300">
                <CardContent className="p-8">
                  <Sparkles className="text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-4">Future Generations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're not just preserving the past—we're creating a bridge to the future. 
                    These recorded voices will inspire and guide generations yet to come.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Inspirational Quotes */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gradient-hero text-white shadow-divine">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">📜</div>
                  <h3 className="text-xl font-bold mb-2">Your story is a scripture</h3>
                  <p className="text-white/80 text-sm">
                    Every tale you share becomes a sacred text for future devotees
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent text-accent-foreground shadow-divine">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold mb-2">Echo the past. Inspire the future</h3>
                  <p className="text-accent-foreground/80 text-sm">
                    Bridge generations through the power of your voice
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary text-secondary-foreground shadow-divine">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-2">One voice. One temple. A thousand memories</h3>
                  <p className="text-secondary-foreground/80 text-sm">
                    Small contributions create lasting legacies
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-divine border-primary/20 shadow-divine">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Whether you're a temple priest, a regular devotee, or someone passionate about preserving culture, 
                  your voice matters. Every contribution helps build a living archive of our spiritual heritage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2,000+</div>
                    <div className="text-sm text-muted-foreground">Contributors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15,000+</div>
                    <div className="text-sm text-muted-foreground">Stories Preserved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Temples Documented</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;