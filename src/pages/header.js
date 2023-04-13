// header contains: logo, buttons (pages), opening hours
const header = () => {
  // this function creates html elements
  const createEle = function (tag, classText, appendTo, idText) {
    const element = document.createElement(tag);
    element.classList.add(classText);
    if (idText) {
      element.setAttribute("id", idText);
    }
    appendTo.appendChild(element);
    return element;
  };
  // adding elements
  // logo
  const header = document.querySelector(".header");
  createEle("div", "logo", header, "").textContent = "Logo";
  // buttons
  const button = createEle("div", "buttons", header, "");
  createEle("button", "button", button, "button-1").textContent = "Home";
  createEle("button", "button", button, "button-2").textContent = "Menu";
  createEle("button", "button", button, "button-3").textContent = "Contact";
  // info
  createEle("div", "info", header, "").textContent = "Info";
};

export default header;
