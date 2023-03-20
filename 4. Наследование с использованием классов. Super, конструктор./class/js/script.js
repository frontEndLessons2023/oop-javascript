class User {
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(this.name + ' Hello ');
        return this.name;
    }
}

const alex = new User('Alex');
console.log(alex);

class Person extends User {
    constructor(name, email){
        super(name);
        this.email = email;
    }

    sayHello(){
        super.sayHello();//Li Hello
        console.log(this.email);//li@gmail.con
    }
}

const li = new Person("Li", "li@gmail.con");
// console.log(li);
// console.log(li.sayHello());
li.sayHello();


//class with no constructor
class User2 {
    sayHello(){
        console.log(this.name + ' Hello ');
        return this.name;
    }
}

const user = new User2();
console.log(user);
user.sayHello();

class Person2 extends User2{
    constructor(name){
        super();
        this.name = name;
    }
}

const user2 = new Person2("Lili");
console.log(user2);
user2.sayHello();










