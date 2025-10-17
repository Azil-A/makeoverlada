import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import productLipstick from "@/assets/product-lipstick.jpg";
import productPalette from "@/assets/product-palette.jpg";
import productBrushes from "@/assets/product-brushes.jpg";
import productFoundation from "@/assets/product-foundation.jpg";

const products = [
  {
    id: "1",
    name: "Rose Gold Luxe Lipstick",
    price: 28,
    originalPrice: 35,
    image: productLipstick,
    rating: 4.8,
    reviews: 234,
    isNew: true,
    category: "Lipstick",
  },
  {
    id: "2",
    name: "Sunset Glow Eyeshadow Palette",
    price: 52,
    image: productPalette,
    rating: 4.9,
    reviews: 567,
    isBestseller: true,
    category: "Eyeshadow",
  },
  {
    id: "3",
    name: "Professional Brush Set",
    price: 45,
    originalPrice: 60,
    image: productBrushes,
    rating: 4.7,
    reviews: 189,
    category: "Tools",
  },
  {
    id: "4",
    name: "Luminous HD Foundation",
    price: 38,
    image: productFoundation,
    rating: 4.9,
    reviews: 892,
    isBestseller: true,
    category: "Foundation",
  },
  {
    id: "5",
    name: "Rose Petal Blush Palette",
    price: 32,
    image: productPalette,
    rating: 4.6,
    reviews: 145,
    isNew: true,
    category: "Blush",
  },
  {
    id: "6",
    name: "Velvet Matte Lip Set",
    price: 42,
    originalPrice: 55,
    image: productLipstick,
    rating: 4.8,
    reviews: 423,
    category: "Lipstick",
  },
  {
    id: "7",
    name: "Golden Hour Highlighter",
    price: 29,
    image: productPalette,
    rating: 4.9,
    reviews: 678,
    isBestseller: true,
    category: "Highlighter",
  },
  {
    id: "8",
    name: "Complete Makeup Starter Kit",
    price: 89,
    originalPrice: 120,
    image: productBrushes,
    rating: 4.8,
    reviews: 234,
    isNew: true,
    category: "Sets",
  },
];

export const ProductGrid = () => {
  return (
    <section className="container px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Trending
          </span>{" "}
          Now
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our most-loved products, handpicked by beauty lovers just like you
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium whitespace-nowrap transition-all hover:shadow-glow">
          All Products
        </button>
        <button className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium whitespace-nowrap hover:bg-muted/80 transition-all">
          Lipstick
        </button>
        <button className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium whitespace-nowrap hover:bg-muted/80 transition-all">
          Eyeshadow
        </button>
        <button className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium whitespace-nowrap hover:bg-muted/80 transition-all">
          Foundation
        </button>
        <button className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium whitespace-nowrap hover:bg-muted/80 transition-all">
          Brushes & Tools
        </button>
        <button className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium whitespace-nowrap hover:bg-muted/80 transition-all">
          Sets
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <Button size="lg" variant="outline" className="min-w-[200px]">
          Load More Products
        </Button>
      </div>
    </section>
  );
};
