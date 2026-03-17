import { useState } from "react";
import { motion } from "framer-motion";
import { type Product } from "@/data/products";
import EnquiryForm from "./EnquiryForm";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.4, delay: index * 0.03 }}
        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 border border-border"
      >
        <div className="relative aspect-square overflow-hidden bg-muted">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-shimmer" />
          )}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="eager"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="p-5">
          <h3 className="font-display font-semibold text-lg text-foreground mb-1.5">{product.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
          <button
            onClick={() => setEnquiryOpen(true)}
            className="w-full py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Enquire Now
          </button>
        </div>
      </motion.div>

      <EnquiryForm
        productName={product.name}
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
};

export default ProductCard;
