const valid = new Validate(5);
console.log(valid);

console.log('is number: ' + Validate.isNumber("vds"));
console.log('is number: ' + Validate.isNumber(5));
console.log('is int: ' + Validate.isInt(5));
console.log('is int: ' + Validate.isInt(5.4));
console.log('is float: ' + Validate.isFloat(5.4));
console.log('is float: ' + Validate.isFloat(5));
console.log('is char: ' + Validate.isChar(52));
console.log('is char: ' + Validate.isChar('a'));
console.log('is string: ' + Validate.isString());
console.log('is string: ' + Validate.isString('$'));
console.log('is boolean: ' + Validate.isBoolean(false));
console.log('is boolean: ' + Validate.isBoolean('true'));
console.log('is array: ' + Validate.isArray(['a', 'b']));
console.log('is array: ' + Validate.isArray('hello'));
console.log('to money: ' + Validate.toMoney(1000));
console.log('to money: ' + Validate.toMoney(200000));














