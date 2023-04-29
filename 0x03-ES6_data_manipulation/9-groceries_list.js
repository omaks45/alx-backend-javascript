export default function groceriesList() {
  const lastMap = new Map();
  const obj = {
    Apple: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  /* get the keys in the object into an array */
  const arr = Array.from(Object.keys(obj));

  /* map through the array and for each of the ele set the value of the key in the lastmap */

  arr.map((ele) => lastMap.set(ele, obj[ele]));
  return lastMap;
}
