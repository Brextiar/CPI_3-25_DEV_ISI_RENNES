import {updateDOM} from "../updateDOM.js";

const dataUrl = 'https://gist.githubusercontent.com/baiello/0a974b9c1ec73d7d0ed7c8abc361fc8e/raw/e598efa6ef42d34cc8d7e35da5afab795941e53e/recipes.json';

function getData() {
  return fetch(dataUrl)
    .then(response => response.json())
    .then(recipes => recipes)
    .catch(error => error)
}

function getRecipes() {
  getData()
    .then((recipes) => { updateDOM(recipes) })
    .catch(error => error)
}



export { getRecipes };