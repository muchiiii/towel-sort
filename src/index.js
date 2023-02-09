
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  }
  let sortedArr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i === 0 || i % 2 === 0) {
      sortedArr = sortedArr.concat(matrix[i]);
    }
    if (i === 1 || i % 2 === 1) {
      sortedArr = sortedArr.concat(matrix[i].reverse());
    }
  }
  return sortedArr;
}
