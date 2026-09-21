import Link from "next/link";
import Counter from "./counter";
import CreateProduct from "../components/CreateProduct";

type Props = {

    searchParams: Promise<{
        category?: string;
    }>;
};

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
    images: string[];
}

export type ProductsResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
};


export default async function Products({ searchParams }: Props) {
    const response = await fetch("https://dummyjson.com/products");
    const data: ProductsResponse = await response.json();
    const productsArray = data.products;
    const param = await searchParams;
    const { category } = await param;
    const filteredProducts = productsArray.filter((product: Product) => product.category === category);
    if (category && filteredProducts.length > 0) {
        return(
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product: Product) => {
                    return (
                        <article key={product.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <h1 className="mb-3 text-2xl font-bold text-gray-900"> {product.title} </h1>
                            <p className="mb-5 line-clamp-3 text-gray-600"> {product.description} </p>
                            <Link href={`/products/${product.id}`} className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
                                View details
                            </Link>
                        </article>
                    );
                })}
            </div>
        )


    }



    return (
        <>
        
        <CreateProduct/>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productsArray.map((product: Product) => {
                return (
                    <article key={product.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl" >
                        <h1 className="mb-3 text-2xl font-bold text-gray-900"> {product.title} </h1>
                        <p className="mb-5 text-gray-600"> {product.description} </p>
                        <Link href={`/products/${product.id}`} className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700" > View details </Link>
                        <Counter key={product.id} price={product.price} />
                    </article>);
            })}
        </div>
        </>
    )
}