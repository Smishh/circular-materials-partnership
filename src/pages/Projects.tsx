
import { Building, Wrench } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
        
        <div className="space-y-24 max-w-6xl mx-auto">
          {/* Design of Structures */}
          <Card className="overflow-hidden bg-white/50 border border-[#eee] shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Image section - reduced by 50% */}
                <div className="md:w-1/3 shrink-0 mx-auto md:mx-0" style={{ maxWidth: "50%" }}>
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <AspectRatio ratio={4/3} className="bg-muted">
                          <img 
                            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                            alt="Modern building structure" 
                            className="object-cover w-full h-full rounded-md"
                          />
                        </AspectRatio>
                      </CarouselItem>
                      <CarouselItem>
                        <AspectRatio ratio={4/3} className="bg-muted">
                          <img 
                            src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4" 
                            alt="Glass roof architecture" 
                            className="object-cover w-full h-full rounded-md"
                          />
                        </AspectRatio>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
                
                {/* Content section */}
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <Building className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-semibold text-primary">Design of Structures</h2>
                  </div>
                  
                  <p className="text-lg mb-6 text-muted-foreground">
                    Expert structural engineering solutions that blend innovation with reliability, 
                    creating landmarks that stand the test of time. Our team of experienced engineers 
                    develops comprehensive design solutions for various structures including buildings, 
                    bridges, industrial facilities, and specialized constructions.
                  </p>
                  
                  <div className="border-l-2 border-[#D3E4FD] pl-6 py-2 mb-6">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Advanced structural analysis and modeling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Sustainable infrastructure development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Custom architectural solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Earthquake-resistant design</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-muted-foreground">
                    Our structural design services encompass everything from conceptual design to detailed 
                    engineering and construction support. We pride ourselves on creating efficient, 
                    safe, and aesthetically pleasing structures that meet all regulatory requirements 
                    while minimizing environmental impact.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Condition Assessment and Diagnostics */}
          <Card className="overflow-hidden bg-white/50 border border-[#eee] shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Image section - reduced by 50% */}
                <div className="md:w-1/3 shrink-0 mx-auto md:mx-0" style={{ maxWidth: "50%" }}>
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <AspectRatio ratio={4/3} className="bg-muted">
                          <img 
                            src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
                            alt="Building diagnostics" 
                            className="object-cover w-full h-full rounded-md"
                          />
                        </AspectRatio>
                      </CarouselItem>
                      <CarouselItem>
                        <AspectRatio ratio={4/3} className="bg-muted">
                          <img 
                            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
                            alt="Infrastructure assessment" 
                            className="object-cover w-full h-full rounded-md"
                          />
                        </AspectRatio>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
                
                {/* Content section */}
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <Wrench className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-semibold text-primary">Condition Assessment & Diagnostics</h2>
                  </div>
                  
                  <p className="text-lg mb-6 text-muted-foreground">
                    Comprehensive evaluation and diagnosis of structural integrity and performance. 
                    Our assessment services help identify potential issues before they become major problems, 
                    ensuring the longevity and safety of your structures while optimizing maintenance costs.
                  </p>
                  
                  <div className="border-l-2 border-[#D3E4FD] pl-6 py-2 mb-6">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Structural health monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Material testing and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Deterioration assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Rehabilitation recommendations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-muted-foreground">
                    We utilize cutting-edge technology including non-destructive testing, drone inspections, 
                    and advanced modeling techniques to provide accurate assessments of structural conditions. 
                    Our reports include detailed findings, risk evaluations, and practical recommendations 
                    for maintenance, repair, or rehabilitation strategies tailored to each unique situation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
