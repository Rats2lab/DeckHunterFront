export interface Product {
  id: string;
  title: string;
  description: string;
  launchDate: Date;
  votes: number;
  link: string;
  providerExternalLink: string;
  thumbnail: string;
  tagline: string;
  country: string;
}

export type ProductContextType = {
  products: Product[];
  selectedProduct: Product | null;
  setSelectedProduct: (newSelectedProduct: Product) => void;
  setProducts: (newProducts: Array<Product>) => void;
};
