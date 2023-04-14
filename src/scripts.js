const createNewElement = function (tag, appendTo, text, idText, classTexts) {
  const element = document.createElement(tag);
  if (classTexts) {
    classTexts.forEach((text) => element.classList.add(text));
  }
  if (idText) {
    element.setAttribute("id", idText);
  }
  if (text) {
    element.textContent = text;
  }
  appendTo.appendChild(element);
  return element;
};

export { createNewElement };
