import { ImageIcon } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E8EDF2] px-4 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-primary">
            Project Gallery
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our innovative infrastructure and sustainable material solutions.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-6 py-12">
          <ImageIcon className="w-16 h-16 text-secondary" />
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <p className="text-xl font-semibold text-primary">
              Our Gallery is Being Curated
            </p>
            <p className="text-muted-foreground">
              We are carefully curating an extensive collection of our most impactful projects and innovative solutions. Soon, this space will showcase our commitment to sustainable infrastructure through high-quality visuals and detailed case studies.
            </p>
            <p className="text-sm text-secondary">
              Check back soon for an immersive visual journey through our work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;