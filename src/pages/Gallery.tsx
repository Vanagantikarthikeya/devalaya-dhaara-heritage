import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import { Volume2, Video, FileText, MapPin, Languages, Clock, Heart, Play } from "lucide-react";

const Gallery = () => {
  const sampleContent = [
    {
      id: 1,
      type: "audio",
      title: "Morning Arati at Sri Venkateswara Temple",
      temple: "Sri Venkateswara Temple",
      region: "Andhra Pradesh",
      language: "Telugu",
      deity: "Vishnu",
      duration: "3:45",
      contributor: "Raghava Sharma",
      date: "2024-01-15",
      description: "Beautiful morning prayers with traditional chants"
    },
    {
      id: 2,
      type: "video",
      title: "Diwali Celebrations at Village Temple",
      temple: "Lakshmi Devi Temple",
      region: "Karnataka",
      language: "Kannada",
      deity: "Devi",
      duration: "8:22",
      contributor: "Priya Kumari",
      date: "2024-01-10",
      description: "Traditional Diwali festivities with local community"
    },
    {
      id: 3,
      type: "text",
      title: "The Legend of Our Ancient Shiva Temple",
      temple: "Bhimeswara Temple",
      region: "Telangana",
      language: "Telugu",
      deity: "Shiva",
      contributor: "Venkata Rao",
      date: "2024-01-08",
      description: "A 500-year-old story passed down through generations"
    },
    {
      id: 4,
      type: "audio",
      title: "Hanuman Chalisa by Village Elder",
      temple: "Anjaneya Swamy Temple",
      region: "Tamil Nadu",
      language: "Tamil",
      deity: "Hanuman",
      duration: "5:12",
      contributor: "Meera Devi",
      date: "2024-01-05",
      description: "Melodious rendition by 85-year-old temple devotee"
    },
    {
      id: 5,
      type: "video",
      title: "Ganesha Festival Procession",
      temple: "Siddhivinayaka Temple",
      region: "Andhra Pradesh",
      language: "Telugu",
      deity: "Ganesha",
      duration: "12:30",
      contributor: "Suresh Babu",
      date: "2024-01-02",
      description: "Colorful Ganesha Chaturthi celebration with traditional music"
    },
    {
      id: 6,
      type: "text",
      title: "Miraculous Stories of Devi Temple",
      temple: "Kanaka Durga Temple",
      region: "Andhra Pradesh",
      language: "Telugu",
      deity: "Devi",
      contributor: "Lakshmi Devi",
      date: "2023-12-28",
      description: "Collection of divine experiences shared by devotees"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "audio":
        return <Volume2 className="text-accent" size={20} />;
      case "video":
        return <Video className="text-primary" size={20} />;
      case "text":
        return <FileText className="text-foreground" size={20} />;
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "audio":
        return "bg-accent/20 text-accent";
      case "video":
        return "bg-primary/20 text-primary";
      case "text":
        return "bg-secondary/50 text-secondary-foreground";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Temple Heritage Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the rich collection of temple stories, voices, and traditions 
              preserved by our community of guardians.
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8 bg-card/50 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Media Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="audio">Audio</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="text">Text</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Region</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All regions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                      <SelectItem value="telangana">Telangana</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Deity</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All deities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Deities</SelectItem>
                      <SelectItem value="vishnu">Vishnu</SelectItem>
                      <SelectItem value="shiva">Shiva</SelectItem>
                      <SelectItem value="devi">Devi</SelectItem>
                      <SelectItem value="ganesha">Ganesha</SelectItem>
                      <SelectItem value="hanuman">Hanuman</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Language</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All languages" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Languages</SelectItem>
                      <SelectItem value="telugu">Telugu</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="kannada">Kannada</SelectItem>
                      <SelectItem value="malayalam">Malayalam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleContent.map((item) => (
              <Card 
                key={item.id} 
                className="bg-card/50 border-primary/20 backdrop-blur-sm hover:shadow-divine transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(item.type)}
                      <Badge className={getTypeColor(item.type)}>
                        {item.type.toUpperCase()}
                      </Badge>
                    </div>
                    {item.duration && (
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Clock size={14} />
                        <span>{item.duration}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Metadata */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>🏛️</span>
                      <span className="ml-2">{item.temple}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span className="ml-2">{item.region}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Languages size={14} />
                      <span className="ml-2">{item.language}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <div className="text-sm text-muted-foreground">
                      By {item.contributor}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Heart size={14} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Play size={14} className="mr-1" />
                        {item.type === "text" ? "Read" : "Play"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;