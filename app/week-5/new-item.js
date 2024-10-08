"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
        

    return (
        <div className="my-5 ml-14 w-48 bg-violet-500 rounded-custom-md flex flex-col items-center justify-center p-4">
            <p className="font-bold text-gray-100 mb-4"> Quantity: {quantity} </p>
            <div className="flex space-x-2">
                <button 
                    onClick={increment} 
                    className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 text-2xl  border-blue-900"
                >
                    +
                </button>
                <button 
                    onClick={decrement} 
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 text-2xl  border-red-700"
                >
                    -
                </button>
            </div>
        </div>
    );
}