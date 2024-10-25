import { getData } from "./getData.js";

/**
 * Initialize the data with the recipes, ingredients, devices and ustensils
 */
function fetchData(recipesList, ingredientTagsList, deviceTagsList, utensilTagsList) {
  return getData().then((recipes) => {
    recipes.forEach(recipe => {
      recipesList.add(recipe);
    })
    return recipesList;
  })
    .then(() => {
      const ingredientSet = new Set();
      recipesList.forEach(recipe => {
        const { ingredients, appliance, ustensils } = recipe;
        ingredients.forEach(ingredient => {
          ingredientSet.add(ingredient.ingredient);
        });
        deviceTagsList.add(appliance);
        ustensils.forEach(ustensil => {
          utensilTagsList.add(ustensil);
        });
      });
      ingredientTagsList = Array.from(ingredientSet).sort((a, b) => a.localeCompare(b));
    })
    .catch(error => console.error(error));
}

export { fetchData };
