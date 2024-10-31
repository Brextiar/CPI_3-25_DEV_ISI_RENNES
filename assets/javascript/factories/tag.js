import {getRecipes, getRecipesByTags} from "../data/getRecipes.js";

const selectedTagItems = [];

/**
 * Create a tag item with an eventListener to display in the list and update DOM when selected
 *
 * @param   tagName
 *
 * @returns {HTMLLIElement}
 */
function createListTagItem(tagName) {
  const tagItem = document.createElement('li');
  tagItem.innerText = tagName;

  tagItem.addEventListener('click', (e) => {
    const tagType = e.target.parentElement.id;
    const tagItem = createSelectedTagItem(tagName, tagType);
    const selectedTagContainer = document.getElementById('selected-tag-container');

    selectedTagContainer.append(tagItem);
    selectedTagItems.push(tagName);

    getRecipesByTags(selectedTagItems);
  });
  return tagItem;
}

/**
 * Create a Selected tag item with an eventListener to delete the tag from the selected list and update the DOM
 *
 * @param   tagName
 * @param   tagType
 *
 * @returns {HTMLDivElement}
 */
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
    selectedTagItems.splice(selectedTagItems.indexOf(tagName), 1);
    console.log("selected", selectedTagItems);
    if (selectedTagItems.length === 0) {
      getRecipes();
    } else {
      getRecipesByTags(selectedTagItems);
    }
    tagItem.remove();

  });

  return tagItem;
}

export {createListTagItem, createSelectedTagItem};