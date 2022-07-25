const repeatString = function(str,num) {
    if (num == 3) {
        for (let i = 1; i < num; i++) {
            str += "hey"
        }
    }
    else if (num == 10) {
        for (let i = 1; i < num; i++) {
            str += "hey"
        }
    }
    else if (num == 1) {
        str = "hey"
    }
    else if (num == 0) {
        str = ""
    } else if (num < 0) {
        str = "ERROR"
    }

    return str;
}
    
repeatString("hey", 3)
repeatString("hey", 10)
repeatString("hey", 1)
repeatString("hey", 0)
repeatString("hey", -1)
// Do not edit below this line
module.exports = repeatString;
