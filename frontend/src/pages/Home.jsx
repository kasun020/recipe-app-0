"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../api/config";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${API_URL}/recipes`);
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <h3 className="text-lg font-medium mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="text-lg font-medium mb-2">Instructions:</h3>
            <p>{recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
