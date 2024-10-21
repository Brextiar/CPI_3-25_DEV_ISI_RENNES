function createListTagItem(tagName) {
  const tagItem = document.createElement('li');
  tagItem.innerText = tagName;

  return tagItem;
}

function createList(listElement, listItems) {
  listItems.forEach((item) => {
    console.log(item);
    listElement.append(createListTagItem(item));
  });
}

export { createList };