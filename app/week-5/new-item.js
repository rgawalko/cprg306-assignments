"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce") 

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
        category = name.replace(/[^a-zA-Z\s]/g, "");
        setName(category);
    };

   
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let item_obj = { name, quantity, category };
        console.log(item_obj);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    };
    


        

    return (
        <div className="m-2">
            <h2 className="text-2xl">Add An Item</h2>
            <form className="m-2" onSubmit ={(event) => handleSubmit(event)}>
                <label htmlFor="name">Name:</label>
                <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => handleNameChange(event)}
                className= 'border border-black m-2'
                required
                />


                <div className="my-5 ml-14 w-48 bg-violet-500 rounded-custom-md flex flex-col items-center justify-center p-4">
                        <p className="font-bold text-gray-100 mb-4"> Quantity: {quantity} </p>
                        <div className="flex space-x-2">
                        <button 
                            onClick={increment} 
                            className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 text-2xl  border-blue-900">
                            +
                        </button>
                        <button 
                            onClick={decrement} 
                            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 text-2xl  border-red-700">
                            -
                        </button>
                        </div>
                </div>
                <label htmlFor="category">Category:</label>
                <select
                id="category"
                value={category} // Assuming you have a `category` state to hold the selected value
                onChange={(event) => handleCategoryChange(event)} // This function will handle the change event for category
                className='border border-black m-2'
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
                <input
                type="submit"
                value="Add Item"
                className="m-2 bg-blue-500 hover:bg-blue-700"
                />
            </form>    
        </div>    
    );
};
                
        
        
        
        
        
        