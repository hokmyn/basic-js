const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if(!(arguments[0] instanceof Date)) {
    throw new Error('Input is invalid');
  }
  if (date.hasOwnProperty('toString')) {
    throw new Error('Input is invalid');
  }
  
  let season;
  let month = date.getMonth();
  switch (month) {
      case 11:
      case 0:
      case 1:
        season = 'winter';      
        break;
      case 2:
      case 3:
      case 4:
        season = 'spring';      
        break;
      case 5:
      case 6:
      case 7:
        season = 'summer';      
        break;
      case 8:
      case 9:
      case 10:
        season = 'autumn';      
        break;
    }
  return season;
  // remove line with error and write your code here
};
