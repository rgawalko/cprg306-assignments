"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const handleNameChange = (event) => {
        let name = event.target.value;
        name = name.replace(/[^a-zA-Z\s]/g, "");
        setName(name);
    };
    
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

    const handleCategoryChange = (event) => {
        let category = event.target.value;
        category = category.replace(/[^a-zA-Z\s]/g, "");
        setCategory(category);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newId = Array.from({length: 18}, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * 62))).join('');
        const newItem = { id: newId, name, quantity, category };
        onAddItem(newItem);
        setName('');
        setQuantity(0);
        setCategory('');
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm w-72">
                <h2 className="text-xl font-bold mb-2 text-center">Add An Item</h2>
                <form className="m-1" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name" className="block font-medium mb-1 text-sm">Name:</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            className="border border-gray-300 rounded w-full p-1 text-sm"
                            required
                        />
                    </div>

                    <div className="my-4 w-full bg-violet-500 rounded-md flex flex-col items-center justify-center p-2">
                        <p className="font-bold text-gray-100 mb-2 text-sm">{quantity}</p>
                        <div className="flex space-x-1">
                            <button 
                                onClick={increment} 
                                type="button"
                                className="bg-blue-700 text-white font-bold py-1 px-2 rounded hover:bg-blue-800 text-lg border-blue-900"
                            >
                                +
                            </button>
                            <button 
                                onClick={decrement} 
                                type="button"
                                className="bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-600 text-lg border-red-700"
                            >
                                -
                            </button>
                        </div>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="category" className="block font-medium mb-1 text-sm">Category:</label>
                        <select
                            id="category"
                            value={category} 
                            onChange={handleCategoryChange} 
                            className="border border-gray-300 rounded w-full p-1 text-sm"
                        >
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <input
                        type="submit"
                        value="Add Item"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm cursor-pointer"
                    />
                </form>
                <div className="text-sm mt-2">
                    <p>Name: {name}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Category: {category}</p>
                </div>    
            </div>
        </div>
    );
}


                
        
        
        
        
        
        