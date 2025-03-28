import { ShoppingCart } from "lucide-react";

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
        
        <div className="flex flex-col items-center justify-center space-y-6 py-12">
          <ShoppingCart className="w-16 h-16 text-secondary" />
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <p className="text-xl font-semibold text-primary">
              Your Sustainable Materials Hub - Coming Soon
            </p>
            <p className="text-muted-foreground">
              We are meticulously preparing our online marketplace for advanced eco-friendly construction materials. Our store will feature a carefully selected range of sustainable products, complete with detailed specifications, environmental impact assessments, and application guidelines.
            </p>
            <p className="text-sm text-secondary">
              Stay tuned for the launch of our comprehensive eco-materials catalog.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;