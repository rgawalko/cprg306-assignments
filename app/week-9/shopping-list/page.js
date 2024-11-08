"use client";

import { useState } from "react";
import Link from "next/link";
import ItemList from "../item-list";
import NewItem from "../new-item";
import MealIdeas from "../meal-ideas";
import itemsData from "../items.json";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
        window.location.href = "/week-9";
    };

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleDelete = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name.split(',')[0].trim().replace(/[^a-zA-Z\s]/g, '');
        setSelectedItemName(cleanedName);
    };

    return (
        <div className="bg-gray-200 min-h-screen flex flex-col p-2">
            <div className="flex justify-end mb-2">
                <button onClick={logout} className="text-blue-500 underline">
                    Sign Out
                </button>
            </div>
            <div className="flex-1 flex space-x-4 items-start">
                <ItemList items={items} onDelete={handleDelete} onItemSelect={handleItemSelect} />
                <NewItem onAddItem={handleAddItem} className="w-64" />
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </div>
    );
}