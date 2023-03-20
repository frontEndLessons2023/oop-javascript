const list = new List(['one', 'two', 'three', 'four']);
const ul = list.render();
document.body.appendChild(ul);
//console.log(ul)

const list2 = new List2(['one', 'two', 'three', 'four'], 'text-green');
const ul2 = list2.render();
document.body.appendChild(ul2);
//console.log(ul2)

const list3 = new List2(['one', 'two', 'three', 'four'],  ['text-center', 'bold', 'text-red']);
const ul3 = list3.render();
document.body.appendChild(ul3);
//console.log(ul3);

