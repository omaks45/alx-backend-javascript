/* eslint-disable array-callback-return */
export default function (set, array) {
  for (const x of array) {
    if (!set.has(x)) {
      return false;
    }
  }
  return true;
}
