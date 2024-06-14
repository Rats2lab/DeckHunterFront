import { useProductContext } from "@/app/hooks/useProduct";
import ProductCard from "../productListCard";
import { useEffect, useState } from "react";

export default function ProductList() {
  const { products, setSelectedProduct } = useProductContext();
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  
  //TODO hide element on mobile when scrolling
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);
    console.log(winScroll);

    if (winScroll > heightToHideFrom) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };

  if (!Array.isArray(products)) {
    return <div>No hay productos disponibles.</div>;
  }
  return (
    <div className="overflow-auto flex lg:h-full w-full lg:w-72 flex-none flex-row lg:flex-col items-start gap-4 rounded bg-neutral-50 p-1 mb-4">
      {isVisible && products.map((product) => (
        <div
          key={product.id}
          onClick={() => setSelectedProduct(product)}
        >
          <ProductCard key={product.id} product={product}  />
        </div>
      ))}
    </div>
  );
}
