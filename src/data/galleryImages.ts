import gi1 from "@/assets/gallery/gi1.jpeg";
import gi2 from "@/assets/gallery/gi2.jpeg";
import gi3 from "@/assets/gallery/gi3.jpeg";
import gi4 from "@/assets/gallery/gi4.jpeg";
import gi5 from "@/assets/gallery/gi5.jpeg";
import gi6 from "@/assets/gallery/gi6.jpeg";
import gi7 from "@/assets/gallery/gi7.jpeg";
import gi8 from "@/assets/gallery/gi8.jpeg";
import gi9 from "@/assets/gallery/gi9.jpeg";
import gi10 from "@/assets/gallery/gi10.jpeg";

export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { src: gi1, alt: "Stride Acetamiprid 20% SP Insecticide" },
  { src: gi2, alt: "Pitbull & Titlis Agro Products" },
  { src: gi3, alt: "Proactive Emamectin Benzoate" },
  { src: gi4, alt: "KavachFlo Fungicide by Syngenta" },
  { src: gi5, alt: "Octopus Insecticide" },
  { src: gi6, alt: "Isabion by Syngenta" },
  { src: gi7, alt: "Amistar Fungicide by Syngenta" },
  { src: gi8, alt: "Simodis by Syngenta" },
  { src: gi9, alt: "LaNevo Insecticide by Dhanuka" },
  { src: gi10, alt: "Simodis 360 Innovation" },
];
