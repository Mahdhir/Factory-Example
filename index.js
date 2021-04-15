// Import stylesheets
import "./style.css";
import { DishFactory } from "./dishFactory.js";
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let dishFactory = new DishFactory();
let shrimpEntree = dishFactory.createDish("Shrimp Cutlets", "entree");
let lambMain = dishFactory.createDish("Lamb Chops", "main course");
let baklavaDessert = dishFactory.createDish("Baklava", "dessert");

console.log(shrimpEntree, lambMain, baklavaDessert);
