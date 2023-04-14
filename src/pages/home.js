import { createNewElement } from "../scripts"; // tag, append to, content, id, [class]

// home contains: whole home page in main
const home = () => {
  const home = document.querySelector(".main");
  home.textContent = "";
  const homeContainer = createNewElement("div", home, "", "", [
    "home-container",
  ]);

  createNewElement("h1", homeContainer, "HUNGRY?", "", ["header1"]);
  createNewElement("h2", homeContainer, "GOOD!", "", ["header2"]);
  const burgerPic = createNewElement(
    "img",
    homeContainer,
    "",
    "burger-pic",
    ""
  );
  burgerPic.setAttribute("src", "./images/burgers.jpeg");
};

export default home;
