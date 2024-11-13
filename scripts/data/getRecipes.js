/*
* This file contain the API calls to get the recipes and display them in the DOM.
* */

import {updateDOM} from "../utilities/updateDOM.js";
import {filterByTag, filterByWordInEveryWhere} from "./filterFunctions.js";

const dataUrl = 'https://gist.githubusercontent.com/baiello/0a974b9c1ec73d7d0ed7c8abc361fc8e/raw/e598efa6ef42d34cc8d7e35da5afab795941e53e/recipes.json';

/**
 * Fetch the data from the dataUrl
 *
 * @returns {Promise<any>} that contains the recipes
 */
function getData() {
  return fetch(dataUrl)
    .then(response => response.json())
    .then(recipes => recipes)
    .catch(error => error)
}

/**
 * Update the DOM with the recipes
 */
function getRecipes() {
  return getData()
    .then((recipes) => {
      updateDOM(recipes)
    })
    .catch(error => error)
}

/**
 * Update the DOM with the recipes that contain the selected tags
 *
 * @param selectedTags
 */
function getRecipesByTags(selectedTags) {

  getData()
    .then((recipes) => {
      updateDOM(filterByTag(recipes, selectedTags));
    })
    .catch(error => error)
}

/**
 * Update the DOM with the recipes that contain the word in the name, description, ingredients, appliance or ustensils
 *
 * @param word
 */
function getRecipesByWordInEveryWhere(word) {
  getData()
    .then((recipes) => {
      updateDOM(filterByWordInEveryWhere(recipes, word));
    })
    .catch(error => error)
}

/**
 * Update the DOM with the recipes that contain the word in the ingredients
 *
 * @param word
 */
function getRecipesByWordInIngredients(word) {
  const regex = new RegExp(word, 'gi');
  getData()
    .then((recipes) => {
      const filteredRecipes = recipes.filter(recipe => {
        const {ingredients} = recipe;
        return ingredients.some(ingredient => regex.test(ingredient.ingredient.toLowerCase()));
      });
      updateDOM(filteredRecipes);
    })
    .catch(error => error)
}

/**
 * Update the DOM with the recipes that contain the word in the appliance
 *
 * @param word
 */
function getRecipesByWordInDevices(word) {
  const regex = new RegExp(word, 'gi');
  getData()
    .then((recipes) => {
      const filteredRecipes = recipes.filter(recipe => {
        const {appliance} = recipe;
        return regex.test(appliance);
      });
      updateDOM(filteredRecipes);
    })
    .catch(error => error)
}

/**
 * Update the DOM with the recipes that contain the word in the ustensils
 *
 * @param word
 */
function getRecipesByWordInUtensils(word) {
  const regex = new RegExp(word, 'gi');
  getData()
    .then((recipes) => {
      const filteredRecipes = recipes.filter(recipe => {
        const {ustensils} = recipe;
        return regex.test(ustensils);
      });
      updateDOM(filteredRecipes);
    })
    .catch(error => error)
}

export {getData, getRecipes, getRecipesByTags, getRecipesByWordInEveryWhere, getRecipesByWordInIngredients, getRecipesByWordInDevices, getRecipesByWordInUtensils};