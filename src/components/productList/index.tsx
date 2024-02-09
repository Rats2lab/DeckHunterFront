import Image from "next/image";
import { Product } from "@/interfaces/productInterface";
import ProductCard from "@/components/productListCard";
import { fakeProducts } from "@/lib/utils";

export default function ProductList({ products, onProductSelect }) {
  const handleProductClick = (product: Product) => {
    console.log("Function: ", onProductSelect);

    console.log(product);
    onProductSelect(product);
  };

  if (!Array.isArray(products)) {
    return <div>No hay productos disponibles.</div>;
  }
  return (
    <div className="z-10 max-w-1xl items-center justify-between font-mono text-sm">
      {products.map((product) => (
        <div onClick={() => handleProductClick(product)}>
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
}
