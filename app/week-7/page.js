"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";


export default function Page() {
    return (
        <div className="bg-gray-200 min-h-screen pb-6">
            <ItemList />
        </div>
    ); 
}