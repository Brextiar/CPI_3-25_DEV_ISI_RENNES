import {getRecipes, getRecipesByTags} from "../data/getRecipes.js";

const selectedTagItems = [];

function createListTagItem(tagName) {
  const tagItem = document.createElement('li');
  tagItem.innerText = tagName;

  tagItem.addEventListener('click', (e) => {
    const tagType = e.target.parentElement.id;
    const tagItem = createSelectedTagItem(tagName, tagType);
    const selectedTagContainer = document.getElementById('selected-tag-container');
    selectedTagContainer.append(tagItem);
    selectedTagItems.push(tagName);
    console.log(selectedTagItems);
    getRecipesByTags(selectedTagItems);
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