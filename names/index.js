const getFullName = require("../country/state/city/index");

//console.log(getFullName);

const getFirstNames = require("../utilities/utils/index");

//console.log(getFirstNames);

const getPeopleInCity = (getFullName) => {
  
  //console.log(getFirstNames(getFullName));
  
  return getFirstNames(getFullName);
  
};

//getPeopleInCity(getFullName);
module.exports = getPeopleInCity;
