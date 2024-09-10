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
  attributes: ProductAttribute[];
}

export type ProductContextType = {
  products: Product[];
  selectedProduct: Product | null;
  setSelectedProduct: (newSelectedProduct: Product) => void;
  setProducts: (newProducts: Array<Product>) => void;
};

export type ProductAttribute = {
  id: string;
  productId: string;
  attributeName: ProductAttributeName;
  provider: string;
  processedOutput: string;
}
export enum ProductAttributeName {
  PROBLEM = 'problem',
  SOLUTION = 'solution',
  CUSTOMERS = 'customers',
  UNIQUE_FEATURES = 'unique_features',
  ALTERNATIVES = 'alternatives',
  MARKET_SIZE = 'market_size',
  }
