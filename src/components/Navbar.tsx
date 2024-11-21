import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react"; // Importing the Lucide icon

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left section: Brand + Links */}
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold text-gradient cursor-pointer">
            Bland
          </div>
          <a href="#" className="text-sm hover:text-primary transition-colors">
            Pricing
          </a>
          <div className="flex items-center gap-1 cursor-pointer">
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Product
            </a>
            <span className="text-sm">
              <ChevronDown />
            </span>{" "}
            {/* Down caret */}
          </div>
        </div>

        {/* Right section: Sign-up button */}
        <Button className="bg-primary hover:bg-primary/90 transition-colors">
          Sign up
        </Button>
      </div>
    </nav>
  );
};
