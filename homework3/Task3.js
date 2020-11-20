function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
let sumOfNumbers = sum(1)(2)(3);

function sum2(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
}
let sumOfNumbers2 = sum(1)(2)(3);
