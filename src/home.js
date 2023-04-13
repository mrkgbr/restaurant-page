const homePage = () => {
  const createEle = function (tag, classText, appendTo) {
    const element = document.createElement(tag);
    element.classList.add(classText);
    appendTo.appendChild(element);
    return element;
  };

  const content = document.getElementById("content");
  const home = createEle("div", "home", content);
  createEle("div", "header", home);
  createEle("div", "main", home);
  createEle("div", "footer", home);

  // const home = document.createElement("div");
  // home.setAttribute("id", "home");
  // content.appendChild(home);

  // const header = document.createElement("div");
  // header.classList.add("header");
  // home.appendChild(header);

  // const main = document.createElement("div");
  // main.classList.add("main");
  // home.appendChild(main);

  // const footer = document.createElement("div");
  // footer.classList.add("footer");
  // home.appendChild(footer);
};

export default homePage;
