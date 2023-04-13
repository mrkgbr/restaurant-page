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
  const header = document.querySelector(".header");
  // logo
  const logoPic = document.createElement("img");
  logoPic.setAttribute("src", "./images/fast-food.png");
  createEle("div", "logo", header, "").appendChild(logoPic);
  // buttons
  const button = createEle("div", "buttons", header, "");
  // home
  const homePic = document.createElement("img");
  homePic.setAttribute("src", "./images/icons8-home-page-100.png");
  createEle("button", "button", button, "button-1").appendChild(homePic);
  // menu
  const menuPic = document.createElement("img");
  menuPic.setAttribute("src", "./images/icons8-food-100.png");
  createEle("button", "button", button, "button-2").appendChild(menuPic);
  // contact
  const contactPic = document.createElement("img");
  contactPic.setAttribute("src", "./images/icons8-location-100.png");
  createEle("button", "button", button, "button-3").appendChild(contactPic);
  // info
  const info = createEle("div", "info", header, "");
  createEle("p", "status", info, "").textContent = "Currently OPEN";
  createEle("p", "call", info, "").textContent = "Call US NOW!";
  createEle("p", "phone-nr", info, "").textContent = "+98 7654 3210";
};

export default header;
