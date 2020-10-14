
class Person {

    constructor(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.personAge = age;
    }

    getFullname() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    description() {
        console.log(`${this.firstName} ${this.lastName} is ${this.personAge} years old.`)
    }

}

const person = new Person('Eddie', 'Van Halen', 65);
const fullname = person.getFullname();

console.log(fullname);
person.description();
