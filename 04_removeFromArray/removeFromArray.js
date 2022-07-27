const removeFromArray = function(arr,elem) {
    isInArray(arr,elem)
    if (isInArray(arr,elem)) {
        const nvoArray = arr.filter((values) => values !== elem);
        return nvoArray;
    } 
    else {
        return "Element already removed";
    }
};

function isInArray(arr,elem) {
    let validator = arr.indexOf(elem);
    if (validator !== -1) { 
        return true;
    } else {
        return false;
    }
}

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;

