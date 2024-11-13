import {describe, test, expect} from "vitest";
import { getData } from "../scripts/data/getRecipes.js";

describe("The function getData", () => {
  test("should return a list of recipes", () => {
    const recipeToCompare = {
      "id": 1,
      "image": "Recette01.jpg",
      "name": "Limonade de Coco",
      "servings": 1,
      "ingredients": [{"ingredient": "Lait de coco", "quantity": 400, "unit": "ml"}, {
        "ingredient": "Jus de citron",
        "quantity": 2
      }, {"ingredient": "Crème de coco", "quantity": 2, "unit": "cuillères à soupe"}, {
        "ingredient": "Sucre",
        "quantity": 30,
        "unit": "grammes"
      }, {"ingredient": "Glaçons"}],
      "time": 10,
      "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
      "appliance": "Blender",
      "ustensils": ["cuillère à Soupe", "verres", "presse citron"]
    }

    return getData().then((recipes) => {
      expect(recipes[0]).toEqual(recipeToCompare);
    });
  });
});