/** FEEDBACK: Great job getting all test cases to pass! */
const myForEach = (arr, callback) => {  // fancy for-loop 
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

const myMap = (arr, callback) => {
  const returnVals = [];
  for (let i = 0; i < arr.length; i++) {
    returnVals.push(callback(arr[i]));  // results of the callbacks return values 
  }

  return returnVals;
};

const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) { // first sign of truthy value 
      return arr[i];        // gets returned 
    }
  }
};

const myFilter = (arr, callback) => {
  const passedFilter = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {   // if truthy 
      passedFilter.push(arr[i]);  // add to the array 
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
  return arrCopy.sort((a, b) => a - b);   // ascending order 
};

const sortNumbersBetter = (arr, isDescending) => {
  const arrCopy = [...arr];
  if (isDescending) {   // if isDescending is true 
    return arrCopy.sort((a, b) => b - a);   // sort in descending order 
  }
  return arrCopy.sort((a, b) => a - b);     // sort in ascending order otherwise 
};

const sortUsersByOrder = (arr) => {
  const arrCopy = [...arr];
  // sorting in ascending order 
  return arrCopy.sort((a, b) => a.order - b.order);
};

const sortUsersByName = (arr) => {
  const arrCopy = [...arr];
  // sorting in alphabetical order 
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


// named exports 
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
