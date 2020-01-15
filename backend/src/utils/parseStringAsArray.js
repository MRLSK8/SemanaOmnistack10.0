module.exports = function parseStringAsArry(arrayAsString){
  return arrayAsString.split(',').map(string => string.trim());
}