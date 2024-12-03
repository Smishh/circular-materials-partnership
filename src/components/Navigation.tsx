import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Grid, Building2, Mail, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/66119aab-eb70-440d-bc5f-bcdb89a46a63.png" alt="CMIG Logo" className="h-8 w-8" />
            <span className="font-semibold text-primary">CMIG</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-primary hover:bg-muted"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/gallery" className="flex items-center px-4 py-2 text-sm text-primary hover:bg-muted rounded-md">
                    <Grid className="mr-2 h-4 w-4" />
                    Gallery
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/projects" className="flex items-center px-4 py-2 text-sm text-primary hover:bg-muted rounded-md">
                    <Building2 className="mr-2 h-4 w-4" />
                    Our Projects
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/store" className="flex items-center px-4 py-2 text-sm text-primary hover:bg-muted rounded-md">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    EcoMaterials Store
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className="flex items-center px-4 py-2 text-sm text-primary hover:bg-muted rounded-md">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-2">
            <Link
              to="/gallery"
              className="flex items-center px-4 py-2 text-sm text-primary hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <Grid className="mr-2 h-4 w-4" />
              Gallery
            </Link>
            <Link
              to="/projects"
              className="flex items-center px-4 py-2 text-sm text-primary hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <Building2 className="mr-2 h-4 w-4" />
              Our Projects
            </Link>
            <Link
              to="/store"
              className="flex items-center px-4 py-2 text-sm text-primary hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Advanced EcoMaterials Store
            </Link>
            <Link
              to="/contact"
              className="flex items-center px-4 py-2 text-sm text-primary hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
