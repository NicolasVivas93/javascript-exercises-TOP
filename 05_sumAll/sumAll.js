const sumAll = function(num1,num2) {
    const arr  = [];
    if ((num1 < 0 || num2 < 0) || (typeof num1 !== 'number' || typeof num2 !== 'number')) {
        return "ERROR"
    }
    else if (num1 <= num2) {
        for (let i = num1; i <= num2; i++) {
            arr.push(i)
        }
    }
    else {
        for (let i = num1; i >= num2; i--) {
            arr.push(i)
        }
    }
    
    //Reduce itera en cada elemento del array y suma su valor al acumulador
    const sum = arr.reduce((accumulator,elem) => accumulator + elem)
    
    return sum;
};

sumAll(1, 4)
sumAll(1,4000)
sumAll(123, 1)
sumAll(-10, 4)
sumAll(10, "90")
sumAll(10, [90, 1])

// Do not edit below this line
module.exports = sumAll;
