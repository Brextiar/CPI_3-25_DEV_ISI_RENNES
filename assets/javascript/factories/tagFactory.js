function createListTagItem(tagName) {
  const tagItem = document.createElement('li');
  tagItem.innerText = tagName;

  tagItem.addEventListener('click', (e) => {
    e.target.remove();
  });
  return tagItem;
}

function createList(listElement, listItems) {
  listItems.forEach((item) => {
    listElement.append(createListTagItem(item));
  });
}

export { createList };