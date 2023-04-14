import { createNewElement } from "../scripts";

// footer contains: copyright
const footer = () => {
  const footer = document.querySelector(".footer");
  createNewElement("p", footer, "© Markó Gábor", "", "");
  const github = createNewElement("a", footer, "GitHub", "", "");
  github.setAttribute("href", "https://github.com/mrkgbr/restaurant-page");
  github.setAttribute("target", "_blank");
};

export default footer;
