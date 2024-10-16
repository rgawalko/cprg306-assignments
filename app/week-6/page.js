"use client";

import dogsJson from "./dogs.json"; //dogsJson is an array of objects
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [selectedDogId, setSelectedDogId] = useState(-1);
    let dogs = [...dogsJson]; // shallow copy of dogsJson
    dogs.sort((a, b) => a.name.localeCompare(b.name)); // sort by name
    /*dogs.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return; 0
    });*/
    dogs = dogs.filter((dog) => dog.name.length > 5); // filter by name length
    const handleClick = (id) => {
        if (selectedDogId === id) {
            setSelectedDogId(-1);
            return;
        }
        setSelectedDogId(id);
    };


    return (
        <main className="p-2">
            <h1 className="text-2xl font-semibold">Week 6</h1>
            <p>Current id: {selectedDogId}</p>
            <ul>
                {dogsJson.map((dog) => (
                  <li key={dog.name}
                      className={ `py-2 m-2 ${
                        dog.id === selectedDogId ? "bg-gray-200" : "bg-gray-100"
                      }`} 
                      onClick={() => handleClick(dog.id)}>
                    <h2 className="text-lg font-semibold">{dog.name}</h2>
                    <p className="text=sm">{dog.description}</p>
                    <p>
                        <Image src={dog.imageUrl} alt={dog.name} width={640} height={480}/>
                    </p>
                  </li>

                ))}
            </ul>
          
        </main>
    );
}