const sum = function(fromN, toN) {
  // Sum all the values from fromN up to toN
  // The base case is where fromN === toN
  if (fromN === toN) {
    return toN;
  }
  // The recursive case is where fromN < toN
  return fromN + sum((fromN + 1), toN);
};

module.exports = sum;
