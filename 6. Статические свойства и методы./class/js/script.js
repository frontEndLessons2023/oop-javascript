//static methods
class User{
    static test = true;
    constructor(name){
        this.name = name;
    }
    static getRole(email){
        /**
         * return role;
         */
        return 'student';
    }
    static getId(email){

        //return id;
    }
    static getUser(id){

        //return user;
    }
}

const person = new User('Ivan');
console.log(person);
console.log(User.getId('alex@ex'))
console.log(User.test)
User.test = false;

class Student extends User{
    constructor(name){
        super();
    }
}

console.log(Student.getRole())
console.log(Student.test)

