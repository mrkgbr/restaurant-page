import { createNewElement } from "../scripts";

// menu contains: whole menu page in main
const menu = () => {
  const menu = document.querySelector(".main");
  menu.textContent = "";
  const menuContainer = createNewElement("div", menu, "", "", [
    "menu-container",
  ]);
  // hamburger section
  const hamburgerIcon = createNewElement("img", menuContainer, "", "", [
    "hamburger-icon",
  ]);
  hamburgerIcon.setAttribute("src", "./images/icons8-hamburger-100.png");
  createNewElement(
    "p",
    menuContainer,
    "Best hamburger you ever eat! Try it!",
    "",
    ["hamburger-text"]
  );
  // pizza section
  const pizzaIcon = createNewElement("img", menuContainer, "", "", [
    "pizza-icon",
  ]);
  pizzaIcon.setAttribute("src", "./images/icons8-pizza-100.png");
  createNewElement(
    "p",
    menuContainer,
    "Tasty Italian pizza! We don't lie!",
    "",
    ["pizza-text"]
  );
  // dessert section
  const dessertIcon = createNewElement("img", menuContainer, "", "", [
    "dessert-icon",
  ]);
  dessertIcon.setAttribute("src", "./images/icons8-cherry-cheesecake-100.png");
  createNewElement("p", menuContainer, "Calories? Who cares! I mean it.", "", [
    "dessert-text",
  ]);
};

export default menu;
