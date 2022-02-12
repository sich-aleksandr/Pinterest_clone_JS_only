function getUUID() {
  return Math.floor(Math.random() * 100000);
}

function trimText(text, maxlength) {
  return text.length > maxlength ? text.substring(0, maxlength) + "..." : text;
}

export { getUUID, trimText };