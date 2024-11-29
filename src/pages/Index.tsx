import { useEffect, useRef } from "react";
import { Building2, Users, Globe, ChartBar } from "lucide-react";

const Index = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-white to-secondary px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1433086966358-54859d0ed716')] bg-cover bg-center opacity-10" />
        </div>
        <div className="container mx-auto text-center z-10">
          <div ref={addToRefs} className="reveal">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Welcome to CMIG
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Circular Materials and Infrastructure Group
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Engineering sustainable solutions for tomorrow's infrastructure
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover-lift">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white px-4">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive consulting services in civil engineering and ESG implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Infrastructure Design",
                description: "Sustainable and innovative infrastructure solutions",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "ESG Consulting",
                description: "Environmental, Social, and Governance strategies",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Sustainability",
                description: "Circular economy implementation in construction",
              },
              {
                icon: <ChartBar className="w-8 h-8" />,
                title: "Performance Analysis",
                description: "Data-driven infrastructure optimization",
              },
            ].map((service, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="reveal p-6 rounded-xl bg-secondary hover-lift"
              >
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-secondary px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={addToRefs} className="reveal">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                About Us
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Engineering a Sustainable Future
              </h2>
              <p className="text-muted-foreground mb-6">
                At CMIG, we believe in creating infrastructure that serves both people and planet. Our team of experts combines civil engineering excellence with sustainable practices to deliver future-proof solutions.
              </p>
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover-lift">
                Our Story
              </button>
            </div>
            <div ref={addToRefs} className="reveal">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518107649057-3a0655e768f8"
                  alt="Sustainable Infrastructure"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white px-4">
        <div className="container mx-auto text-center">
          <div ref={addToRefs} className="reveal">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl font-bold mb-6">Start Your Project</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Ready to transform your infrastructure with sustainable solutions? Contact us to discuss your project.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover-lift">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;