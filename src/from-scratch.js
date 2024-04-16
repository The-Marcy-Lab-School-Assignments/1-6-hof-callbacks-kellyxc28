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

const sortWords = () => {
};

const sortNumbers = () => {
};

const sortNumbersBetter = () => {
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
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
