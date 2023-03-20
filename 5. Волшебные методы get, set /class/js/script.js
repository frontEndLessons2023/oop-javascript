class User {
    #test = 'Hohoho';
    #url = 'http://backend.ex';
    constructor(){
        //this._name = name;
    }
    send(){
        
    }
    set name(name){
        this._name = name.trim().toLowerCase();
        console.log('Private ' + this.#test)
       
    }
    get name(){
        return this._name;
    }
    one(){
        console.log(this.#test);
    }
}

const student = new User();
student.name = '    Alex';//set
//student._name = 'Ivan'
// console.log(student);
// console.log(student.name);//get

class User2 extends User {

}
const student2 = new User2();
student2.one();
student2.name = 'Oleg';









