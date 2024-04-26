"use client";

import ProductDetail from "@/components/productDetail";
import ProductList from "@/components/productList";
import { Product } from "@/interfaces/product.interface";
import { fakeProducts } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  //Fetching products

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Realizar la solicitud de fetch para obtener los datos de los productos
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/product`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setProducts(data);
        setSelectedProduct(data[0]);
        console.log(data);


        setLoading(false);
      } catch (error) {
        //setError(error.message);
        // Getting fake products
        setProducts(fakeProducts);
        setSelectedProduct(fakeProducts[0]);
        console.log(fakeProducts);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    products[0]
  );

  // Función para manejar la selección de un producto en ProductList
  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <main className="h-screen p-1">
      {loading ? (
        <div>Cargando...</div>
      ) : error ? (
        <div>
          <h2> Oops... algo ha ido mal 🥺</h2>
          <p>Error: {error} </p>
        </div>
      ) : (
        <div className="flex h-full w-full grow shrink-0 basis-0 items-start gap-4 bg-default-background pt-6 pr-6 pb-6 pl-6">
        <ProductList
            products={products}
            onProductSelect={handleProductSelect}
          />
          <ProductDetail product={selectedProduct} />
        </div>
      )}
    </main>
  );
}
