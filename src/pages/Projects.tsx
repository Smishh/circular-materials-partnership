
import { Building2, Construction, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Design of Structures */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <Construction className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Design of Structures</CardTitle>
              </div>
              <CardDescription className="text-base">
                Innovative structural design solutions for modern infrastructure challenges.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Building and infrastructure design</li>
                <li>• Structural analysis and optimization</li>
                <li>• Sustainable construction solutions</li>
                <li>• Seismic design and retrofitting</li>
              </ul>
            </CardContent>
          </Card>

          {/* Condition Assessment and Diagnostics */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <Wrench className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Condition Assessment & Diagnostics</CardTitle>
              </div>
              <CardDescription className="text-base">
                Comprehensive evaluation and diagnosis of structural integrity and performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Structural health monitoring</li>
                <li>• Material testing and analysis</li>
                <li>• Deterioration assessment</li>
                <li>• Rehabilitation recommendations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
