import { Card, CardContent } from "@/components/ui/card";

const Knowledge = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Knowledge Centre Coming Soon</h2>
          <p className="text-muted-foreground">
            We are currently curating a comprehensive collection of industry insights, research papers, and expert analyses. 
            This knowledge hub will serve as your gateway to understanding sustainable construction materials and practices. 
            Check back soon for valuable resources and expert perspectives.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Knowledge;