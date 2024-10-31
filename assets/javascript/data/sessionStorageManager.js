import { getRecipes } from "./getRecipes.js";

/**
 * Initialize the data with the recipes, ingredients, devices and ustensils
 */
function fetchData(localData) {
  return getRecipes().then((recipes) => {
    const recipesList = new Set();
    recipes.forEach(recipe => {
      recipesList.add(recipe);
    })
    localData.recipes = Array.from(recipesList);
    console.log("localData", localData);
    return localData;
  })
    .then(() => {
      const ingredientSet = new Set();
      localData.recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
          ingredientSet.add(ingredient.ingredient);
        });
        // deviceTagsList.add(appliance);
        // ustensils.forEach(ustensil => {
        //   utensilTagsList.add(ustensil);
        // });
      });
      console.log("LocalData", localData);
      localData.ingredients = Array.from(ingredientSet).sort((a, b) => a.localeCompare(b));
      return localData;
    }).then(() => {
      console.log("ingredients dans la prommesse", ingredientTagsList);
      recipesList.forEach(recipe => {
        const { appliance } = recipe;
        deviceTagsList.add(appliance);
      });
      return deviceTagsList;
    })
    .catch(error => console.error(error));
}

export { fetchData };
