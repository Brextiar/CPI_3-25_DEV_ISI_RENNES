function createIngredientList(ingredients) {
  const ul = document.createElement('ul');

  ingredients.forEach((ingredient) => {
    const li = document.createElement('li');

    li.innerHTML = `
    <p>${ingredient.ingredient}</p>
    <p>${ingredient.quantity !== undefined ? ingredient.quantity : "QS"} ${ingredient.unit !== undefined ? ingredient.unit : ""}</p>
  `;
    ul.append(li);
  });

  return ul;
}

function createCard() {
  const article = document.createElement('article');
  article.setAttribute('class', 'recipe-card');

  const ingredientList = createIngredientList(this.ingredients);

  article.innerHTML = `
  <div class="img-container">
          <img src="./assets/images/${this.image.slice(0, -4)}.webp" alt="Image de la recette ${this.name}">
        </div>
        <div class="recipe-container">
          <h2>${this.name}</h2>
          <h3>Recette</h3>
          <p class="recipe-description">
          ${this.description}
          </p>
          <h3>Ingrédients</h3>
          ${ingredientList.outerHTML}
        </div>
        `;

  return article;
}

export const createRecipe = (recipe) => {
  const {appliance, description, id, image, ingredients, name, servings, time, ustensils} = recipe;

  return {
    appliance: appliance,
    description: description,
    id: id,
    image: image,
    ingredients: ingredients,
    name: name,
    servings: servings,
    time: time,
    ustensils: ustensils,
    createCard: createCard
  }
}