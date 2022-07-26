const reverseString = function(str) {
    const array = str.split('')
    array.reverse()
    let textReversed = array.join('')
    return textReversed;
};

reverseString("hello")
reverseString("hello there")
reverseString("123! abc!")
reverseString("")

// Do not edit below this line
module.exports = reverseString;
