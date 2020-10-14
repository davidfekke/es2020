
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.personAge = age;
    return this;
}

Person.prototype.getFullname = function() {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.description = function() {
    console.log(`${this.firstName} ${this.lastName} is ${this.personAge} years old.`)
}

const person = new Person('Eddie', 'Van Halen', 65);
const fullname = person.getFullname();

console.log(fullname);
person.description();
