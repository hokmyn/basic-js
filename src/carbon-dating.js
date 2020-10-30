const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || !Number.isInteger(parseInt(sampleActivity, 10)) || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) {
    return false;
  } else {
    return Math.ceil((Math.log1p(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / 0.693);
  }
};


