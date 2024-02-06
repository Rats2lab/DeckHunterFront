import Image from "next/image";
import { Product } from "@/interfaces/productInterface";
import ProductCard from "@/components/productListCard";
import { fakeProducts } from "@/lib/utils";


export default function ProductList() {
  return (
    <div className="z-10 max-w-1xl items-center justify-between font-mono text-sm">
      {fakeProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}