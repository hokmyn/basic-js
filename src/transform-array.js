const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let isContinue = false;
  if(!Array.isArray(arr)) {
    throw new Error;
  }
  if(arr.length === 0) {
    return arr;
  }
  let transformedArr = [];
  for(let i = 0; i < arr.length; i++) {
				switch(arr[i]) {
					case '--discard-next':
						if(arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
              i += 2;
            } else i++;
					break;
					case '--discard-prev':
						if(i > 0) transformedArr.pop();
					break;
					case '--double-next':
						if(i < arr.length - 1) transformedArr.push(arr[i + 1]);
					break;
					case '--double-prev':
						if(i > 0) transformedArr.push(arr[i - 1]);
					break;
					default:
						transformedArr.push(arr[i]);
					break
				}
			}
  return transformedArr;
  // remove line with error and write your code here
};
