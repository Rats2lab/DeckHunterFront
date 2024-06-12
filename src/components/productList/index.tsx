import { useProductContext } from "@/app/hooks/useProduct";
import ProductCard from "../productListCard";

export default function ProductList() {
  const { products, setSelectedProduct } = useProductContext();

  if (!Array.isArray(products)) {
    return <div>No hay productos disponibles.</div>;
  }
  return (
    <div className="overflow-auto flex lg:h-full w-full lg:w-72 flex-none flex-row lg:flex-col items-start gap-4 rounded bg-neutral-50 p-1 mb-4">
      {products.map((product) => (
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
