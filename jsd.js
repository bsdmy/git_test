const ftoc = function(temp) {
    return ((temp - 32 )/ 1.8).toFixed(1);
  };
  
  const ctof = function() {
    return ((temp * 1.8) + 32).toFixed(1);
  };
console.log(ftoc(100));
// Do not edit below this line
