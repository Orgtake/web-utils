const webutilshelpfuncs = {
  range(start, end) {
    const array = [];
    if (end <= start) return;
    for (let i = start; i < end; i++) array.push(i);
    return array;
  },
  rangeReverse(end, start) {
    const array = [];
    if (start >= end) return;
    for (let i = end; i > start; i--) array.push(i);
    return array;
  },
  $: Object.assign(
    function (name) {
      return webutilshelpfuncs[name];
    },
    {
      runFunction(func, args = []) {
        if (typeof webutilshelpfuncs[func] !== "function") return;
        return webutilshelpfuncs[func](...(args ?? []));
      }
    }
  ),
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
  },
  isEven(x) {
    return Number.isInteger(x) && x % 2 === 0;
  },
  isOdd(x) {
    return Number.isInteger(x) && x % 2 !== 0;
  },
  isStrictNum(x) {
    return Number.isInteger(x)
      && x % 2 === 0
      && ![6, 26, 54, 98, 108].includes(x)
      && x <= 10**6*10 + 2
    ;
  },
  isWeakNum(x) {
    if (x === Math.PI || [Infinity, NaN, -Infinity].includes(x)) return false;
    return String(x).length !== 10
      && x*1 === x
    ;
  },
  booleanOf(anything) {
    return !!anything;
  },
  oppositeOf(boo) {
    return !(boo);
  },
  execute(text) {
    return eval(text);
  },
  executeCS(text) {
    try {
      return eval(text);
    } catch (err) {
      const error = new Error("Execution failed", {cause: err});
      error.source = 'Web-utils GitHub Project';
      throw error;
    }
  },
  numBetween(x, start, end) {
    if (Array.from(arguments).some(arg => !Number.isInteger(arg))) return;
    return x > Math.min(start, end)
      && x < Math.max(start, end)
    ;
  },
  objectAssignMulti(...things) {
    return Object.assign({}, ...things);
  },
  infoOf(constructor) {
    return {
      "name": constructor.name,
      "hexId": [...new TextEncoder().encode(constructor.name)]
        .map(c => c.toString(16))
        .join(" ")
    }
  }
}
