"use client"

import { useState } from "react";

type Props = {
    price: number;
}

export default function Counter({price}: Props) {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + price);
    }

    function decrement() {
        if (count > 0) {
            setCount(count - price);
        }
    }
    return (
        <div className="mt-6 flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3">
            <button onClick={decrement} className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-white transition hover:bg-blue-700" > -
            </button>
            <p className="text-lg font-bold text-gray-900"> {count}
            </p>
            <button onClick={increment} className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-white transition hover:bg-blue-700" > +
            </button>
        </div>
    )
}