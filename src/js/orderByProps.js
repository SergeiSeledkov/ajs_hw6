function cloneObjFunc(obj) {
  const clone = {};

  for (const key in obj) {
    clone[key] = obj[key];
  }

  return clone;
}
export default function orderByProps(obj, arrKeys) {
  const cloneObj = cloneObjFunc(obj);
  const sortArr = [];

  for (const i in arrKeys) {
    sortArr.push({ key: arrKeys[i], value: cloneObj[arrKeys[i]] });
    delete cloneObj[arrKeys[i]];
  }

  const sortArrForObjectKeys = Object.keys(cloneObj).sort();

  for (const i in sortArrForObjectKeys) {
    sortArr.push({ key: sortArrForObjectKeys[i], value: cloneObj[sortArrForObjectKeys[i]] });
  }

  return sortArr;
}
