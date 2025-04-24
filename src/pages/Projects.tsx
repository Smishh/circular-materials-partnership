
import { Building, Wrench, ArrowRight, ArrowLeft } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
          <section className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <Building className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-semibold text-primary">Design of Structures</h2>
              </div>
              
              <p className="text-lg mb-6 text-muted-foreground">
                Expert structural engineering solutions that blend innovation with reliability, 
                creating landmarks that stand the test of time.
              </p>
              
              <div className="border-l-2 border-[#D3E4FD] pl-6 py-2">
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
            </div>
            
            <div className="lg:w-1/2 bg-white/50 p-2 rounded-md border border-[#eee] shadow-sm">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <AspectRatio ratio={16/9} className="bg-muted">
                      <img 
                        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                        alt="Modern building structure" 
                        className="object-cover w-full h-full rounded-md"
                      />
                    </AspectRatio>
                  </CarouselItem>
                  <CarouselItem>
                    <AspectRatio ratio={16/9} className="bg-muted">
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
          </section>

          {/* Condition Assessment and Diagnostics */}
          <section className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <Wrench className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-semibold text-primary">Condition Assessment & Diagnostics</h2>
              </div>
              
              <p className="text-lg mb-6 text-muted-foreground">
                Comprehensive evaluation and diagnosis of structural integrity and performance.
              </p>
              
              <div className="border-l-2 border-[#D3E4FD] pl-6 py-2">
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
            </div>
            
            <div className="lg:w-1/2 bg-white/50 p-2 rounded-md border border-[#eee] shadow-sm">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <AspectRatio ratio={16/9} className="bg-muted">
                      <img 
                        src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
                        alt="Building diagnostics" 
                        className="object-cover w-full h-full rounded-md"
                      />
                    </AspectRatio>
                  </CarouselItem>
                  <CarouselItem>
                    <AspectRatio ratio={16/9} className="bg-muted">
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
