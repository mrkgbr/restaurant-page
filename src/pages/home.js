import { createNewElement } from "../scripts"; // tag, append to, content, id, [class]

// home contains: whole home page in main
const home = () => {
  const home = document.querySelector(".main");
  home.textContent = "";

  createNewElement("h1", home, "HUNGRY?", "", ["header1"]);
  createNewElement("h2", home, "GOOD!", "", ["header2"]);
};

export default home;
