import Image from "next/image";
import { Product } from "@/interfaces/productInterface";
import ProductCard from "@/components/productListCard";
import { fakeProducts } from "@/lib/utils";

export default function ProductList(products, onProductSelect) {
  const handleProductClick = (product: Product) => {
    console.log(product);
    onProductSelect(product);
  };
  console.log(products.products);

  if (!Array.isArray(products.products)) {
    return <div>No hay productos disponibles.</div>;
  }

  // TODO on click to select product
  return (
    <div className="z-10 max-w-1xl items-center justify-between font-mono text-sm">
      {products.products.map((product) => (
        <div onClick={() => onProductSelect()}>
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
}
