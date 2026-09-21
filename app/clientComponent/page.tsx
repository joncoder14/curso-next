
"use client";

import { useState } from "react";

// Componente 1: Contador
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="rounded-xl border p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">
                Counter
            </h2>

            <p className="mb-4 text-xl">
                Count: {count}
            </p>

            <button
                onClick={() => setCount(count + 1)}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                Increment
            </button>
        </div>
    );
}

// Componente 2: Mostrar/Ocultar mensaje
function Message() {
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div className="rounded-xl border p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">
                Message
            </h2>

            <button
                onClick={() => setShowMessage(!showMessage)}
                className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
                {showMessage ? "Hide message" : "Show message"}
            </button>

            {showMessage && (
                <p className="mt-4 text-gray-600">
                    Hello! This is a Client Component 🚀
                </p>
            )}
        </div>
    );
}

// Componente principal
export default function ClienteComponent() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">
                Cliente Component Page
            </h1>

            <Counter />

            <Message />
        </div>
    );
}

