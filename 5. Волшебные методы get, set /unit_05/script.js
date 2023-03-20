//task-1
const test = new Test();
test._testProp = 'test-1';
console.log(test);
let res = test.testProp;
console.log(res);

//task-2
const test2 = new Test2();
console.log(test2.testProp = 'bbb'); 
console.log(test2);
console.log(test2.testProp = ''); 
console.log(test2);
console.log(test2.setTestProp('')); 
console.log(test2);
//task-3
console.log(test2.testProp);
//task-4
const test3 = new Test3();
test3.testProp = 'test-3';
console.log(test3);
console.log(test3.testProp);
//task-5
const test4= new Test4();
test4.testProp = 'test-4';
console.log(test4);
console.log(test4.testProp);
//task-6
test4.testProp = 11;
console.log(test4.getTestProp());
test4.testProp = 5;
console.log(test4.getTestProp());









