import {createRecipe} from "./factories/recipe.js";

/**
 * Update the recipes list in the DOM
 *
 * @param recipesContainer -> The element who contains the recipes articles
 * @param recipesList -> The list of recipes to display take from the sessionStorage
 */
function updateRecipesList(recipesContainer, recipesList) {
  recipesContainer.innerHTML = "";
  recipesList.forEach(recipe => {
    const rec = createRecipe(recipe);
    recipesContainer.append(rec.createCard());
  });
}

function updateNbrOfRecipes(spanElement) {
  spanElement.innerText = JSON.parse(sessionStorage.getItem("recipes")).length;
}

function updateDOM(recipesContainer, recipesList, spanElement) {
  updateRecipesList(recipesContainer, recipesList);
  updateNbrOfRecipes(spanElement);
}

export { updateDOM };