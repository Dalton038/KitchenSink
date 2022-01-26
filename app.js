let Firstname = 'Dalton';
const states = 50;
let num = console.log(5 + 4);

function sayHello() {
    alert('Hello World!');
}

sayHello('Hello World!')

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry, " + name + " you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let vegtables = ["Greens", "Beans", "Potatoes", "Tomatoes"];
for (let i = 0; i < vegtables.length; i++) {
    console.log(vegtables[i]);
}

let pet = {
    name: "Opie",
    breed: "WeenieDog",
};

console.log(pet.name)
console.log(pet.breed);

let friends = [
    {
        name: "Will",
        age: 18
    },
    {
        name: "Kaysn",
        age: 21
    },
    {
        name: "Zach",
        age: 40
    },
    {
        name: "Landon",
        age: 38
    },
    {
        name: "Brody",
        age: 27
    }
]

function getLength(word) {
return word.length
}

let stringLength = getLength('Hello World')
if (stringLength % 2 == 0) {

    console.log('The world is nice and even!')
}

else {
console.log('The world is an odd place!')
}