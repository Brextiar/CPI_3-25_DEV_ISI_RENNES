import { recipesList, filteredRecipes, ingredientTagsList, selectedIngredients, deviceTagsList, selectedDevices, utensilTagsList, selectedUtensils } from "../index.js";

function createListTagItem(tagName) {
  const tagItem = document.createElement('li');
  tagItem.innerText = tagName;

  tagItem.addEventListener('click', (e) => {
    const tagType = e.target.parentElement.id;
    const tagItem = createSelectedTagItem(tagName, tagType);
    const tagContainer = document.getElementById('tag-container');
    tagContainer.append(tagItem);
    const tagUl = e.target.parentElement;
    switch (tagType) {
      case 'ingredients-list':
        removeTagFromList(ingredientTagsList, tagName);
        updateTagList(tagUl, ingredientTagsList)
        break;
      case 'devices-list':
        removeTagFromList(deviceTagsList, tagName);
        updateTagList(tagUl, deviceTagsList)
        break;
      case 'utensils-list':
        removeTagFromList(utensilTagsList, tagName);
        updateTagList(tagUl, utensilTagsList)
        break;
      default:
        break;
    }
  });
  return tagItem;
}

function createSelectedTagItem(tagName, tagType) {
  const tagItem = document.createElement('div');
  switch (tagType) {
    case 'ingredients-list':
      tagItem.setAttribute('class', 'tag ingredient');
      break;
    case 'devices-list':
      tagItem.setAttribute('class', 'tag devices');
      break;
    case 'utensils-list':
      tagItem.setAttribute('class', 'tag utensils');
      break;
    default:
      tagItem.setAttribute('class', 'tag');
      break;
  }
  tagItem.innerHTML = `
  <p>${tagName}</p>
  <p>X</p>
  `;

  tagItem.addEventListener('click', (e) => {
    const tagUl = document.getElementById(tagType);
    switch (tagType) {
      case 'ingredients-list':
        addTagToTagsList(ingredientTagsList, tagName);
        updateTagList(tagUl, ingredientTagsList);
        break;
      case 'devices-list':
        addTagToTagsList(deviceTagsList, tagName);
        updateTagList(tagUl, deviceTagsList);
        break;
      case 'utensils-list':
        addTagToTagsList(utensilTagsList, tagName);
        updateTagList(tagUl, utensilTagsList);
        break;
      default:
        break;
    }
    tagItem.remove();
  });

  return tagItem;
}

function removeTagFromList(TagsList, tagName) {
    TagsList.delete(tagName);
}
//TODO : faire en sorte de construire mes list avec un array à partir d'un set pour ne conserver que des éléments uniques puis trier la liste.
// tagList doit être un Array pour que je n'ai qu'à push et sort
function addTagToTagsList(tagList, tagName) {
  const array = [...tagList].push(tagName);
  array.sort;
  tagList.clear();
  tagList.add(...array);
}

/**
 * Update the tag list in the DOM
 *
 * @param ulElement -> the ul element to update
 * @param tagsList -> the list of tags to display take from the sessionStorage
 */
function updateTagList(ulElement, tagsList) {
  ulElement.innerHTML = "";
  tagsList.forEach((tagName) => {
    ulElement.append(createListTagItem(tagName));
  });
}

export { updateTagList };