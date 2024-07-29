/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let hasVal = true;
  list.map((x) => {
    if (!set.has(x)) {
      hasVal = false;
    }
  });

  return hasVal;
}
