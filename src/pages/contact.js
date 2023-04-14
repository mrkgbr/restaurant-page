import { createNewElement } from "../scripts";

// contact contains: whole contact page in main
const contact = () => {
  const contact = document.querySelector(".main");
  contact.textContent = "";
  const contactContainer = createNewElement("div", contact, "", "", [
    "contact-container",
  ]);
  createNewElement("h2", contactContainer, "Place your order now!", "", "");
  createNewElement("h3", contactContainer, "World wide fast delivery!", "", "");
  createNewElement("p", contactContainer, "+98 7654 3210", "", "");
  createNewElement("h2", contactContainer, "We are here", "", ["map-header"]);
  const map = createNewElement("img", contactContainer, "", "", ["map"]);
  map.setAttribute("src", "./images/map.jpg");
};

export default contact;
