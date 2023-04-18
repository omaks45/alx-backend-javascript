/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */

export default function appendToEachArrayValue(array, appendString) {
  const theArray = [];
  for (const value of array) {
    theArray.push(appendString + value);
  }

  return theArray;
}
