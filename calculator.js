function calculator(number){
 if(number === "" || number === null) return  0;
 if(parseInt(number) && number.length === 1) return parseInt(number);
}

module.exports = calculator;