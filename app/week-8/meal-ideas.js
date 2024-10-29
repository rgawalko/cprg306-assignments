"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMeals(data.meals);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const loadMealIdeas = () => {
        fetchMealIdeas(ingredient);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h1>Meal Ideas</h1>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="meal-item">
                        <h2>{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
                    </li>
                ))}
            </ul>
        </div>
    );
}