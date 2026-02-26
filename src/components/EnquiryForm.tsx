import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { z } from "zod";

const enquirySchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100),
  mobile: z.string().trim().min(10, "Valid mobile number required").max(15),
  email: z.string().trim().email("Valid email required").max(255).or(z.literal("")),
  address: z.string().trim().min(1, "Address is required").max(300),
  quantity: z.string().trim().min(1, "Quantity is required").max(50),
  description: z.string().trim().max(500).optional(),
});

interface EnquiryFormProps {
  productName: string;
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryForm = ({ productName, isOpen, onClose }: EnquiryFormProps) => {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    quantity: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const message = `Hello HARIKRUSHN AGRO CHEMICALS,

New Product Enquiry:

Name: ${form.fullName}
Mobile: ${form.mobile}
Email: ${form.email || "N/A"}
Address: ${form.address}
Product: ${productName}
Quantity: ${form.quantity}
Requirement: ${form.description || "N/A"}

Please contact me regarding this enquiry.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919879229489?text=${encoded}`, "_blank");
    onClose();
    setForm({ fullName: "", mobile: "", email: "", address: "", quantity: "", description: "" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card rounded-xl shadow-premium max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Enquire Now</h3>
                <p className="text-sm text-muted-foreground mt-1">Product: {productName}</p>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Close">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "fullName", label: "Full Name *", type: "text", placeholder: "Your full name" },
                { key: "mobile", label: "Mobile Number *", type: "tel", placeholder: "Your mobile number" },
                { key: "email", label: "Email", type: "email", placeholder: "Your email (optional)" },
                { key: "address", label: "Address *", type: "text", placeholder: "Your address" },
                { key: "quantity", label: "Quantity Required *", type: "text", placeholder: "e.g. 10 kg" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                  {errors[field.key] && <p className="text-destructive text-xs mt-1">{errors[field.key]}</p>}
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Description / Requirement</label>
                <textarea
                  value={form.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Describe your requirement (optional)"
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Submit via WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryForm;
