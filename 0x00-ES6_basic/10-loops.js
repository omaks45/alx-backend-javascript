/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */

export default function appendToEachArrayValue(array, appendString) {
  theArray = [];
  for (const idx of array) {
    theArray.push(appendString + idx);
  }

  return theArray;
}
