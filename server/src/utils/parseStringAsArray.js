const parseStringAsArray = arrayAsString =>
  arrayAsString.split(",").map(element => element.trim());

module.exports = parseStringAsArray;
