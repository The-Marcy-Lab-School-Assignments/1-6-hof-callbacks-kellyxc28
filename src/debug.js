const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!(callback(value))) return false;  // any sign of false, return false  
    /* why does this work too --> 
      if (callback(value) == false) return false; --> double equals */ 
  }
  return true;
};

const sortUsersBy = (users, sortingFunction) => {
  /* the () at the end of sortingFunction is not needed because nothing 
  is passed in - the specific sorting function is called */ 
  return [...users].sort(sortingFunction);
};

const logEachName = (names) => {
  return names.forEach((name, index, names) => {
    console.log(name, index, names);
    }
  );
  
  // short way: 
  // return names.forEach(console.log);
};

const logEachUserBio = (users) => {
  return users.forEach((user) => {
    console.log(user.bio);
  });
};

// named exports 
module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
