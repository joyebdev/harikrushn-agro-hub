import productCotton from "@/assets/product-cotton.jpg";
import productGroundnut from "@/assets/product-groundnut.jpg";
import productWheat from "@/assets/product-wheat.jpg";
import productCastor from "@/assets/product-castor.jpg";
import productCumin from "@/assets/product-cumin.jpg";
import productSesame from "@/assets/product-sesame.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "cotton-seeds",
    name: "Cotton Seeds",
    description: "Premium quality BT cotton seeds for higher yield and pest resistance.",
    image: productCotton,
  },
  {
    id: "groundnut-seeds",
    name: "Groundnut Seeds",
    description: "High-germination groundnut seeds for optimal crop production.",
    image: productGroundnut,
  },
  {
    id: "wheat-seeds",
    name: "Wheat Seeds",
    description: "Superior wheat seed varieties for robust grain production.",
    image: productWheat,
  },
  {
    id: "castor-seeds",
    name: "Castor Seeds",
    description: "Disease-resistant castor seeds for reliable oil crop yields.",
    image: productCastor,
  },
  {
    id: "cumin-seeds",
    name: "Cumin Seeds",
    description: "Aromatic cumin seed varieties suited for Gujarat's climate.",
    image: productCumin,
  },
  {
    id: "sesame-seeds",
    name: "Sesame Seeds",
    description: "High-oil content sesame seeds for premium harvests.",
    image: productSesame,
  },
];
