"use client";
// Settings Context - src/context/Settings
import {
  Product,
  ProductContextType,
} from "@/interfaces/product.interface";
import { createContext, useState } from "react";
export const ProductContext = createContext<ProductContextType | null>(
  null
);

const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentProducts, setCurrentProducts] = useState<Product[]>(
    []
  );
  const [selectedCurrentProduct, setSelectedCurrentProduct] =
    useState<Product | null>(null);

  const setProducts = (newProducts: Array<Product>) => {
    setCurrentProducts(newProducts);
    setSelectedCurrentProduct(newProducts[0]);
  };

  const setSelectedProduct = (newSelectedProduct: Product) => {
    setSelectedCurrentProduct(newSelectedProduct);
  };

  return (
    <ProductContext.Provider
      value={{
        Products: currentProducts,
        selectedProduct: selectedCurrentProduct,
        setSelectedProduct,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const ProductConsumer = ProductContext.Consumer;
export default ProductProvider;
