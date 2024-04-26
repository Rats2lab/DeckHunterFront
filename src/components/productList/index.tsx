import Image from "next/image";
//import ProductCard from "@/components/productListCard";
import { fakeProducts } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductCard from "../productListCard";
import { Product } from "@/interfaces/product.interface";

export default function ProductList({ products, onProductSelect }: any) {
  const handleProductClick = (product: Product) => {
    onProductSelect(product);
  };

  if (!Array.isArray(products)) {
    return <div>No hay productos disponibles.</div>;
  }
  return (
    <div className="overflow-auto flex h-full w-72 flex-none flex-col items-start gap-4 rounded bg-neutral-50 pt-1 pr-1 pb-1 pl-1">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product)}
        >
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
}
