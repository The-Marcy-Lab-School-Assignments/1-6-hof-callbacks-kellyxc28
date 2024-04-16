const myForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
};

const myMap = (arr, callback) => {
    const returnVals = [];
    for (let i = 0; i < arr.length; i++) {
      returnVals.push(callback(arr[i]));
    }

    return returnVals;
};

const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
};

const myFilter = (arr, callback) => {
    const passedFilter = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        passedFilter.push(arr[i]);
      }
    }

    return passedFilter;
};

const sortWords = (arr) => {
    const arrCopy = [...arr];
    const sortedElems = arrCopy.sort();
    return sortedElems;
};

const sortNumbers = (arr) => {
    const arrCopy = [...arr];
    return arrCopy.sort((a, b) => a - b);
};

const sortNumbersBetter = (arr, isDescending) => {
    const arrCopy = [...arr];
    if (isDescending) {
      return arrCopy.sort((a, b) => b - a);
    }
    return arrCopy.sort((a, b) => a - b);
};

const sortUsersByOrder = (arr) => {
    const arrCopy = [...arr];
    return arrCopy.sort((a, b) => a.order - b.order);
};

const sortUsersByName = (arr) => {
    const arrCopy = [...arr];
    return arrCopy.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      else if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
    );
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
