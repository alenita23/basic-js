const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (Array.isArray(arr) == false) {
    return false;
   } else {
    let arrFiltered = arr.filter(item => typeof item === 'string');
    let arrTrimmed = arrFiltered.map(item => item.trim().toUpperCase());
    let arrSorted = arrTrimmed.sort().map(a => a[0]);
    let str = arrSorted.join('');
    return str;
   }
}

module.exports = {
  createDreamTeam
};
