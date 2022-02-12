function getLocalData(key) {
  let data = JSON.parse(localStorage.getItem(key));
  return (data ??= []);
}

function setLocalData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getLocalData, setLocalData };