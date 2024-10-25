import { fetchData } from "./data/sessionStorageManager.js";
import { updateDOM } from "./updateDOM.js";

const recipesList = new Set();
const filteredRecipes = new Set();
let ingredientTagsList = [];
const selectedIngredients = new Set();
const deviceTagsList = new Set();
const selectedDevices = new Set();
const utensilTagsList = new Set();
const selectedUtensils = new Set();

document.addEventListener("DOMContentLoaded", () => {
  fetchData(recipesList, ingredientTagsList, deviceTagsList, utensilTagsList).then(() => {
    updateDOM(recipesList, ingredientTagsList, deviceTagsList, utensilTagsList);
  });
});

export { recipesList, filteredRecipes, ingredientTagsList, selectedIngredients, deviceTagsList, selectedDevices, utensilTagsList, selectedUtensils };
