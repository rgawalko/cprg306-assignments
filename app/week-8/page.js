"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

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
            <div className="flex-1">
                <ItemList items={items} onDelete={handleDelete} onItemSelect={handleItemSelect} />
                <NewItem onAddItem={handleAddItem} />
            </div>
            <div className="flex-1">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </div>
    );
}
