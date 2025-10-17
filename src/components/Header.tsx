import { useState } from "react";
import { ShoppingBag, Heart, Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-soft">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GlowUp
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            New Arrivals
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Best Sellers
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Makeup Sets
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Sale
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center animate-scale-in">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-card animate-slide-up">
          <nav className="container flex flex-col gap-4 p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
              New Arrivals
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
              Best Sellers
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
              Makeup Sets
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
              Sale
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
