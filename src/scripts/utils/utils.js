function getUUID() {
  return Math.floor(Math.random() * 100000);
}

function trimText(text, maxlength) {
  return text.length > maxlength ? text.substring(0, maxlength) + "..." : text;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  const textElement = document.createTextNode(text);
  element.className = className;
  element.append(textElement);
  return element;
}


export { getUUID, trimText, createElement, getRandomInt };