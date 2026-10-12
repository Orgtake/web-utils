const webutilshelpfuncs = {
  range(start, end) { // this is exclusive
    const array = [];
    if (end <= start) return;
    for (let i = start; i < end; i++) array.push(i);
    return array;
  },
  rangeReverse(end, start) { // this is exclusive
    const array = [];
    if (start >= end) return;
    for (let i = end; i > start; i--) array.push(i);
    return array;
  },
  $: {
    runFunction(func, args = []) {
      if (typeof webutilshelpfuncs[func] !== "function") return;
      return webutilshelpfuncs[func](...(args ?? []));
    }
  },
  randomItemOfArray(array) {
    return array[Math.floor(Math.random()*array.length)];
  },
  randomItemOfObject(object) {
    const randomKey = Object.keys(object)[Math.floor(Math.random()*Object.keys(object).length)];
    const randomVal = object[randomKey]
    return randomKey + ": " + randomVal;
  },
  jsLengthOf(array) {
    return array.length - 1;
  }
}
