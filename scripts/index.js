import '../styles/fonts.css'
import '../styles/styles.css'
import '../styles/index/card.css'
import '../styles/index/header.css'
import '../styles/index/main.css'
import '../styles/index/filters.css'

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
  } else {
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

document.getElementById("clear-ingredients").addEventListener("click", (e) => {
  e.preventDefault();
  ingredientSearchTagsInput.value = "";
  getRecipes();
});

document.getElementById("clear-devices").addEventListener("click", (e) => {
  e.preventDefault();
  devicesSearchTagsInput.value = "";
  getRecipes();
});

document.getElementById("clear-utensils").addEventListener("click", (e) => {
  e.preventDefault();
  utensilsSearchTagsInput.value = "";
  getRecipes();
});

