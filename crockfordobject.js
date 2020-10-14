
function createPerson(first, last, age) {

    function getFullname() {
        return `${first} ${last}`;
    }
    
    function description() {
        console.log(`${first} ${last} is ${age} years old.`);
    }

    return Object.freeze({
        first,
        last, 
        age,
        getFullname,
        description
    });

}

const person = createPerson('Eddie', 'Van Halen', 65);
const fullname = person.getFullname();

console.log(fullname);
person.description();
