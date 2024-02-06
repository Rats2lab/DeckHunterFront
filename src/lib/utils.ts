import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Generamos algunos datos falsos de productos
export const fakeProducts: Product[] = [
  {
    id: 1,
    name: "Producto 1",
    description: "Descripción del producto 1",
    votes: 100,
  },
  {
    id: 2,
    name: "Producto 2",
    description: "Descripción del producto 2",
    votes: 200,
  },
  {
    id: 3,
    name: "Producto 3",
    description: "Descripción del producto 3",
    votes: 300,
  },
  // Puedes agregar más productos aquí si lo deseas
];