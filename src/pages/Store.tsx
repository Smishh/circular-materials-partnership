import { Building2, ShoppingCart } from "lucide-react";

const Store = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E8EDF2] px-4 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-primary">
            Advanced EcoMaterials Store
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Sustainable and innovative materials for your construction and infrastructure projects.
          </p>
        </div>
        
        {/* Placeholder content - to be developed further */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <ShoppingCart className="w-16 h-16 text-secondary" />
          <p className="text-muted-foreground">
            Our online store is coming soon. Stay tuned for our collection of advanced eco-friendly materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Store;