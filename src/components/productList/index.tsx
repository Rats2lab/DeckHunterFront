import Image from "next/image";
import { Product } from "@/interfaces/productInterface";
//import ProductCard from "@/components/productListCard";
import { fakeProducts } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductCard from "../productListCard";

export default function ProductList({ products, onProductSelect }) {
  const handleProductClick = (product: Product) => {
    onProductSelect(product);
  };

  if (!Array.isArray(products)) {
    return <div>No hay productos disponibles.</div>;
  }
  return (
    <ScrollArea className="lg:w-1/4 flex flex-row font-mono text-sm pt-1">
      <div className="flex lg:flex-col w-max space-x-4 p-4">
        {products.map((product) => (
          <div
            className="mt-1 max-w-52"
            key={product.id}
            onClick={() => handleProductClick(product)}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <ScrollBar className="lg:hidden" orientation="horizontal" />
    </ScrollArea>
  );
}
