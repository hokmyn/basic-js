const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.res = '';
    this.resIndex;
  }  
  encrypt(message, key) {
    this.res = '';
    let upperMsg = message.toUpperCase();  
    let upperKeys = key.toUpperCase();
    let pos = 0;
    for (let i = 0; i < upperMsg.length; i++) {
      if (!this.alphabet.includes(upperMsg[i])) {
        this.res += upperMsg[i];
        continue;
      }
      this.resIndex = (this.alphabet.indexOf(upperMsg[i]) + this.alphabet.indexOf(upperKeys[pos])) % this.alphabet.length;
      pos = ++pos % upperKeys.length;
      this.res += this.alphabet[this.resIndex];
    }
    return this.mode ? this.res : this.res.split('').reverse().join('');
    // remove line with error and write your code here
  }    
  decrypt(encryptedMsg, key) {
    this.res = '';
    let upperMsg = encryptedMsg.toUpperCase();  
    let upperKeys = key.toUpperCase();
    let pos = 0;
    for (let i = 0; i < encryptedMsg.length; i++) {
      if (!this.alphabet.includes(upperMsg[i])) {
        this.res += upperMsg[i];
        continue;
      }
      this.resIndex = (this.alphabet.indexOf(encryptedMsg[i]) - this.alphabet.indexOf(upperKeys[pos])) % this.alphabet.length;
      if(this.resIndex < 0) this.resIndex += this.alphabet.length;
      pos = ++pos % upperKeys.length;
      this.res += this.alphabet[this.resIndex];
    }
    return this.mode ? this.res : this.res.split('').reverse().join('');    
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
