const DESK_LISK_KEY = "pintrest-desk";

function getLocalData(key) {
  let data = JSON.parse(localStorage.getItem(key));
  return data ??= [[],[],[]];
}

function setLocalData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getLocalData, setLocalData, DESK_LISK_KEY };