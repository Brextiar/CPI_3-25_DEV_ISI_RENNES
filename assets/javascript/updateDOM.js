import { createRecipe } from "./factories/recipe.js";
import {createListTagItem} from "./factories/tag.js";

/**
 * Update the tag list in the DOM
 *
 * @param ulElement -> the ul element to update
 * @param tagsList -> the list of tags to display take from the sessionStorage
 */
function updateTagList(ulElement, tagsList) {
  ulElement.innerHTML = "";
  tagsList.forEach((tagName) => {
    ulElement.append(createListTagItem(tagName));
  });
}

/**
 * Update the recipes list in the DOM
 *
 * @param recipes -> The list of recipes to display take from the sessionStorage
 */
function updateRecipesList(recipes) {
  const recipesContainer = document.getElementById("recipes-container");
  recipesContainer.innerHTML = "";
  const sortedRecipes = recipes.sort((a, b) => a.name.localeCompare(b.name));
  sortedRecipes.forEach((recipe) => {
    const rec = createRecipe(recipe);
    recipesContainer.append(rec.createCard());
  });
}

function updateNbrOfRecipes(nbrOfRecipes) {
  const nbrOfRecipeSpanElement = document.getElementById("recipe-number");
  nbrOfRecipeSpanElement.innerText = nbrOfRecipes;
}

function updateIngredientsTagsList(recipes) {
  const ingredientsListElement = document.getElementById("ingredients-list");
  const ingredientTagsList = new Set();
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredientTagsList.add(ingredient.ingredient);
    });
  });
  const arrayIngredientTagsList = Array.from(ingredientTagsList).sort((a, b) => a.localeCompare(b));
  updateTagList(ingredientsListElement, arrayIngredientTagsList);
}

function updateDevicesTagsList(recipes) {
  const devicesListElement = document.getElementById("devices-list");
  const deviceTagsList = new Set();
  recipes.forEach((recipe) => {
    deviceTagsList.add(recipe.appliance);
  });
  const arrayDeviceTagsList = Array.from(deviceTagsList).sort((a, b) => a.localeCompare(b));
  updateTagList(devicesListElement, arrayDeviceTagsList);
}

function updateUtensilsTagsList(recipes) {
  const utensilsListElement = document.getElementById("utensils-list");
  const utensilTagsList = new Set();
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((utensil) => {
      utensilTagsList.add(utensil);
    });
  });
  const arrayUtensilTagsList = Array.from(utensilTagsList).sort((a, b) => a.localeCompare(b));
  updateTagList(utensilsListElement, arrayUtensilTagsList);
}

function updateDOM(recipes) {
  updateRecipesList(recipes);
  updateNbrOfRecipes(recipes.length);
  updateIngredientsTagsList(recipes);
  updateDevicesTagsList(recipes);
  updateUtensilsTagsList(recipes);
}

export { updateDOM };