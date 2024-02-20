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
      <CardHeader className="p-2">
        <CardTitle className="text-sm">{product.title}</CardTitle>
        <CardDescription className="text-xs line-clamp-4">{product.description}</CardDescription>
      </CardHeader>
      <CardFooter className="text-xs">
        <p>Votos: {product.votes}</p>
      </CardFooter>
    </Card>
  );
}