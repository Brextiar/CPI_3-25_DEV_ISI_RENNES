function createListTagItem(tagName) {
  const tagItem = document.createElement('li');
  tagItem.innerText = tagName;

  tagItem.addEventListener('click', (e) => {
    const tagType = e.target.parentElement.id;
    const tagItem = createSelectedTagItem(tagName, tagType);
    const tagContainer = document.getElementById('tag-container');
    tagContainer.append(tagItem);
    switch (tagType) {
      case 'ingredients-list':
        removeTagFromSessionStorage('ingredients', tagName);
        break;
      case 'devices-list':
        removeTagFromSessionStorage('devices', tagName);
        break;
      case 'utensils-list':
        removeTagFromSessionStorage('utensils', tagName);
        break;
      default:
        break;
    }

    const tagUl = e.target.parentElement;
    updateTagList(tagUl, JSON.parse(sessionStorage.getItem(tagType.slice(0, -5))));
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
    addTagToSessionStorage(tagType.slice(0, -5), tagName);
    updateTagList(tagUl, JSON.parse(sessionStorage.getItem(tagType.slice(0, -5))));
    tagItem.remove();
  });

  return tagItem;
}

function removeTagFromSessionStorage(key, tagName) {
    let items = JSON.parse(sessionStorage.getItem(key));
    let updatedItems = items.filter(item => item !== tagName);
    sessionStorage.setItem(key, JSON.stringify(updatedItems));
}

function addTagToSessionStorage(key, tagName) {
  let items = JSON.parse(sessionStorage.getItem(key));
  items.push(tagName);
  const itemsSorted = Array.from(items).sort();
  sessionStorage.setItem(key, JSON.stringify(itemsSorted));
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