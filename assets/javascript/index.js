import {
  getRecipes,
  getRecipesByWordInDevices,
  getRecipesByWordInEveryWhere,
  getRecipesByWordInIngredients,
  getRecipesByWordInUtensils
} from "./data/getRecipes.js";

document.addEventListener("DOMContentLoaded", () => {
  getRecipes();
});

const searchByWordInput = document.getElementById("search-by-word");
const ingredientSearchTagsInput = document.getElementById("ingredient-search-tags-input");
const devicesSearchTagsInput = document.getElementById("devices-search-tags-input");
const utensilsSearchTagsInput = document.getElementById("utensils-search-tags-input");

searchByWordInput.addEventListener("input", (e) => {
  e.preventDefault();
  const word = e.target.value;
  if (word.length > 2) {
    getRecipesByWordInEveryWhere(word);
  } else {
    getRecipes();
  }
});

ingredientSearchTagsInput.addEventListener("input", (e) => {
  e.preventDefault();
  const word = e.target.value;
  if (word.length > 2) {
    getRecipesByWordInIngredients(word);
  } else {
    getRecipes();
  }
});

devicesSearchTagsInput.addEventListener("input", (e) => {
  e.preventDefault();
  const word = e.target.value;
  if (word.length > 2) {
    getRecipesByWordInDevices(word);
  }else {
    getRecipes();
  }
});

utensilsSearchTagsInput.addEventListener("input", (e) => {
  e.preventDefault();
  const word = e.target.value;
  if (word.length > 2) {
    getRecipesByWordInUtensils(word);
  } else {
    getRecipes();
  }
});
