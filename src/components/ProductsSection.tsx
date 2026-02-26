import { motion } from "framer-motion";
import { Sprout } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-earth-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            <Sprout className="w-4 h-4" />
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Premium Seed <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our range of high-quality agricultural seeds, carefully selected to ensure the best results for your farm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
