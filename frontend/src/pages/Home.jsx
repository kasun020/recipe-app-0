"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../api/config";
import Hero from "../components/Hero";

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
      {/* Removed the duplicate Navbar component */}
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Latest Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                key={recipe._id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  {recipe.title}
                </h2>
                <h3 className="text-md font-medium mb-2 text-gray-700">
                  Ingredients:
                </h3>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h3 className="text-md font-medium mb-2 text-gray-700">
                  Instructions:
                </h3>
                <p className="text-gray-600">{recipe.instructions}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No recipes found. Be the first to add one!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
