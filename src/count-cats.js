const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let i = 0;
  backyard.map((item) => {
    item.forEach(elem => {
      if(elem === '^^') {
        i++;
      }
    });
  })
  return i;
};
