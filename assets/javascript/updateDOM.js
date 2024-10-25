import { createRecipe } from "./factories/recipe.js";
import { updateTagList } from "./factories/tag.js";

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

function updateNbrOfRecipes(nbrOfRecipeSpanElement, nbrOfRecipes) {
  nbrOfRecipeSpanElement.innerText = nbrOfRecipes;
}

function updateDOM(recipesList, ingredientTagsList, deviceTagsList, utensilTagsList) {
  const ingredientsListElement = document.getElementById("ingredients-list");
  const devicesListElement = document.getElementById("devices-list");
  const utensilsListElement = document.getElementById("utensils-list");
  const recipesContainer = document.getElementById("recipes-container");
  const recipeNumber = document.getElementById("recipe-number");

  const nbrOfRecipes = recipesList.size;

  updateRecipesList(recipesContainer, recipesList);
  updateNbrOfRecipes(recipeNumber, nbrOfRecipes);
  updateTagList(ingredientsListElement, ingredientTagsList);
  updateTagList(devicesListElement, deviceTagsList);
  updateTagList(utensilsListElement, utensilTagsList);
}

export { updateDOM };