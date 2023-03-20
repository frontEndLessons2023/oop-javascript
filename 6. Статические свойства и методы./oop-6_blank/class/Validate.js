class Validate {
    constructor(a) {
        this.a = a;
    }

    static isNumber(value){
        return typeof(value) ==  'number';
    }

    static isInt(value){
        return Number.isInteger(value);
    }

    static isFloat(value){
       return value % 1 !== 0;
    }

    static isChar(value){
       let tmp = value.toString();
       return tmp.length == 1;
 
    }

    static isString(value){
        return typeof value == 'string';
    }

    static isBoolean(value){
        return typeof value == 'boolean';
    }

    static isArray(value){
        return Array.isArray(value);
    }

    static toMoney(value){
    return (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    }
}