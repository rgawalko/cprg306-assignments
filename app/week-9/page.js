"use client";

import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
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
        <div className="bg-gray-200 min-h-screen flex p-4 space-x-4">
            <div>
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName}!</p>
                        <button onClick={logout}>Sign Out</button>
                    </div>
                ) : (
                    <button onClick={login}>Sign In</button>
                )}
            </div>
            <div className="flex-1 flex space-x-4">
                <ItemList items={items} onDelete={handleDelete} onItemSelect={handleItemSelect} />
                <MealIdeas ingredient={selectedItemName} />
            </div>
            <div className="w-1/4">
                <NewItem onAddItem={handleAddItem} />
            </div>
        </div>
    );
}