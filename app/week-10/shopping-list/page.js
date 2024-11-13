"use client";


import { useState, useEffect } from "react";
import Link from "next/link";
import ItemList from "../item-list";
import NewItem from "../new-item";
import MealIdeas from "../meal-ideas";
import getItems from "../_services/shopping-list-service";
import addItem from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    const loadItems = async () => {
        const itemsData = await getItems(user.uid);
        setItems(itemsData);
    };

    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
        window.location.href = "/week-9";
    };

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

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