let array = [];

function getMinValue(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] == 'number' 
            && !isNaN(arr[i]) 
            && arr[i] < min) {
                min = arr[i];
        }    
    }
    return min;
}

function getMaxValue(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'number' || isNaN(arr[i])) {
            continue;
        } else if (arr[i] > max) {
                max = arr[i];
            }
    }
    return max;
}

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'number' || isNaN(arr[i])) {
            continue;
        } else {
            sum += arr[i];  
        }
    }
    return sum;
}
