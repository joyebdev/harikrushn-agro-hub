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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 border border-border"
      >
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
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
