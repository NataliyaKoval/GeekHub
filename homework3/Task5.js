Array.prototype.myForEach = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};

Array.prototype.myMap = function(callback, thisArg) {
  let results = [];
  for (let i = 0; i < this.length; i++) {
    results[i] = callback.call(thisArg, this[i], i, this);
  }
  return results;
};

Array.prototype.myFilter = function(callback, thisArg) {
  let results = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      results[i] = this[i];
    }
  }
  return results;
};

Array.prototype.mySort = function () {
  for (let i = 1; i < this.length; i++) {
    let currentValue = this[i];
    let position = i;
    while (position > 0 && this[position - 1] > currentValue) {
      this[position] = this[position - 1];
      			position -= 1;
    }
    this[position] = currentValue;
  }     
  return this;
}

Array.prototype.myFind = function(callback, thisArg) {
  let element;
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      element = this[i];
      break;
    }
  }
  return element;
};
