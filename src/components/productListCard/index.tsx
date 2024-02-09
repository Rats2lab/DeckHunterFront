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

export default function ProductCard({ key, product }: { product: Product }) {
  return (
    <Card className="hover:cursor-pointer hover:scale-110">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
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