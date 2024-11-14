import {describe, test, expect} from "vitest";

import {createRecipe} from "../scripts/factories/recipe.js";

const recipe = {
  id: 1,
  image: "Recette01.jpg",
  name: "Limonade de Coco",
  servings: 1,
  ingredients: [
    {"ingredient": "Lait de coco", "quantity": 400, "unit": "ml"},
    {"ingredient": "Jus de citron", "quantity": 2},
    {"ingredient": "Crème de coco", "quantity": 2, "unit": "cuillères à soupe"},
    {"ingredient": "Sucre", "quantity": 30, "unit": "grammes"},
    {"ingredient": "Glaçons"}],
  time: 10,
  description: "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
  appliance: "Blender",
  ustensils: ["cuillère à Soupe", "verres", "presse citron"]
};
const recipeObject = createRecipe(recipe);

describe('The function createRecipe', () => {
  test('should return an object', () => {
    expect(typeof recipeObject).toBe('object');
  });

  describe('The object returned', () => {
    test('should have the right properties', () => {
      expect(recipeObject.id).toBe(1);
      expect(recipeObject.image).toBe('Recette01.jpg');
      expect(recipeObject.name).toBe('Limonade de Coco');
      expect(recipeObject.servings).toBe(1);
      expect(recipeObject.ingredients).toEqual([
        {"ingredient": "Lait de coco", "quantity": 400, "unit": "ml"},
        {"ingredient": "Jus de citron", "quantity": 2},
        {"ingredient": "Crème de coco", "quantity": 2, "unit": "cuillères à soupe"},
        {"ingredient": "Sucre", "quantity": 30, "unit": "grammes"},
        {"ingredient": "Glaçons"}]);
      expect(recipeObject.time).toBe(10);
      expect(recipeObject.description).toBe("Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée");
      expect(recipeObject.appliance).toBe('Blender');
      expect(recipeObject.ustensils).toEqual(["cuillère à Soupe", "verres", "presse citron"]);
    });

    test('should have the method createCard', () => {
      expect(typeof recipeObject.createCard).toBe('function');
    });

    test('should have the method createIngredientList', () => {
      expect(typeof recipeObject.createIngredientList).toBe('function');
    });

    describe('The function', () => {
      describe('createCard', () => {

        const card = recipeObject.createCard();

        test('should return an article element', () => {
          expect(card.tagName).toBe('ARTICLE');
        });

        test('should have the class "recipe-card"', () => {
          expect(card.classList.contains('recipe-card')).toBe(true);
        });

        test('should have an image container', () => {
          expect(card.querySelector('.img-container')).not.toBeNull();
        });

        test('should have an image', () => {
          expect(card.querySelector('.img-container img').src).toContain('Recette01.webp');
        });

        test('should have a list of ingredients', () => {
          expect(card.querySelector('.recipe-container ul')).not.toBeNull();
        });
      });

      describe('createIngredientList', () => {
        const ingredientList = recipeObject.createIngredientList(recipe.ingredients);

        test('should return a ul element', () => {
          expect(ingredientList.tagName).toBe('UL');
        });

        test('should have 5 li elements', () => {
          expect(ingredientList.querySelectorAll('li').length).toBe(5);
        });

        test('should have the right content', () => {
          const li = ingredientList.querySelectorAll('li');
          expect(li[0].textContent).toContain('Lait de coco');
          expect(li[0].textContent).toContain('400 ml');
          expect(li[1].textContent).toContain('Jus de citron');
          expect(li[1].textContent).toContain('2');
          expect(li[2].textContent).toContain('Crème de coco');
          expect(li[2].textContent).toContain('2 cuillères à soupe');
          expect(li[3].textContent).toContain('Sucre');
          expect(li[3].textContent).toContain('30 grammes');
          expect(li[4].textContent).toContain('Glaçons');
        });
      });
    });
  });
});


