function add(number) {
  if (number === "" || number === null) return 0;
  if (parseInt(number) && number.length === 1) return parseInt(number);

  let delimeter = /,|\n/g;
  let numbers = number;

  if (number.startsWith("//")) {
    let splitDelimiterAndNumbers = number.split("\n");
    let customDelimiter = splitDelimiterAndNumbers[0].charAt(2);
    if (customDelimiter) {
      delimeter = customDelimiter;
      numbers = splitDelimiterAndNumbers[1];
    }
  }

  let sum = 0;
  let parsedNumbers = numbers.split(delimeter).map((num) => parseInt(num));
  parsedNumbers.forEach((num) => {
    sum += num;
  });
  return sum;
}

module.exports = add;
