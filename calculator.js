function add(number) {
  if(!number) return 0;

  let delimeter = /,|\n/g;
  let numbers = number;

  if (number.startsWith("//")) {
    let splitDelimiterAndNumbers = number.split("\n");
    let customDelimiter = splitDelimiterAndNumbers[0][2];
    if (customDelimiter) {
      delimeter = customDelimiter;
      numbers = splitDelimiterAndNumbers[1];
    }
  }

  let sum = 0;

  // // let temp = numbers.filter((num) => num !== "");
  
  let filteredData = numbers.split(delimeter).filter((item) => isNaN(item) === true);
  if(filteredData.length > 0){
    throw new Error(filteredData.join(", ") + " is not a number")
  }
  console.log(filteredData + " filteredData");
  
  let parsedNumbers = numbers.split(delimeter).map((num) => parseInt(num));

  const negativeNumbers = parsedNumbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      "negative numbers not allowed " + negativeNumbers.join(", ")
    );
  }

  parsedNumbers.forEach((num) => {
    sum += num;
  });
  return sum;
}

console.log(add("1,34"));

module.exports = add;
