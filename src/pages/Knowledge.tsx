
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

type Article = {
  id: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
};

const articles: Article[] = [
  {
    id: "self-builders",
    title: "Empowering Self-Builders with Affordable Structural Engineering",
    subtitle: "Building safe, durable homes that last generations",
    content: (
      <>
        <section>
          <div className="mb-8">
            <img 
              src="/lovable-uploads/798d2ce3-e364-47a1-9ed5-c7f7f538ea2f.png" 
              alt="A self-built house with clay walls and tiled roof" 
              className="w-full h-auto rounded-lg shadow-md" 
            />
          </div>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">The Challenge for Self-Builders</h2>
          <p className="mb-4">
            Creating your own home is an admirable achievement, but it comes with significant challenges. 
            At CMIG Engineering Solutions, we understand that navigating the complex world of structural 
            requirements can be daunting, especially when resources are limited.
          </p>
          <p className="mb-4">
            Our research shows that self-building is the primary method of housing procurement for many 
            individuals and families in South Africa and surrounding countries, particularly in 
            resource-constrained environments. However, without proper structural engineering guidance, 
            these self-built homes often lack the durability, safety, and resilience needed to withstand 
            environmental hazards and the test of time.
          </p>
          <p className="mb-4">
            We firmly believe that every self-builder deserves access to high-quality, affordable 
            structural engineering expertise. That's where CMIG comes in.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">How CMIG Supports Your Building Journey</h2>
          
          <h3 className="text-xl font-medium text-primary mt-6 mb-3">1. Tailored Structural Solutions</h3>
          <p className="mb-2">Our experienced engineering team specializes in creating structural designs that:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Optimize material usage while ensuring structural integrity</li>
            <li>Work with locally available materials and construction methods</li>
            <li>Accommodate phased construction as resources become available</li>
            <li>Meet rigorous safety standards without unnecessary costs</li>
          </ul>
          
          <div className="my-8">
            <img 
              src="/lovable-uploads/7d191279-c6af-47a9-ba3b-626fb8ceca5b.png" 
              alt="A construction worker measuring a window frame on a self-built house" 
              className="w-full h-auto rounded-lg shadow-md" 
            />
          </div>
          
          <h3 className="text-xl font-medium text-primary mt-6 mb-3">2. Practical Knowledge Transfer</h3>
          <p className="mb-2">We go beyond just providing plans - we empower you with the knowledge to build with confidence:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Simplified construction guides with clear visual references</li>
            <li>On-site training for critical structural elements</li>
            <li>Accessible digital support tools via smartphone</li>
            <li>Workshops for local artisans and contractors working with you</li>
          </ul>
          
          <h3 className="text-xl font-medium text-primary mt-6 mb-3">3. Budget Optimization</h3>
          <p className="mb-2">Our expertise helps you make the most of limited resources through:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Material quantity optimization to minimize waste</li>
            <li>Alternative structural approaches that maintain safety at a lower cost</li>
            <li>Standardized elements that simplify construction</li>
            <li>Strategic allocation of resources to the most critical structural components</li>
          </ul>
          
          <h3 className="text-xl font-medium text-primary mt-6 mb-3">4. Collaborative Design Process</h3>
          <p className="mb-2">We work closely with you to ensure solutions match your unique needs:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Participatory design sessions that honour your knowledge and preferences</li>
            <li>Adaptation of technical solutions to your cultural context</li>
            <li>Flexible approaches that respect your timeline and available resources</li>
            <li>Clear communication that bridges technical and practical knowledge</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Specialized Services</h2>
          
          <h3 className="text-xl font-medium text-primary mt-6 mb-3">Initial Consultation and Site Assessment</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Evaluation of local conditions and constraints</li>
            <li>In-depth understanding of your specific needs and resources</li>
            <li>Identification of potential structural challenges and opportunities</li>
          </ul>
          
          <h3 className="text-xl font-medium text-primary mt-6 mb-3">Customized Structural Designs</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Complete structural plans tailored to your specific context</li>
            <li>Foundation designs optimized for local soil conditions</li>
            <li>Safe, efficient roof structures engineered for your environment</li>
            <li>Phased building plans for incremental construction as resources allow</li>
          </ul>
          
          <h3 className="text-xl font-medium text-primary mt-6 mb-3">Technical Support Packages</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Simplified step-by-step construction manuals</li>
            <li>Clear visual references for critical structural elements</li>
            <li>Detailed material quantity calculations and procurement advice</li>
            <li>Quality control checklists for each construction phase</li>
          </ul>
          
          <h3 className="text-xl font-medium text-primary mt-6 mb-3">Knowledge-Building Workshops</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Hands-on training in essential structural principles and techniques</li>
            <li>In-depth understanding of the "why" behind structural requirements</li>
            <li>Skill development for local builders and construction teams</li>
            <li>Collaborative problem-solving sessions for site-specific challenges</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Success Stories</h2>
          
          <div className="bg-accent p-4 rounded-md mb-4 shadow-sm">
            <h3 className="text-lg font-medium mb-2">House Mdluli</h3>
            <blockquote className="pl-4 border-l-4 border-secondary italic">
              Facing a steeply sloped site and seasonal flooding, the Mdluli family needed an affordable foundation 
              solution to provide stability. Our engineers developed a modified a building system using locally 
              sourced materials, delivering excellent structural performance at 20% lower cost than conventional 
              approaches with minimal waste.
            </blockquote>
          </div>
          
          <div className="bg-accent p-4 rounded-md mb-4 shadow-sm">
            <h3 className="text-lg font-medium mb-2">Yakhumuzi Hardware</h3>
            <blockquote className="pl-4 border-l-4 border-secondary italic">
              Working with this family owned business, CMIG provided standardized structural designs to enable 
              resource and knowledge sharing. Our workshop series trained local builders in critical construction 
              techniques, resulting in safer homes and valuable skills that uplifted the entire community.
            </blockquote>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Why Choose CMIG?</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Experience</strong>: Over 25 years of combined experience working with self-builders in diverse environments</li>
            <li><strong>Innovation</strong>: Constant research and development of new approaches to make structural engineering more accessible</li>
            <li><strong>Respect</strong>: We value your knowledge and collaborate to find contextually appropriate solutions</li>
            <li><strong>Commitment</strong>: We believe every home, regardless of budget, deserves structural integrity and safety</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Get Started with Expert Support</h2>
          <p className="mb-4">
            Ready to begin your self-build journey with the guidance of experienced structural engineers? 
            Contact CMIG Engineering Solutions today to schedule your initial consultation.
          </p>
          <p className="mb-6">
            Let's take the first step together toward building a home that is not only affordable but safe, 
            durable, and tailored to your unique needs and aspirations.
          </p>
          
          <div className="bg-muted p-6 rounded-lg shadow-sm">
            <p className="mb-2"><strong>Email</strong>: info@cmig.com</p>
            <p className="mb-2"><strong>Phone</strong>: +27 64 036 0874</p>
            <p className="mb-2"><strong>Web</strong>: www.cmig.com</p>
            <p className="mt-4 italic font-medium">CMIG Engineering Solutions - Building Foundations for Better Lives</p>
          </div>
        </section>
      </>
    )
  },
  {
    id: "future-article-1",
    title: "Structural Solutions for Challenging Terrain",
    subtitle: "Building safely on slopes, floodplains, and unstable soils",
    content: <p>Article content coming soon...</p>
  },
  {
    id: "future-article-2",
    title: "Material Selection for Durability and Sustainability",
    subtitle: "Making informed choices for long-lasting structures",
    content: <p>Article content coming soon...</p>
  }
];

const Knowledge = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {selectedArticle ? (
        <Card className="w-full max-w-4xl mx-auto shadow-md">
          <CardContent className="p-8">
            <div className="mb-4">
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 pl-0" 
                onClick={handleBackClick}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Button>
            </div>
            <article className="prose prose-slate max-w-none">
              <h1 className="text-3xl font-bold text-primary mb-2">{selectedArticle.title}</h1>
              <p className="text-lg italic text-muted-foreground mb-6">{selectedArticle.subtitle}</p>
              
              <Separator className="my-6" />
              
              {selectedArticle.content}
            </article>
          </CardContent>
        </Card>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-primary mb-8 text-center">Knowledge Centre</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {articles.map((article) => (
              <Card 
                key={article.id}
                className="hover:shadow-md transition-shadow duration-300 hover-lift cursor-pointer"
                onClick={() => handleArticleClick(article)}
              >
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-primary mb-2">{article.title}</h2>
                  <p className="text-muted-foreground text-sm">{article.subtitle}</p>
                  <div className="mt-4 text-sm text-right">
                    <span className="text-secondary font-medium">Read Article →</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Knowledge;
