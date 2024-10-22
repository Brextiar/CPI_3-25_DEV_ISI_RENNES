import { initSessionStorage } from "./data/sessionStorageManager.js";
import { updateTagList } from "./factories/tag.js";
import { updateDOM } from "./updateDOM.js";

const ingredientsList = document.getElementById("ingredients-list");
const devicesList = document.getElementById("devices-list");
const utensilsList = document.getElementById("utensils-list");

const recipeContainer = document.getElementById("recipes-container");
const recipeNumber = document.getElementById("recipe-number");

document.addEventListener("DOMContentLoaded", () => {
  initSessionStorage();
  updateDOM(recipeContainer, JSON.parse(sessionStorage.getItem("recipes")), recipeNumber);

  updateTagList(ingredientsList, JSON.parse(sessionStorage.getItem("ingredients")));
  updateTagList(devicesList, JSON.parse(sessionStorage.getItem("devices")));
  updateTagList(utensilsList, JSON.parse(sessionStorage.getItem("utensils")));
});



