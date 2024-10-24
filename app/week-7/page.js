"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleDelete = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };

    return (
        <div className="bg-gray-200 min-h-screen flex">
            <div className="flex-1 p-4">
                <ItemList items={items} onDelete={handleDelete} />
            </div>
            <div className="w-1/4 p-4 flex justify-center items-start">
                <NewItem onAddItem={handleAddItem} />
            </div>
        </div>
    );
}
