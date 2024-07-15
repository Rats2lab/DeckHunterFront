import { Product } from "@/interfaces/product.interface";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchProducts = async (leaderboardId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/product?leaderboardId=${leaderboardId}&offset=0&limit=15`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const fetchProduct = async (productUuid: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/product/${productUuid}?language=es`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
};

// export const fakeProducts: Product[] = [
//   {
//     id: "f3574733-6374-4982-bea5-a660508ba8c5",
//     title: "Test product",
//     description:
//       "LA PETICIÓN A BACK NO HA FUNCIONADO, MOSTRAMOS LISTADO DE PRODUCTOS FALSOS. Habit Tracker aims to be an easy-to-use app iOS, macOS and watchOS without a lot of frills. It has the essential information you need to track your progress and reach your goals. In just a few steps it allows you to create a new habit and mark your progress.",
//     launchDate: new Date("2024-02-16T00:00:00.000Z"),
//     votes: 19,
//     country: "TBD",
//   },
//   {
//     id: "e92f3998-a65e-4e8d-a5e2-dff8ce59b0a2",
//     title: "Test product 2",
//     description:
//       "Spokk is a social platform that you can use to get your ideas, prototypes & creations validated from anyone you want through anonymous opinions. Unlike other tools, it gives you complete control over the anonymous data you receive. People can also build on each other’s opinions to reach an optimal solution. (Hint - Validate your startup or idea)",
//     launchDate: new Date("2024-02-16T00:00:00.000Z"),
//     votes: 23,
//     country: "TBD",
//   },
//   {
//     id: "df4d4d0c-e415-41dc-becc-fc6853336afb",
//     title: "Product Test",
//     description:
//       "GSC Agent, the world's first privacy-first, locally-run index tool, offers secure, fast indexing without subscriptions. Say goodbye to data leaks and hello to lifetime SEO empowerment.",
//     launchDate: new Date("2024-02-16T00:00:00.000Z"),
//     votes: 43,
//     country: "TBD",
//   },
//   {
//     id: "f77519f4-3f5c-4053-a7e7-e5a0ba5d9558",
//     title: "Product Test 2",
//     description:
//       "Meet the all-in-one workspace your productive teams deserve to have!\n\nKlever Suite brings all your work - projects, tasks, and Wiki docs in one place - so you can focus on being more productive!\n\nHere’s what you can do with Klever Suite 👀\n🏃‍♂️ Run projects of any size with our flexible Kanban board\n📑 Create all kinds of Wiki docs+ diagrams, from product requirement docs to flowcharts\n📌 Organize all tasks you’re working on",
//     launchDate: new Date("2024-02-15T00:00:00.000Z"),
//     votes: 568,
//     country: "TBD",
//   },
//   {
//     id: "b5b6c365-6163-40fd-aeac-bd26d7df95af",
//     title: "Product Test 3",
//     description:
//       "Reiki is where creator economy meets AI and blockchain. Turn your creativity into profits with Reiki's AI creation toolkits, on-chain ownership proof, AI agents marketplace, and a thriving community of over 88K members.",
//     launchDate: new Date("2024-01-06T00:00:00.000Z"),
//     votes: 3805,
//     country: "TBD",
//   },
//   {
//     id: "0d1a11c4-6640-442d-93d1-6dd04aa83b53",
//     title: "Test Product 3",
//     description:
//       "Manage your calendar bookings easier with TidyCal — the ideal for scheduling meetings across time zones. With a Free plan or Lifetime deal, get unlimited booking types, easy integrations with your calendars, Zoom, and Google Meet, paid booking integration with Stripe and PayPal... and advanced features like Zapier and API. TidyCal simplifies meeting scheduling with a beautiful, simple interface — with no app download required — both desktop and mobile web.",
//     launchDate: new Date("2024-01-18T00:00:00.000Z"),
//     votes: 2557,
//     country: "TBD",
//   },
// ];
