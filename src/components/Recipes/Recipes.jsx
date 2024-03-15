import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../../Recipe/Recipe";

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(
        ()=>{
            fetch('meals.json')
            .then(res=> res.json())
            .then(data => setRecipes(data))
        }
        ,[])

    return (
        <div className="mt-12">
            <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-3">Our Recipe</h3>
                <p>Get the delicious recipes at your home.</p>
            </div>
        
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
                {
                    recipes.map((recipe, index) => <Recipe key={index} recipe={recipe}></Recipe>)
                }

            </div>
        </div>
    );
};

export default Recipes;