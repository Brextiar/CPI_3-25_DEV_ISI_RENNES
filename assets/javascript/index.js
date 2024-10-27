import {getRecipes, getRecipesByTags} from "./data/getRecipes.js";

document.addEventListener("DOMContentLoaded", () => {
  getRecipes();
  //  getRecipesByTags(["Sucre", "Lait", "Pruneaux"]);

});

