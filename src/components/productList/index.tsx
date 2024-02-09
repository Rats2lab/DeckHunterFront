import Image from "next/image";
import { Product } from "@/interfaces/productInterface";
import ProductCard from "@/components/productListCard";
import { fakeProducts } from "@/lib/utils";
import {ScrollArea} from "@/components/ui/scroll-area";


export default function ProductList({ products, onProductSelect }) {
  const handleProductClick = (product: Product) => {
    onProductSelect(product);
  };

  if (!Array.isArray(products)) {
    return <div>No hay productos disponibles.</div>;
  }
  return (
    <ScrollArea className="max-w-1xl items-center justify-between font-mono text-sm">
      {products.map((product) => (
        <div onClick={() => handleProductClick(product)}>
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </ScrollArea>
  );
}
