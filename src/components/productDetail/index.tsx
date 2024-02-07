import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/interfaces/productInterface";

import Image from "next/image";

export default function ProductDetail({ product }: { product: Product }) {

if (product === null) {
    return <div>Selecciona un producto! </div>;
  }

  return (
    <Card className="max-w-1xl">
      <CardHeader>
        <CardTitle>DETALLE PRODUCTO: {product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Votos: {product.votes}</p>
      </CardFooter>
    </Card>
  );
}