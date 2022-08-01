const ftoc = function(farenheit) {
  let result = ((farenheit - 32) * (5/9)).toFixed(1);
  return Number(result);
};

const ctof = function(celsius) {
  let result = ((celsius * (9/5)) + 32).toFixed(1); 
  return Number(result);
};

ftoc(32)
ftoc(100)
ftoc(-100)

ctof(0)
ctof(73.2)
ctof(-10)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
