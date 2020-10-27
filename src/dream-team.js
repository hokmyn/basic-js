const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = '';
  if(Array.isArray(members)) {
    members.map(elem => {
      if(typeof elem === 'string') {
        teamName += elem.trim().toUpperCase().slice(0, 1);
      }
    })
    return teamName.split('').sort().join('');
  } else {
    return false;
  }  
};
