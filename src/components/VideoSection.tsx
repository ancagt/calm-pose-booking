import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    id: 1,
    title: "Morning Flow - Energizing Sequence",
    duration: "25 min",
    level: "Beginner",
    thumbnail: "https://img.youtube.com/vi/v7AYKMP6rOE/maxresdefault.jpg",
    videoId: "v7AYKMP6rOE"
  },
  {
    id: 2,
    title: "Sunset Relaxation - Wind Down",
    duration: "30 min",
    level: "All Levels",
    thumbnail: "https://img.youtube.com/vi/oBu-pQG6sTY/maxresdefault.jpg",
    videoId: "oBu-pQG6sTY"
  },
  {
    id: 3,
    title: "Strength & Flow - Build Power",
    duration: "45 min",
    level: "Intermediate",
    thumbnail: "https://img.youtube.com/vi/Eml2xnoLpYE/maxresdefault.jpg",
    videoId: "Eml2xnoLpYE"
  }
];

export const VideoSection = () => {
  return (
    <section id="videos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Practice at Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enjoy our curated collection of yoga videos, perfect for practitioners of all levels
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 group cursor-pointer">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {video.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="bg-sage-light text-sage px-2 py-1 rounded-full">
                    {video.level}
                  </span>
                  <span>{video.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};