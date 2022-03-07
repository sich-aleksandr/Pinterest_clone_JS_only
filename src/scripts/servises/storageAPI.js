const DESK_LIST_KEY = "pintrest-desk";
const DESK_DELETE_KEY = "pintrest-delete-items";
const listKey = [[],[],[]];
const delId = [];

function getLocalData(key, storedge) {
  let data = JSON.parse(localStorage.getItem(key));
  return data ??= storedge;
}

function setLocalData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getLocalData, setLocalData, DESK_LIST_KEY, listKey, DESK_DELETE_KEY, delId };