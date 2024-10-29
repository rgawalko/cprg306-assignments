"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.meals) {
                setMeals(data.meals);
                setError(null); // Clear any previous error
            } else {
                setMeals([]);
                setError('No meals found for the specified ingredient.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setError('An error occurred while fetching meal ideas.');
        }
    };

    const loadMealIdeas = () => {
        if (ingredient) {
            fetchMealIdeas(ingredient);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h1>Meal Ideas</h1>
            {error && <p className="error-message">{error}</p>}
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="meal-item">
                        <h2>{meal.strMeal}</h2>
                        <img 
                            src={meal.strMealThumb} 
                            alt={meal.strMeal} 
                            className="meal-image" 
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}