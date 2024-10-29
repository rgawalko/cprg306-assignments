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
        <div className="bg-gray-200 min-h-screen flex p-4 space-x-4">
            <div className="flex-1">
                <ItemList items={items} onDelete={handleDelete} />
            </div>
            <div className="flex-1">
                <NewItem onAddItem={handleAddItem} />
            </div>
        </div>
    );
}

