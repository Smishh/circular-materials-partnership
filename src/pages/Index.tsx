import { useEffect, useRef } from "react";
import { Building2, Recycle, LineChart, Car, Mail, Phone } from "lucide-react";

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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#E8EDF2] px-4">
        <div className="container mx-auto text-center z-10">
          <div ref={addToRefs} className="reveal">
            <img src="/lovable-uploads/66119aab-eb70-440d-bc5f-bcdb89a46a63.png" alt="CMIG Logo" className="w-32 h-32 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-primary">
              Circular Materials and<br />Infrastructure Group
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Engineering sustainable solutions for tomorrow's infrastructure. We offer comprehensive services in design, maintenance, materials, and processes for manufacturing, construction, and the built environment.
            </p>
            <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary transition-colors">
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
              <div
                ref={addToRefs}
                className="reveal p-6 rounded-xl bg-accent hover:bg-accent/80 transition-colors hover-lift"
              >
                <div className="mb-4 text-secondary"><Building2 className="w-8 h-8" /></div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Structural Design</h3>
                <p className="text-muted-foreground">Innovative structural solutions for buildings and infrastructure</p>
              </div>

              <div
                ref={addToRefs}
                className="reveal p-6 rounded-xl bg-accent hover:bg-accent/80 transition-colors hover-lift"
              >
                <div className="mb-4 text-secondary"><Building2 className="w-8 h-8" /></div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Infrastructure Asset Management</h3>
                <p className="text-muted-foreground">Civil Engineering, Condition Assessments, and Asset Management</p>
              </div>

              <div
                ref={addToRefs}
                className="reveal p-6 rounded-xl bg-accent hover:bg-accent/80 transition-colors hover-lift"
              >
                <div className="mb-4 text-secondary"><Car className="w-8 h-8" /></div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Transportation Engineering</h3>
                <p className="text-muted-foreground">Transport Impact Assessment, Master Planning, and Road Safety Audits</p>
              </div>

              <div
                ref={addToRefs}
                className="reveal p-6 rounded-xl bg-accent hover:bg-accent/80 transition-colors hover-lift"
              >
                <div className="mb-4 text-secondary"><Building2 className="w-8 h-8" /></div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Building Information Modelling</h3>
                <p className="text-muted-foreground">Residential and Municipal Infrastructure Design</p>
              </div>
            </div>
          </div>

          {/* Sustainability and Process Engineering Section */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Sustainability and Process Engineering</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div
                ref={addToRefs}
                className="reveal p-6 rounded-xl bg-accent hover:bg-accent/80 transition-colors hover-lift"
              >
                <div className="mb-4 text-secondary"><Recycle className="w-8 h-8" /></div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Sustainability Engineering</h3>
                <p className="text-muted-foreground">Life Cycle Assessment, Carbon Footprinting, and Carbon Tax Consulting</p>
              </div>

              <div
                ref={addToRefs}
                className="reveal p-6 rounded-xl bg-accent hover:bg-accent/80 transition-colors hover-lift"
              >
                <div className="mb-4 text-secondary"><LineChart className="w-8 h-8" /></div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Process Engineering</h3>
                <p className="text-muted-foreground">Industrial Waste Utilization and Construction Materials Advisory</p>
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
              <a href="tel:+27622126521" className="flex items-center justify-center gap-2 text-secondary hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                +27 62 212 6521
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;