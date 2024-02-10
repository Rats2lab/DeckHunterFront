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
  const [products, setProducts] = useState<Product[]>(fakeProducts);

  useEffect(() => {
    // Realizar la solicitud de fetch para obtener los datos de los productos
    // fetch("https://api.example.com/products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data))
    //   .catch((error) => console.error("Error fetching products:", error));
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
      <ProductList products={products} onProductSelect={handleProductSelect} />
      <ProductDetail product={selectedProduct} />
    </main>
  );
}
