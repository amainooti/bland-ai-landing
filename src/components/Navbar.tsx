import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-gradient cursor-pointer">
              Bland
            </div>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
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
              </span>
            </div>
          </div>

          <Button className="rounded-full bg-transparent border border-black text-black hover:bg-black/5 transition-colors px-8">
            Sign up
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">Bland</div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-4">
            <a
              href="#"
              className="block text-sm hover:text-primary transition-colors py-2"
            >
              Pricing
            </a>
            <div className="flex items-center gap-1">
              <a
                href="#"
                className="text-sm hover:text-primary transition-colors py-2"
              >
                Product
              </a>
              <ChevronDown size={16} />
            </div>
            <div className="pt-2">
              <Button className="w-full rounded-full bg-transparent border border-black text-black hover:bg-black/5 transition-colors">
                Sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
