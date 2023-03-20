let a = {
    "text": "Hello",
    "color": "red",
    "bolt": true,
    "show": function (){
        console.log(this.color);
    }
};

let b = {
    "fontSize": "24px",
    __proto__: a
};

let c = {
    "fontFamaly": "Verdana",
    __proto__: b
}

console.log(c);
console.log(c.bolt)
//a -> b -> c

console.log(c.hasOwnProperty("bold"))



