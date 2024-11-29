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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/3d258ab7-eefd-4ba2-8932-bff60a5cd813.png')] bg-cover bg-center opacity-10" />
        </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Recycle className="w-8 h-8" />,
                title: "Sustainability Engineering",
                description: "Life Cycle Assessment, Carbon Footprinting, and Carbon Tax Consulting",
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Infrastructure Engineering",
                description: "Structural Engineering, Condition Assessments, and Asset Management",
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Process Engineering",
                description: "Industrial Waste Utilization and Construction Materials Advisory",
              },
              {
                icon: <Car className="w-8 h-8" />,
                title: "Transportation Engineering",
                description: "Transport Impact Assessment, Master Planning, and Road Safety Audits",
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Building Information Modelling",
                description: "Residential and Municipal Infrastructure Design",
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Structural Solutions",
                description: "Structural Strengthening, Repair, and Corrosion Protection",
              },
            ].map((service, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="reveal p-6 rounded-xl bg-accent hover:bg-accent/80 transition-colors hover-lift"
              >
                <div className="mb-4 text-secondary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
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
              <a href="tel:0622126521" className="flex items-center justify-center gap-2 text-secondary hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                062 212 6521
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;