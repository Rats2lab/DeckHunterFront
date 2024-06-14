"use client";

import ProductDetail from "@/components/productDetail";
import ProductList from "@/components/productList";
import { Alert, Button } from "@/subframe";
import { Loader } from "@/subframe/components/Loader";
import { useEffect, useState } from "react";
import { useLeaderboardContext } from "./hooks/useLeaderboard";
import { useProductContext } from "./hooks/useProduct";
import { fetchProducts } from "@/lib/utils";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setLeaderboards } = useLeaderboardContext();
  const { setProducts } = useProductContext();

  // Initialize data: getting leaderboards and products
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
        // getProducts from the first leaderboard
        fetchProducts(data.data[0].id).then((products) => {
          setProducts(products);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeaderboards().then(() => setLoading(false));
  }, []);

  return (
    <main className="h-screen p-1">
      <div className="flex h-full w-full grow shrink-0 basis-0 items-start gap-4 bg-default-background pt-6 pr-6 pb-6 pl-6">
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
          <div className="flex flex-col lg:flex-row w-full min-h-full md:h-full">
            <ProductList />
            <ProductDetail />
          </div>
        )}
      </div>
    </main>
  );
}
