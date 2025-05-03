import { useEffect, useRef } from "react";
import { Building2, Recycle, LineChart, Car, Mail, Phone, List, Briefcase } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LogoPatternBackground from "@/components/LogoPatternBackground";
const Index = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      threshold: 0.1
    });
    revealRefs.current.forEach(ref => observer.observe(ref));
    return () => {
      observer.disconnect();
    };
  }, []);
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return <div className="min-h-screen">
      {/* Hero Section - reduced height */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background image with darker overlay for better contrast */}
        <div className="absolute inset-0 w-full h-full">
          {/* Using new image as background overlay with reduced opacity */}
          <div className="absolute inset-0 bg-cover bg-center z-[2]" style={{
          backgroundImage: `url("/lovable-uploads/1ea32cab-fe93-4387-967e-900cd2803011.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7
        }}></div>
          {/* Adding a dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black opacity-40 z-[3]"></div>
        </div>
        
        <div className="container mx-auto text-center z-10">
          <div ref={addToRefs} className="reveal">
            <div className="inline-block p-3 rounded-2xl bg-white/80 backdrop-blur-sm mb-4">
              <img src="/lovable-uploads/8a8c6a80-5bd8-48bf-aa22-01e80ef02631.png" alt="CMIG Logo" className="w-24 h-24 md:w-28 md:h-28" />
            </div>
            
            <h1 className="text-3xl font-bold mb-6 tracking-tight drop-shadow-lg text-blue-50 md:text-5xl">
              Circular Materials and<br />Infrastructure Group
            </h1>
            {/* Refined white strip with improved typography and spacing - reduced padding */}
            <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm py-4 px-6 md:px-8 rounded-xl shadow-md">
              <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-800">Welcome to Circular Materials and Infrastructure Group - a built environment engineering company specializing in civil structural engineering and process engineering. We are committed to shaping sustainable infrastructure through innovative technologies and a people-centric approach. Our services include design, condition assessment, maintenance, asset management, eco-friendly materials, and optimized processes.

              <br /><br />
Explore our Knowledge Center for industry insights and our Materials Eco Store for sustainable construction products. By partnering with us, you can benefit from our expertise in delivering solutions that prioritize sustainability, resilience, and environmental responsibility. Together, we can build resilient infrastructure while minimizing environmental impact.</p>
            </div>
            <button className="mt-6 bg-secondary text-white px-6 py-2 rounded-lg hover:bg-primary transition-colors shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white px-4 relative">
        <LogoPatternBackground />
        <div className="container mx-auto relative z-10">
          <div ref={addToRefs} className="reveal text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for sustainable infrastructure and materials engineering
            </p>
          </div>

          {/* Civil and Structural Engineering Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Civil and Structural Engineering</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#D3E4FD] to-[#A2C4F5] hover:from-[#C0D6F3] hover:to-[#8EB3E6] transition-colors hover-lift">
                <AspectRatio ratio={16 / 9}>
                  <img src="/lovable-uploads/6c30ec4f-0271-4741-9de2-bd883671e9d6.png" alt="Structural Design" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><Building2 className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Structural Design</h3>
                  <p className="text-muted-foreground">We take responsibility for the design of structures on your project, from planning, concept design, detailed design, supervision and completion. Review our previous projects here. </p>
                </div>
              </div>

              {/* Buildings and Residential Design card */}
              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#F2FCE2] to-[#C6E6C5] hover:from-[#E2ECD2] hover:to-[#B6D6B5] transition-colors hover-lift">
                <AspectRatio ratio={16 / 9}>
                  <img src="/lovable-uploads/5fe76a79-f29c-4467-934a-a64555a3ba9e.png" alt="Buildings and Residential Design" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><Building2 className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Buildings and Residential Design</h3>
                  <p className="text-muted-foreground">Comprehensive residential design with sustainable building systems</p>
                </div>
              </div>

              {/* Transportation Engineering card */}
              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#F2FCE2] to-[#C6E6C5] hover:from-[#E2ECD2] hover:to-[#B6D6B5] transition-colors hover-lift">
                <AspectRatio ratio={16 / 9}>
                  <img src="/lovable-uploads/b5ec8f1c-16d7-44f7-a423-a79f6984dfc3.png" alt="Transportation Engineering" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><Car className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Transportation Engineering</h3>
                  <p className="text-muted-foreground">Transport Impact Assessment, Master Planning, and Road Safety Audits</p>
                </div>
              </div>

              {/* Structural Integrity card */}
              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#D3E4FD] to-[#A2C4F5] hover:from-[#C0D6F3] hover:to-[#8EB3E6] transition-colors hover-lift">
                <AspectRatio ratio={16 / 9}>
                  <img src="/lovable-uploads/1d16b99d-61e6-4bba-925c-bebe7c85e4b1.png" alt="Structural Integrity" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><Building2 className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Structural Integrity, Durability and Maintenance of Structures</h3>
                  <p className="text-muted-foreground">Civil Engineering, Condition Assessments, and Asset Management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Management Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Project Management</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#F5E1C1] to-[#E8D0A9] hover:from-[#E8D0A9] hover:to-[#D6BF97] transition-colors hover-lift">
                <AspectRatio ratio={16 / 9}>
                  <img src="/lovable-uploads/03cef32f-160f-4cbc-8a75-a0b6e2283011.png" alt="Project Planning & Control" className="object-cover w-full h-full object-center brightness-95 contrast-105" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><List className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Project Planning & Control</h3>
                  <p className="text-muted-foreground">Strategic project planning, scheduling, and monitoring for optimal delivery</p>
                </div>
              </div>

              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#F5E1C1] to-[#E8D0A9] hover:from-[#E8D0A9] hover:to-[#D6BF97] transition-colors hover-lift">
                <AspectRatio ratio={16 / 9}>
                  <img src="/lovable-uploads/729ce36c-0ff7-4e6c-8fe7-e6b0345e37c1.png" alt="Construction Management" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><Briefcase className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Construction Management</h3>
                  <p className="text-muted-foreground">Comprehensive construction supervision and contract administration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability and Process Engineering Section */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Sustainability and Process Engineering</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#C6E6D4] to-[#A3D1B8] hover:from-[#B4D6C5] hover:to-[#91C3A6] transition-colors hover-lift">
                <AspectRatio ratio={16 / 9}>
                  <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b" alt="Sustainability Engineering" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><Recycle className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Sustainability Engineering</h3>
                  <p className="text-muted-foreground">Life Cycle Assessment, Carbon Footprinting, and Carbon Tax Consulting</p>
                </div>
              </div>

              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#C6E6D4] to-[#A3D1B8] hover:from-[#B4D6C5] hover:to-[#91C3A6] transition-colors hover-lift">
                <AspectRatio ratio={16 / 9}>
                  <img src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3" alt="Process Engineering" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><LineChart className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Mining and Industrial Waste Beneficiation</h3>
                  <p className="text-muted-foreground">Industrial Waste Utilization and Construction Materials Advisory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-accent px-4">
        <div className="container mx-auto text-center">
          <div ref={addToRefs} className="reveal">
            <h2 className="text-4xl font-bold mb-6 text-primary">Contact Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Ready to transform your infrastructure with sustainable solutions? Get in touch with our team.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-2xl mx-auto">
              <a href="mailto:info@cmig.co.za" className="flex items-center justify-center gap-2 text-secondary hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                info@cmig.co.za
              </a>
              <a href="tel:+27640360874" className="flex items-center justify-center gap-2 text-secondary hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                +27 64 036 0874
              </a>
              <a href="https://wa.me/27640360874" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-secondary hover:text-primary transition-colors" aria-label="Contact us on WhatsApp">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="https://web.facebook.com/profile.php?id=61552525100177" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-secondary hover:text-primary transition-colors" aria-label="Follow us on Facebook">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;