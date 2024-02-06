import Image from "next/image";
import ProductList from "@/components/productList";
import ProductDetail from "@/components/productDetail";
import { fakeProducts } from "@/lib/utils";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center p-24">
        <ProductList />
        <ProductDetail  product={fakeProducts[0]}/>
    </main>
  );
}