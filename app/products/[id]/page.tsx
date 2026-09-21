import type { Product, ProductsResponse } from "../page";
import { redirect } from "next/navigation";
import Link from "next/link";

type Props = {
    params: Promise<{
        id: string;
    }>;

};

type Products = {
    id:number;
}

export async function generateStaticParams() {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();

  return data.products.map((product: Products) => ({
    id: String(product.id),
  }));
}

export default async function Product({ params, }: Props) {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
        throw new Error("failed to load data")

    }
    const data: ProductsResponse = await response.json();
    const productsArray = data.products;
    const { id } = await params;

    const product = productsArray.find((product: Product) => product.id === parseInt(id));
    if (!product) {
        redirect("/products");
    }


    return (

        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
                {product.title}
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
                {product.description}
            </p>

            <div className="mb-6 space-y-3">
                <p className="text-gray-700">
                    <span className="font-semibold">Category:</span>{" "}
                    {product.category}
                </p>

                <p className="text-3xl font-bold text-blue-600">
                    ${product.price}
                </p>
            </div>

            <Link
                href="/products"
                className="inline-block rounded-lg bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-gray-700"
            >
                ← Back to products
            </Link>
        </div>


    )
}