/**
 * Create a map with incrementing values
 * @param {Number} from 
 * @param {Number} to 
 * @param {Function} mapFunction 
 * @returns {Array}
 */
function incrementMap(from, to, mapFunction) {
  const array = [];

  if (typeof from !== 'number') {
    throw new Error('incrementMap: 1st argument should be a number');
  }

  if (typeof to !== 'number') {
    throw new Error('incrementMap: 2nd argument should be a number');
  }

  if (to < from) {
    throw new Error('incrementMap: to should be greater than from');
  }

  if (typeof mapFunction !== 'function') {
    throw new Error('incrementMap: 3rd argument should be a function');
  }

  for (let i = from; i <= to; i++) {
    array.push(mapFunction(i));
  }

  return array;
}

module.exports = incrementMap;
