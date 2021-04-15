import { Entree } from "./entree.js";
import { MainCourse } from "./mainCourse.js";
import { Dessert } from "./dessert.js";

export class DishFactory {
  createDish(name, type) {
    switch (type.toLowerCase()) {
      case "entree":
        return new Entree(name);
        break;
      case "main course":
        return new MainCourse(name);
        break;
      case "dessert":
        return new Dessert(name);
        break;
    }
  }
}
