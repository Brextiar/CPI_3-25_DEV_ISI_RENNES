import { initSessionStorage } from "./data/sessionStorageManager.js";
import { createList } from "./factories/tagFactory.js";

const ingredientsList = document.getElementById("ingredients-list");
const devicesList = document.getElementById("devices-list");
const utensilsList = document.getElementById("utensils-list");

document.addEventListener("DOMContentLoaded", () => {
  initSessionStorage();
  createList(ingredientsList, JSON.parse(sessionStorage.getItem("ingredients")));
  createList(devicesList, JSON.parse(sessionStorage.getItem("devices")));
  createList(utensilsList, JSON.parse(sessionStorage.getItem("ustensils")));
});
