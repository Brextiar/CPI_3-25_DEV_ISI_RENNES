const ingredientDisplaySearch = document.getElementById('displayed-Ingredients-tag-search');
const ingredientSearchInput = document.getElementById('search-ingredients-label');
const ingredientTagsWrapperButton = document.getElementById('ingredients-button-wrapper');

const devicesDisplaySearch = document.getElementById('displayed-device-tag-search');
const devicesSearchInput = document.getElementById('search-devices-label');
const devicesTagsWrapperButton = document.getElementById('devices-button-wrapper');

const utensilsDisplaySearch = document.getElementById('displayed-utensils-tag-search');
const utensilsSearchInput = document.getElementById('search-utensils-label');
const utensilsTagsWrapperButton = document.getElementById('utensils-button-wrapper');

ingredientSearchInput.addEventListener('click', () => {
    toggleDisplay(ingredientDisplaySearch, ingredientTagsWrapperButton);
});

devicesSearchInput.addEventListener('click', () => {
    toggleDisplay(devicesDisplaySearch, devicesTagsWrapperButton);
});

utensilsSearchInput.addEventListener('click', () => {
    toggleDisplay(utensilsDisplaySearch, utensilsTagsWrapperButton);
});

/**
 * Toggle the display of a list of tags
 *
 * @param displayElement
 * @param buttonElement
 */
function toggleDisplay(displayElement, buttonElement) {
    displayElement.style.display = displayElement.style.display === 'block' ? 'none' : 'block';
    buttonElement.classList.toggle('turn');
}

