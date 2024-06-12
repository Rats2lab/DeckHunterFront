// Settings Hook - src/hooks/useProduct
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProductContext must be used inside the LoaderboardProvider');
  }

  return context;
};