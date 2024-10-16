"use client";
import { useState } from "react";
import itemsJson from "./items.json";
import Item from './item.js';

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    let items = [...itemsJson];  // Shallow copy of itemsJson

    // Sort items based on the sortBy state
    if (sortBy === "name") {
        items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
        items.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <main className='pt-0.5'>
            <h2 className='font-bold text-gray-100 text-3xl mt-6 pt-4 bg-violet-800 p-4 ml-11 rounded-lg shadow-lg w-60'>Shopping List</h2>
            
            {/* Buttons for selecting sorting criteria */}
            <div className='ml-11 mb-4'>
                <button 
                    className={`mr-2 ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
                    onClick={() => setSortBy("name")}
                >
                    Sort by Name
                </button>
                <button 
                    className={`${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
                    onClick={() => setSortBy("category")}
                >
                    Sort by Category
                </button>
            </div>

            <ul>
                {items.map((item) => (
                    <Item 
                        key={item.id}
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category}
                    />
                ))}
            </ul>
        </main>
    );
}