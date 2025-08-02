import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import { Upload as UploadIcon, Mic, Video, FileText, MapPin, Languages, Camera } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [uploadType, setUploadType] = useState<"audio" | "video" | "text">("audio");
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: "Thank you for preserving tradition! 🙏",
      description: "Your contribution has been submitted and will help preserve our sacred heritage.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <UploadIcon className="text-white" size={32} />
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                Share Your Temple's Story
              </h1>
              <p className="text-lg text-muted-foreground">
                Every voice matters. Every story counts. Contribute to preserving our heritage.
              </p>
            </div>

            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm shadow-divine">
              <CardHeader>
                <CardTitle>Upload Contribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Type Selection */}
                <div className="space-y-3">
                  <Label>Choose Contribution Type</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant={uploadType === "audio" ? "divine" : "outline"}
                      onClick={() => setUploadType("audio")}
                      className="flex flex-col items-center space-y-2 h-auto py-4"
                    >
                      <Mic size={24} />
                      <span>Audio</span>
                    </Button>
                    <Button
                      variant={uploadType === "video" ? "divine" : "outline"}
                      onClick={() => setUploadType("video")}
                      className="flex flex-col items-center space-y-2 h-auto py-4"
                    >
                      <Video size={24} />
                      <span>Video</span>
                    </Button>
                    <Button
                      variant={uploadType === "text" ? "divine" : "outline"}
                      onClick={() => setUploadType("text")}
                      className="flex flex-col items-center space-y-2 h-auto py-4"
                    >
                      <FileText size={24} />
                      <span>Text</span>
                    </Button>
                  </div>
                </div>

                {/* File Upload Area */}
                {uploadType !== "text" && (
                  <div className="space-y-2">
                    <Label>Upload {uploadType === "audio" ? "Audio" : "Video"} File</Label>
                    <div className="border-2 border-dashed border-primary/20 rounded-lg p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
                      <div className="space-y-4">
                        {uploadType === "audio" ? (
                          <Mic className="mx-auto text-primary" size={48} />
                        ) : (
                          <Camera className="mx-auto text-primary" size={48} />
                        )}
                        <div>
                          <p className="text-lg font-medium mb-2">
                            Drop your {uploadType} file here or click to browse
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {uploadType === "audio" ? "MP3, WAV, M4A up to 50MB" : "MP4, MOV, AVI up to 100MB"}
                          </p>
                        </div>
                        <Button variant="outline">
                          Choose File
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Text Content */}
                {uploadType === "text" && (
                  <div className="space-y-2">
                    <Label htmlFor="textContent">Your Story</Label>
                    <Textarea
                      id="textContent"
                      placeholder="Share your temple story, tradition, or memory here..."
                      className="min-h-[200px]"
                    />
                  </div>
                )}

                {/* Temple Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="templeName" className="flex items-center space-x-2">
                      <span>🏛️</span>
                      <span>Temple Name</span>
                    </Label>
                    <Input id="templeName" placeholder="Enter temple name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="region" className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>Region</span>
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                        <SelectItem value="telangana">Telangana</SelectItem>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                        <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                        <SelectItem value="kerala">Kerala</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language" className="flex items-center space-x-2">
                      <Languages size={16} />
                      <span>Language</span>
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="telugu">Telugu</SelectItem>
                        <SelectItem value="tamil">Tamil</SelectItem>
                        <SelectItem value="kannada">Kannada</SelectItem>
                        <SelectItem value="malayalam">Malayalam</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deity" className="flex items-center space-x-2">
                      <span>🕉️</span>
                      <span>Deity Category</span>
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select deity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vishnu">Vishnu</SelectItem>
                        <SelectItem value="shiva">Shiva</SelectItem>
                        <SelectItem value="devi">Devi</SelectItem>
                        <SelectItem value="ganesha">Ganesha</SelectItem>
                        <SelectItem value="hanuman">Hanuman</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Short Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Briefly describe your contribution (festival memory, daily ritual, historical significance, etc.)"
                    className="h-20"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    variant="divine" 
                    size="lg" 
                    className="w-full"
                    onClick={handleSubmit}
                  >
                    Submit Contribution
                    <UploadIcon className="ml-2" size={20} />
                  </Button>
                </div>

                {/* Guidelines */}
                <Card className="bg-gradient-divine border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">📋 Contribution Guidelines</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Share authentic stories and experiences</li>
                      <li>• Respect temple traditions and customs</li>
                      <li>• Ensure you have permission for recordings</li>
                      <li>• Focus on positive, inspiring content</li>
                      <li>• Include local language names when possible</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;