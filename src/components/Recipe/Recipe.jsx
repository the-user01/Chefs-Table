import PropTypes from "prop-types";
import { BsStopwatch } from "react-icons/bs";
import { FaGripfire } from "react-icons/fa";
import { ToastContainer } from 'react-toastify'



const Recipe = props => {

    const { recipe, handleCookItem } = props;

    const {id, img, title, description, ingredients, cook_time, calories } = recipe;

    return (
        <div className="mb-8 border w-3/4 border-gray-300 rounded-xl p-4 space-y-4 mx-auto">
            <img className="w-80 h-52 rounded-xl mx-auto" src={img} alt="Image of {}" />
            <h3 className="text-xl font-bold"> {title}</h3>
            <p>{description}</p>
            <hr />

            <h4 className="text-lg font-bold">Ingredients: {ingredients.length}</h4>
            <ul type="dotted">
                {
                    ingredients.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
            <hr />

            <div className="flex justify-between">
                {/* min */}
                <div className="flex">
                    <BsStopwatch />
                    <p className="ml-2">{cook_time} minutes</p>
                </div>

                {/* calory */}
                <div className="flex">
                    <FaGripfire />
                    <p className="ml-2">{calories} calories</p>
                </div>
            </div>

            <div>
                <button
                    onClick={()=> handleCookItem(id,recipe)}
                    className="btn rounded-full bg-[#0BE58A] text-[#150B2B]">Want to Cook</button>
            </div>


        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleCookItem: PropTypes.function,
}

export default Recipe;