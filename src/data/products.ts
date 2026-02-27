import s1 from "@/assets/seeds/s1.jpeg";
import s2 from "@/assets/seeds/s2.jpeg";
import s3 from "@/assets/seeds/s3.jpeg";
import s4 from "@/assets/seeds/s4.jpeg";
import s5 from "@/assets/seeds/s5.jpeg";
import s6 from "@/assets/seeds/s6.jpeg";
import s7 from "@/assets/seeds/s7.jpeg";
import s8 from "@/assets/seeds/s8.jpeg";
import s9 from "@/assets/seeds/s9.jpeg";
import s10 from "@/assets/seeds/s10.jpeg";
import s11 from "@/assets/seeds/s11.jpeg";
import s12 from "@/assets/seeds/s12.jpeg";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "kesari-bg2",
    name: "Kesari BG II Cotton Seeds",
    description: "Premium Cybrid cotton hybrid seeds with Bollgard II technology for superior yield.",
    image: s1,
  },
  {
    id: "super-white-bg2",
    name: "Super White BG II Cotton Seeds",
    description: "Tulasi-9 BG II cotton hybrid seeds with Bollgard technology for excellent fiber quality.",
    image: s2,
  },
  {
    id: "goldi-333-bg2",
    name: "Goldi-333 BG II Cotton Seeds",
    description: "KSF cotton hybrid seeds with Bollgard II RIB Complete technology.",
    image: s3,
  },
  {
    id: "kalapyaz-onion",
    name: "KSP 86 Kalapyaz Onion Seeds",
    description: "High-quality Kalash onion seeds for robust and healthy onion crop production.",
    image: s4,
  },
  {
    id: "nath-sanket-bg2",
    name: "Nath Sanket BG II Cotton Seeds",
    description: "NBC-1111 BG II cotton hybrid seeds with first-time compressed bolt technology.",
    image: s5,
  },
  {
    id: "chilly-ksp1834",
    name: "F1 Chilly KSP 1834 Seeds",
    description: "Premium Kalash F1 hybrid chilly seeds for high-yield green chilli production.",
    image: s6,
  },
  {
    id: "wheat-gw173",
    name: "GW-173 Wheat Seeds",
    description: "Reno premium wheat seeds for robust grain production and excellent harvest.",
    image: s7,
  },
  {
    id: "bhendi-karishma",
    name: "Karishma F1 Hybrid Bhendi Seeds",
    description: "Kalash F1 hybrid okra seeds for healthy and high-quality bhendi cultivation.",
    image: s8,
  },
  {
    id: "cumin-reno4",
    name: "Reno-4 Cumin Seeds",
    description: "Premium Reno cumin seeds suited for Gujarat's climate and optimal spice production.",
    image: s9,
  },
  {
    id: "gram-gg3",
    name: "GG-3 Gram Seeds",
    description: "Reno premium gram seeds (chana) for healthy and high-yield pulse crop production.",
    image: s10,
  },
  {
    id: "fenugreek-reno111",
    name: "Reno-111 Fenugreek Seeds",
    description: "Double Super fenugreek (methi) seeds for aromatic and quality spice cultivation.",
    image: s11,
  },
  {
    id: "gram-gjg5",
    name: "GJG-5 Gram Seeds",
    description: "Reno premium gram seeds for robust chana production and excellent harvest quality.",
    image: s12,
  },
];
