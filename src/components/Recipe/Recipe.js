import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Omlette from "../../Images/image-omelette.jpeg";

const Recipe = () => {
  return (
    <div className="body">
      <div className="main-container">
      <img src={Omlette} alt="An omlette recipe description" />
        <div className="header">
          
          <h1 className="title"> Simple Omelette Recipe</h1>
          <p className="paragraph">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs <br/>cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="prep-details">
            <h2>Preparation time</h2>
            <ul>
              <li><span>Total</span> : Approximately 10 minutes</li>
              <li><span>Preparation</span>: 5 minutes</li>
              <li><span>Cooking</span> : 5 minutes</li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>

          <div className="instructions">
            <h2>Instructions</h2>
            <ol>
              <li>
                <span>Beat the eggs :</span> In a bowl, beat the eggs with a pinch of salt and
                pepper until they are well mixed. You can add a tablespoon of
                water or milk for a fluffier texture.
              </li>
              <li>
                <span>Heat the pan: </span> Place a non-stick frying pan over medium heat and
                add butter or oil.
              </li>
              <li>
                <span> Cook the omelette: </span> Once the butter is melted and bubbling, pour
                in the eggs. Tilt the pan to ensure the eggs evenly coat the
                surface.
              </li>
              <li>
                <span> Add fillings (optional): </span> When the eggs begin to set at the edges
                but are still slightly runny in the middle, sprinkle your chosen
                fillings over one half of the omelette.
              </li>
              <li>
                <span> Fold and serve: </span> As the omelette continues to cook, carefully
                lift one edge and fold it over the fillings. Let it cook for
                another minute, then slide it onto a plate.
              </li>
              <li>
               <span>Enjoy: </span> Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>
          </div>
          <div className="nutrition-section">
            <h2>Nutrition</h2>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table>
              <tbody>
                <tr>
                  <td>Calories</td>
                  <td className="column"> 277kcal</td>
                </tr>
                <tr>
                  <td>Carbs</td>
                  <td className="column"> 0g</td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td className="column">20g</td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td className="column">22g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="attribution">
        Challenge by{" "}
        <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </Link>
        . Coded by <Link to="#">Jayson Alfie</Link>.
      </div>
    </div>
  );
};

export default Recipe;
