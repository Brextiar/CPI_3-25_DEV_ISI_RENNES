import {describe, test, expect} from "vitest";

import {
  filterByTag,
  filterByWordInEveryWhere,
  filterRecipesByWordInIngredients
} from "../scripts/data/filterFunctions.js";

describe("the function", () => {
  const listOfRecipes = [
    {
      name: "poulet",
      description: "poulet",
      ingredients: [{ingredient: "tomato"}, {ingredient: "onion"}],
      appliance: "frying pan",
      ustensils: ["knife", "cutting board"]
    },
    {
      name: "carotte",
      description: "carotte",
      ingredients: [{ingredient: "sugar"}, {ingredient: "flour"}, {ingredient: "tomato"}],
      appliance: "oven",
      ustensils: ["whisk"]
    },
    {
      name: "carotte",
      description: "carotte",
      ingredients: [{ingredient: "sugar"}, {ingredient: "flour"}],
      appliance: "oven",
      ustensils: ["whisk"]
    },
  ];

  describe("filterByTag", () => {
    test("should return an array of recipes that contain the tags", () => {
      const resultRef = [{
        name: "poulet",
        description: "poulet",
        ingredients: [{ingredient: "tomato"}, {ingredient: "onion"}],
        appliance: "frying pan",
        ustensils: ["knife", "cutting board"]
      }];
      const ingredientsTags = ["onion"];
      const applianceTags = ["frying pan"];
      const ustensilsTags = ["knife"];
      const moreTags = ["tomato", "frying pan", "knife"];

      expect(filterByTag(listOfRecipes, ingredientsTags)).toEqual(resultRef);
      expect(filterByTag(listOfRecipes, applianceTags)).toEqual(resultRef);
      expect(filterByTag(listOfRecipes, ustensilsTags)).toEqual(resultRef);
      expect(filterByTag(listOfRecipes, moreTags)).toEqual(resultRef);
    });
  })
  describe("filterByWordInEveryWhere", () => {
    test("should return an array of recipes that contain the word", () => {
      const recipeToFind = listOfRecipes[0];
      const recipesTofind = [
        {
          name: "poulet",
          description: "poulet",
          ingredients: [{ingredient: "tomato"}, {ingredient: "onion"}],
          appliance: "frying pan",
          ustensils: ["knife", "cutting board"]
        },
        {
          name: "carotte",
          description: "carotte",
          ingredients: [{ingredient: "sugar"}, {ingredient: "flour"}, {ingredient: "tomato"}],
          appliance: "oven",
          ustensils: ["whisk"]
        }
      ];

      expect(filterByWordInEveryWhere(listOfRecipes, "poulet")).toEqual([recipeToFind]);
      expect(filterByWordInEveryWhere(listOfRecipes, "tomato")).toEqual(recipesTofind);
    });
  })

  describe("filterRecipesByWordInIngredients", () => {
    test("should return an array of recipes that contain the word in their ingredients", () => {
      const recipeToFind = listOfRecipes[0];
      const recipesTofind = [
        {
          name: "poulet",
          description: "poulet",
          ingredients: [{ingredient: "tomato"}, {ingredient: "onion"}],
          appliance: "frying pan",
          ustensils: ["knife", "cutting board"]
        },
        {
          name: "carotte",
          description: "carotte",
          ingredients: [{ingredient: "sugar"}, {ingredient: "flour"}, {ingredient: "tomato"}],
          appliance: "oven",
          ustensils: ["whisk"]
        }
      ];

      expect(filterRecipesByWordInIngredients(listOfRecipes, "tomato")).toEqual(recipesTofind);
      expect(filterRecipesByWordInIngredients(listOfRecipes, "onion")).toEqual([recipeToFind]);
    });
  })
})