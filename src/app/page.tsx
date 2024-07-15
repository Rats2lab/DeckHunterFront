"use client";

import ProductDetail from "@/components/productDetail";
import ProductList from "@/components/productList";
import { Alert, Button } from "@/subframe";
import { Loader } from "@/subframe/components/Loader";
import { useEffect, useState } from "react";
import { useLeaderboardContext } from "./hooks/useLeaderboard";
import { useProductContext } from "./hooks/useProduct";
import { fetchProduct, fetchProducts } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { setLeaderboards, leaderboards } = useLeaderboardContext();
  const { setProducts, setSelectedProduct, selectedProduct } = useProductContext();
  const searchParams = useSearchParams();

  // Initialize leaderboards and products
  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/v1/leaderboard?offset=0&limit=10`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch leaderboards");
        }
        const data = await response.json();
        setLeaderboards(data.data);

        // Get products from the first leaderboard
        if (data.data.length > 0) {
          const products = await fetchProducts(data.data[0].id);
          setProducts(products);
          const productId = searchParams?.get("product");
          if (!productId) {
              setSelectedProduct(products[0]);
          }
        }
      } catch (error) {
        setError("" + error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (leaderboards.length === 0) {
      fetchLeaderboards();
    }
  }, []);

  // Fetch product if product ID is in the query params
  useEffect(() => {
    const fetchSelectedProduct = async () => {
      const productId = searchParams?.get("product");
      if (productId) {
        try {
          const product = await fetchProduct(productId);
          setSelectedProduct(product);
        } catch (error) {
          setError("" + error);
          console.error(error);
        }
      }
    };

    fetchSelectedProduct();
  }, [searchParams]);

  return (
    <main className="md:h-screen p-1">
      <div className="flex w-full md:h-full grow shrink-0 basis-0 items-start gap-4 bg-default-background pt-6 pr-6 pb-6 pl-6">
        {loading ? (
          <div className="h-full w-full flex justify-center content-center">
            <Loader size="large" />
          </div>
        ) : error ? (
          <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
            <Alert
              variant="error"
              title="Oops... something went wrong 🥺"
              description={"" + error}
              className="w-48"
            />
            <Button
              size="small"
              onClick={() => {
                let currentLocation = window.origin;
                window.location.href = currentLocation;
              }}
            >
              Refresh page!
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row w-full mt-28 h-full">
            <ProductList />
            <ProductDetail />
          </div>
        )}
      </div>
    </main>
  );
}
