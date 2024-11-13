/**
 * Filtering a list of Recipe objects by tags
 *
 * @param   recipesList
 * @param   tagsArray
 *
 * @returns { Array } of Recipe objects || []
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

function filterByWordInEveryWhere(recipesList, word) {
  const regex = new RegExp(word, 'gi');

  return recipesList.filter(recipe => {
    const {name, description, ingredients, appliance, ustensils} = recipe;
    return regex.test(name.toLowerCase())
      || regex.test(description.toLowerCase())
      || ingredients.some(ingredient => regex.test(ingredient.ingredient.toLowerCase()))
      || regex.test(appliance)
      || regex.test(ustensils);
  });
}

export { filterByTag, filterByWordInEveryWhere};