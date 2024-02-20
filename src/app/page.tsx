"use client";

import Image from "next/image";
import ProductList from "@/components/productList";
import ProductDetail from "@/components/productDetail";
import { fakeProducts } from "@/lib/utils";
// import styles from "@/app/globals.css";
import React, { useState, useEffect } from "react";
// import { Product } from '@/interfaces/productInterface';

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
          `${process.env.NEXT_PUBLIC_BASE_URL}/product`,
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
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    products[0],
  );

  // Función para manejar la selección de un producto en ProductList
  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <main>
      {loading ? (
        <div>Cargando...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <ProductList
            products={products}
            onProductSelect={handleProductSelect}
          />
          <ProductDetail product={selectedProduct} />
        </>
      )}
    </main>
  );
}
