const localDataList = {
  key: "pintrest-desks",
  storage: [[], [], []],
  get: function () {
    let data = JSON.parse(localStorage.getItem(this.key));
    return (data ??= this.storage);
  },
  set: function (data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },
};

const deletedItems = {
  key: "pintrest-delete-items",
  storage: [],
  get: function () {
    let data = JSON.parse(localStorage.getItem(this.key));
    return (data ??= this.storage);
  },
  set: function (data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },
}

export { localDataList, deletedItems };
