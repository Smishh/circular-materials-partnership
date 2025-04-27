
import { useEffect, useRef, useState } from "react";
import { Building2, Recycle, LineChart, Car, Mail, Phone, List, Briefcase } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const lastScrollY = useRef(0);
  const backgroundImages = ['/lovable-uploads/12b8048d-295a-4ba8-b101-a4fed50412d0.png', '/lovable-uploads/adcaf296-1897-4def-858c-28106bd1a920.png'];
  
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
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) > 50) {
        setCurrentImageIndex(prev => prev === 0 ? 1 : 0);
        lastScrollY.current = currentScrollY;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background images container */}
        <div className="absolute inset-0 w-full h-full">
          {backgroundImages.map((image, index) => (
            <div 
              key={image} 
              className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${index === currentImageIndex ? 'translate-x-0' : 'translate-x-full'}`} 
              style={{
                backgroundImage: `url("${image}")`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: index === currentImageIndex ? 1 : 0
              }} 
            />
          ))}
          {/* Gradient overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[2]"></div>
        </div>
        
        <div className="container mx-auto text-center z-10">
          <div ref={addToRefs} className="reveal">
            <div className="inline-block p-4 rounded-2xl bg-white/80 backdrop-blur-sm mb-6">
              <img src="/lovable-uploads/8a8c6a80-5bd8-48bf-aa22-01e80ef02631.png" alt="CMIG Logo" className="w-32 h-32" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white drop-shadow-lg">
              Circular Materials and<br />Infrastructure Group
            </h1>
            {/* Refined white strip with improved typography and spacing */}
            <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm py-6 px-8 md:px-12 rounded-xl shadow-md">
              <p className="text-base md:text-lg text-primary/90 font-normal leading-relaxed">
                Welcome to Circular Materials and Infrastructure Group - a built environment engineering company specializing in civil structural engineering and process engineering. We are committed to shaping sustainable infrastructure through sustainable engineering, innovative technologies, and a people-centric approach. Our services include design, condition assessment, maintenance, asset management, eco-friendly materials, and optimized processes. Explore our Knowledge Center for industry insights and our Materials Eco Store for sustainable construction products. Partner with us to build resilient infrastructure while minimizing environmental impact.
              </p>
            </div>
            <button className="mt-10 bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary transition-colors shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white px-4">
        <div className="container mx-auto">
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
                <AspectRatio ratio={16/9}>
                  <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" alt="Structural Design" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><Building2 className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Structural Design</h3>
                  <p className="text-muted-foreground">Innovative structural solutions for buildings and infrastructure</p>
                </div>
              </div>

              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#D3E4FD] to-[#A2C4F5] hover:from-[#C0D6F3] hover:to-[#8EB3E6] transition-colors hover-lift">
                <AspectRatio ratio={16/9}>
                  <img src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" alt="Structural Integrity" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><Building2 className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Structural Integrity, Durability and Maintenance of Structures</h3>
                  <p className="text-muted-foreground">Civil Engineering, Condition Assessments, and Asset Management</p>
                </div>
              </div>

              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#D3E4FD] to-[#A2C4F5] hover:from-[#C0D6F3] hover:to-[#8EB3E6] transition-colors hover-lift">
                <AspectRatio ratio={16/9}>
                  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Transportation Engineering" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><Car className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Transportation Engineering</h3>
                  <p className="text-muted-foreground">Transport Impact Assessment, Master Planning, and Road Safety Audits</p>
                </div>
              </div>

              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#D3E4FD] to-[#A2C4F5] hover:from-[#C0D6F3] hover:to-[#8EB3E6] transition-colors hover-lift">
                <AspectRatio ratio={16/9}>
                  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Buildings and Residential Design" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><Building2 className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Buildings and Residential Design</h3>
                  <p className="text-muted-foreground">Residential and Municipal Infrastructure Design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Management Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Project Management</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#F5E1C1] to-[#E8D0A9] hover:from-[#E8D0A9] hover:to-[#D6BF97] transition-colors hover-lift">
                <AspectRatio ratio={16/9}>
                  <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" alt="Project Planning & Control" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><List className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Project Planning & Control</h3>
                  <p className="text-muted-foreground">Strategic project planning, scheduling, and monitoring for optimal delivery</p>
                </div>
              </div>

              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#F5E1C1] to-[#E8D0A9] hover:from-[#E8D0A9] hover:to-[#D6BF97] transition-colors hover-lift">
                <AspectRatio ratio={16/9}>
                  <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843" alt="Construction Management" className="object-cover w-full h-full" />
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
                <AspectRatio ratio={16/9}>
                  <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b" alt="Sustainability Engineering" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><Recycle className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Sustainability Engineering</h3>
                  <p className="text-muted-foreground">Life Cycle Assessment, Carbon Footprinting, and Carbon Tax Consulting</p>
                </div>
              </div>

              <div ref={addToRefs} className="reveal rounded-xl overflow-hidden bg-gradient-to-br from-[#C6E6D4] to-[#A3D1B8] hover:from-[#B4D6C5] hover:to-[#91C3A6] transition-colors hover-lift">
                <AspectRatio ratio={16/9}>
                  <img src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3" alt="Process Engineering" className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-6">
                  <div className="mb-4 text-primary"><LineChart className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Process Engineering</h3>
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
    </div>
  );
};

export default Index;
