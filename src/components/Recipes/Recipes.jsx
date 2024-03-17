import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookingInfo from "../CookingInfo/CookingInfo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    const [cookItem, setCookItem] = useState([])

    const [prepareItem, setPrepareItem] = useState([])

    useEffect(
        () => {
            fetch('./meals.json')
                .then(res => res.json())
                .then(data => setRecipes(data))
        }
        , []);

    /* Want to cook data */

    const handleCookItem = (id, item) => {

        const newCookItem = [...cookItem, item];

        const findCookItem = cookItem.find(item => item.id === id);

        if (findCookItem) {
            toast("Already Added");
        } else {
            setCookItem(newCookItem)
        }
        

    }

    /* prepare selected items */

    const handlePrepareBtn = (id) => {
        const remainItem = cookItem.filter(item => item.id !== id);
        setCookItem(remainItem);

        const foundItem = cookItem.find(item => item.id === id);


        const newPrepareItem = [...prepareItem, foundItem];
        setPrepareItem(newPrepareItem);

    }


    return (
        <div className="mt-12">
            
            <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-3">Our Recipe</h3>
                <p>Get the delicious recipes at your home.</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-4">

                <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/4">
                    {
                        recipes.map((recipe, index) => <Recipe
                            key={index}
                            recipe={recipe}
                            handleCookItem={handleCookItem}
                        ></Recipe>)
                    }

                </div>

                {/* Cooking  Status*/}


                <div className="w-full lg:w-2/4 border border-gray-300 rounded-xl p-4 h-[946px]">
                    <CookingInfo
                        cookItem={cookItem}
                        prepareItem={prepareItem}
                        handlePrepareBtn={handlePrepareBtn}
                    ></CookingInfo>
                </div>

            </div>
            <ToastContainer />

        </div>

    );
};

export default Recipes;