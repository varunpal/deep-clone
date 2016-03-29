module.exports = function clone (obj) {
  var temp = {};
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  if (obj instanceof Array) {
    temp = [];
  }
  Object.keys(obj).forEach(function (value) {
    if (typeof obj[value] === 'object') {
      temp[value] = clone(obj[value]);
    } else {
      temp[value] = obj[value];
    }
  });
  return temp;
};