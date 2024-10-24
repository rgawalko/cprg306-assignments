import { useState } from "react";
import Item from './item.js';

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
    let itemsCopy = [...items];  // Shallow copy of items

    // Sort items based on the sortBy state
    if (sortBy === "name") {
        itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
        itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
    }

    // Group items by category if sortBy is "group"
    let groupedItems = {};
    if (sortBy === "group") {
        groupedItems = itemsCopy.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
        }, {});

        // Sort categories and items alphabetically
        Object.keys(groupedItems).forEach(category => {
            groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
        });
    }

    return (
        <main className='pt-0.5'>
            <h2 className='font-bold text-gray-100 text-3xl mt-6 pt-4 bg-violet-800 p-4 ml-11 rounded-lg shadow-lg w-60'>Shopping List</h2>
            
            {/* Buttons for selecting sorting criteria */}
            <div className='ml-11 mt-5 mb-4'>
                <button 
                    className={`mr-2 px-4 py-2 rounded border ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 border-gray-400 hover:bg-blue-700 hover:text-white"} transition duration-300`} 
                    onClick={() => setSortBy("name")}
                >
                    Sort by Name
                </button>
                <button 
                    className={`mr-2 px-4 py-2 rounded border ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 border-gray-400 hover:bg-blue-700 hover:text-white"} transition duration-300`} 
                    onClick={() => setSortBy("category")}
                >
                    Sort by Category
                </button>
                <button 
                    className={`px-4 py-2 rounded border ${sortBy === "group" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 border-gray-400 hover:bg-blue-700 hover:text-white"} transition duration-300`} 
                    onClick={() => setSortBy("group")}
                >
                    Group by Category
                </button>
            </div>

            <ul>
                {sortBy === "group" ? (
                    Object.keys(groupedItems).sort().map(category => (
                        <li key={category}>
                            <h3 className='capitalize font-bold text-xl ml-4 mt-4'>{category}</h3>
                            <ul>
                                {groupedItems[category].map(item => (
                                    <Item 
                                        key={item.id}
                                        name={item.name} 
                                        quantity={item.quantity} 
                                        category={item.category}
                                    />
                                ))}
                            </ul>
                        </li>
                    ))
                ) : (
                    itemsCopy.map((item) => (
                        <Item 
                            key={item.id}
                            name={item.name} 
                            quantity={item.quantity} 
                            category={item.category}
                        />
                    ))
                )}
            </ul>
        </main>
    );
}