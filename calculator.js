function add(number) {
  if (number === "" || number === null) return 0;
  if (parseInt(number) && number.length === 1) return parseInt(number);
  let sum = 0;
  let numbers = number.split(/,|\n/g).map((num) => parseInt(num));
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
}

module.exports = add;
