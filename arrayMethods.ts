const forEach = (
  array: any[],
  cb: (currentItem?: any, idx?: Number, array?: any[]) => void
) => {
  for (let idx = 0; idx < array.length; idx++) {
    const currentItem = array[idx];
    cb(currentItem, idx, array);
  }
}

const map = (
  array: any[],
  cb: (currentItem?: any, idx?: Number, array?: any[]) => void
) => {
  const newArr = [];
  for (let idx = 0; idx < array.length; idx++) {
    const currentItem = array[idx];
    const newItem = cb(currentItem, idx, array);
    newArr.push(newItem);
  }
  return newArr;
}

const filter = (
  array: any[],
  cb: (currentItem?: any, idx?: Number, array?: any[]) => Boolean
) => {
  const filteredArr = [];
  for (let idx = 0; idx < array.length; idx++) {
    const currentItem = array[idx];
    if (cb(currentItem, idx, array)) filteredArr.push(currentItem);
  }
  return filteredArr;
}

const reduce = (
  array: any[],
  cb: (savedValue: any, currentItem: any, idx: Number, array: any[]) => any,
  startValue?: any
) => {
  let savedValue = array[0];
  let startingIdx = 1;
  if (startValue !== undefined) {
    savedValue = startValue;
    startingIdx = 0;
  }
  for (let idx = startingIdx; idx < array.length; idx++) {
    const currentItem = array[idx];
    savedValue = cb(savedValue, currentItem, idx, array);
  }
  return savedValue;
}

const some = (
  array: any[],
  cb: (currentItem?: any, idx?: Number, array?: any[]) => Boolean
) => {
  for (let idx = 0; idx < array.length; idx++) {
    const currentItem = array[idx];
    
    if (cb(currentItem, idx, array)) return true;
  }
  return false;
}

const every = (
  array: any[],
  cb: (currentItem?: any, idx?: Number, array?: any[]) => Boolean
) => {
  for (let idx = 0; idx < array.length; idx++) {
    const currentItem = array[idx];
    
    if (!cb(currentItem, idx, array)) return false;
  }
  return true;
}

const flat = (
  array: any[],
  depth = 1
): any => {
  const newArr = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] instanceof Array && depth >= 1) {
      newArr.push(...flat(array[idx], depth - 1));
    } else {
      newArr.push(array[idx]);
    }
  }
  return newArr;
}

const find = (
  array: any[],
  cb: (currentItem?: any, idx?: Number, array?: any[]) => Boolean 
) => {
  for (let idx = 0; idx < array.length; idx++) {
    const currentItem = array[idx];
    if (cb(currentItem, idx, array)) {
      return currentItem;
    }
  }
  return undefined;
}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
  flat,
  find
}
