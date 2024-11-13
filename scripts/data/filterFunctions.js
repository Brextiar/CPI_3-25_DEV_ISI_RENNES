import {getRecipesByWordInIngredients} from "./getRecipes.js";

/**
 * Filtering a list of Recipe objects by tags
 *
 * @param   recipesList
 * @param   tagsArray
 *
 * @returns { Array }
 */
function filterByTag(recipesList, tagsArray) {
  return recipesList.filter(recipe => {
    const {ingredients, appliance, ustensils} = recipe;
    return tagsArray.every(tag => {
      return ingredients.some(ingredient => ingredient.ingredient === tag)
        || appliance.includes(tag)
        || ustensils.includes(tag);
    });
  });
}

/**
 * Filtering a list of Recipe objects by word, searching everywhere
 * @param   recipesList
 * @param   word
 *
 * @returns { Array }
 */
function filterByWordInEveryWhere(recipesList, word) {
  const regex = new RegExp(word, 'gi');

  return recipesList.filter(recipe => {
    const {name, description, ingredients, appliance, ustensils} = recipe;
    return regex.test(name)
      || regex.test(description)
      || ingredients.some(ingredient => regex.test(ingredient.ingredient))
      || regex.test(appliance)
      || regex.test(ustensils);
  });
}

/**
 * Filtering a list of Recipe objects by word in ingredients
 * @param   recipesList
 * @param   word
 *
 * @returns { Array }
 */
function filterRecipesByWordInIngredients(recipesList, word) {
  const regex = new RegExp(word, 'gi');
  return recipesList.filter(recipe => {
    const {ingredients} = recipe;
    return ingredients.some(ingredient => regex.test(ingredient.ingredient));
  });
}

/**
 * Filtering a list of Recipe objects by word in devices
 * @param   recipesList
 * @param   word
 *
 * @returns { Array }
 */
function filterRecipesByWordInDevices(recipesList, word) {
  return recipesList.filter(recipe => {
    const {appliance} = recipe;
    return regex.test(appliance);
  });
}

function filterRecipesByWordInUtensils(recipesList, word) {
  const regex = new RegExp(word, 'gi');
  return recipesList.filter(recipe => {
    const {ustensils} = recipe;
    return regex.test(ustensils);
  });
}

export {
  filterByTag,
  filterByWordInEveryWhere,
  filterRecipesByWordInIngredients,
  filterRecipesByWordInDevices,
  filterRecipesByWordInUtensils
};