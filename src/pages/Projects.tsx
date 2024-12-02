import { Building2 } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E8EDF2] px-4 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-primary">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming infrastructure through sustainable innovation.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-6 py-12">
          <Building2 className="w-16 h-16 text-secondary" />
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <p className="text-xl font-semibold text-primary">
              Project Showcase Coming Soon
            </p>
            <p className="text-muted-foreground">
              We are preparing a comprehensive showcase of our groundbreaking infrastructure projects. Each project will be presented with detailed insights into our sustainable approaches, innovative solutions, and measurable impacts on communities and the environment.
            </p>
            <p className="text-sm text-secondary">
              Return soon to explore our portfolio of sustainable infrastructure solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;