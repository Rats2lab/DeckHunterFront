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
    <div className="overflow-auto flex lg:h-full w-full lg:w-72 flex-none flex-row lg:flex-col items-start gap-4 rounded bg-neutral-50 p-1 mb-4">
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
