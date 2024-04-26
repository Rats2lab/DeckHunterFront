//import ProductCard from "@/components/productListCard";
import { Product } from "@/interfaces/product.interface";
import ProductCard from "../productListCard";

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
