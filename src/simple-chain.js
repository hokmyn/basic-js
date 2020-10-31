const CustomError = require("../extensions/custom-error");



const chainMaker = {
  arrChain: [],
  getLength() {
     return this.arrChain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.arrChain.push(`( ${value} )`);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(typeof(position) !== 'number' || position < 1 || position > this.arrChain.length - 1) {
      this.arrChain = [];
      throw new Error;
    } else {
      this.arrChain.splice(position - 1, 1);
      return this;
    }
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let res = this.arrChain.join('~~');
    this.arrChain = [];
    return res;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
