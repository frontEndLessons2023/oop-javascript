const b1 = document.querySelector('.b-1');
const b2 = document.querySelector('.b-2');

//b1.onclick = test; // tjis -> on button

function test(color, num){
    console.log(this);
    console.log(num);
    this.style.background = color;
}

//test(); // this -> on window// error!!!

//Call()
//function.call(context, [agg1, arg2...])
//context -> going to be .this
//test.call(b1);//call the function with: .this = b1
// b2.onclick = function(){
//     test.call(b1, 'green', 555);
// }

//Apply() 
//same as method call, only differance that it takes arguments as array
// b2.onclick = function(){
//     test.apply(b1, ['green', 555]);
// }

//Bind()
let a = test.bind(b1, 'orange', 555);
let b = test.bind(b2, 'red', 888);
b2.onclick = a;


