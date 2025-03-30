"use client"

import { useState } from "react"
import axios from "axios"
import API_URL from "../api/config";

function CreateRecipe() {
  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem("token")
      await axios.post(
        `${API_URL}/recipes`,
        {
          title,
          ingredients: ingredients.split(",").map((i) => i.trim()),
          instructions,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      alert("Recipe created successfully!")
      setTitle("")
      setIngredients("")
      setInstructions("")
    } catch (error) {
      console.error("Error creating recipe:", error)
      alert("Error creating recipe. Please try again.")
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="ingredients" className="block mb-1">
            Ingredients (comma-separated)
          </label>
          <input
            type="text"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="instructions" className="block mb-1">
            Instructions
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Create Recipe
        </button>
      </form>
    </div>
  )
}

export default CreateRecipe

