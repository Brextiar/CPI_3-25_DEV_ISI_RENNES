import { getData } from "./getData.js";

function extractIngredients() {
  const ingredientSet = new Set();
  JSON.parse(sessionStorage.getItem("recipes"))
    .forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        ingredientSet.add(ingredient.ingredient);
      });
    });

  return JSON.stringify(Array.from(ingredientSet).sort());
}

function extractDevices() {
  const deviceSet = new Set();
  JSON.parse(sessionStorage.getItem("recipes")).forEach(recipe => {
    deviceSet.add(recipe.appliance);
  });

  return JSON.stringify(Array.from(deviceSet).sort());
}

function extractUtensils() {
  const ustensilSet = new Set();
  JSON.parse(sessionStorage.getItem('recipes')).forEach(recipe => {
    recipe.ustensils.forEach(ustensil => {
      ustensilSet.add(ustensil);
    });
  });

  return JSON.stringify(Array.from(ustensilSet).sort());
}

/**
 * Initialize the sessionStorage with the recipes, ingredients, devices and ustensils
 */
function initSessionStorage() {
  getData().then((recipes) => {
    if (!sessionStorage.getItem('recipes') || JSON.parse(sessionStorage.getItem('recipes')).length !== recipes.length) {
      sessionStorage.setItem('recipes', JSON.stringify(recipes));
      sessionStorage.setItem('recipesStach', '');
      sessionStorage.setItem('ingredients', extractIngredients());
      sessionStorage.setItem('devices', extractDevices());
      sessionStorage.setItem('utensils', extractUtensils());
      console.log('sessionStorage initialized');
    }
  });
}

export { initSessionStorage };
