const removeFromArray = function(arr,elem1,elem2,elem3,elem4) {
    
        const nvoArray = arr.filter((values) => values !== elem1 && values !== elem2 && values !== elem3 && values !== elem4);
        return nvoArray;
    }; 

removeFromArray([1, 2, 3, 4], 3)
removeFromArray([1, 2, 3, 4], 3, 2)
removeFromArray([1, 2, 3, 4], 7, "tacos")
removeFromArray([1, 2, 3, 4], 7, 2)
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)
removeFromArray(["hey", 2, 3, "ho"], "hey", 3)
removeFromArray([1, 2, 3], "1", 3)

// Do not edit below this line
module.exports = removeFromArray;

