// CODE here for your Lambda Classes
class Lambda {
    constructor(object){
        this.name = object.name;
        this.age = object.age;
        this.location = object.location;
    }
    sayHello(){
        console.log(`Hello, ${this.name}!`);
    }
}