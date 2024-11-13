import { describe, test, expect } from "vitest";

import { filterByTag } from "../scripts/data/filterFunctions.js";

describe("the function filterByTag", () => {
    const listOfRecipes = [
        {
            ingredients: [{ ingredient: "tomato" }, { ingredient: "onion" }],
            appliance: "frying pan",
            ustensils: ["knife", "cutting board"]
        },
        {
            ingredients: [{ ingredient: "sugar" }, { ingredient: "flour" }],
            appliance: "oven",
            ustensils: ["whisk"]
        },
        {
            ingredients: [{ ingredient: "sugar" }, { ingredient: "flour" }],
            appliance: "oven",
            ustensils: ["whisk"]
        },
      ];

      test("should return an array of recipes that contain the tags", () => {
        const resultRef = [{
            ingredients: [{ ingredient: "tomato" }, { ingredient: "onion" }],
            appliance: "frying pan",
            ustensils: ["knife", "cutting board"]
        }];
        const ingredientsTags = ["tomato"];
        const applianceTags = ["frying pan"];
        const ustensilsTags = ["knife"];
        const moreTags = ["tomato", "frying pan", "knife"];

        expect(filterByTag(listOfRecipes, ingredientsTags)).toEqual(resultRef);
        expect(filterByTag(listOfRecipes, applianceTags)).toEqual(resultRef);
        expect(filterByTag(listOfRecipes, ustensilsTags)).toEqual(resultRef);
        expect(filterByTag(listOfRecipes, moreTags)).toEqual(resultRef);
      });
});