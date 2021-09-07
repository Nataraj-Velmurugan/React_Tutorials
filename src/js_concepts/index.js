// Bind -  Call - Apply 

var Avenger = {
    firstname: 'Iron',
    lastname: 'Man',
    getAvengerName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var avengerName = function (character, superPower) {
    // console.log(this.firstname)
    console.log(this.getAvengerName() + 'I choose you!');
};

var avengerIronMan = function (character, superPower) {
    console.log(this.getAvengerName() + "character is " + character + "," + this.getAvengerName() + "superpower is " + superPower);
};

var iron_man = avengerName.bind(Avenger)(); // creates new object and binds Avenger. 'this' of Avenger === Avenger now

// iron_man();

// avengerIronMan.call(Avenger, "Inteligent", "Metal Suit");
// avengerIronMan.apply(Avenger, ["Inteligent", "Metal Suit"]);

// Accepts additional parameters as well
// Executes the function it was called upon right away.
// The call() method does not make a copy of the function it is being called on

// let bind_iron_man = avengerIronMan.bind(Avenger)();
// bind_iron_man('sushi', 'algorithms');

var tester = "hey hi";

function newFunction() {
    var hello = "hello";
}
console.log(hello);
// 

var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead";
}

console.log(greeter) // "say Hello instead"

let greeting = "say Hi";
greeting = "say Hello instead";

let greeting = "say Hi";
let greeting = "say Hello instead";

let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"

const greeting = "say Hi";
const greeting = "say Hello instead";

// var inside function 

function varFunc() {
    var var1 = 'variable 1 value in parent scope'
        ; (function () {
            // Scope 1
            var1 = 'variable 1 value in scope 1'
            console.log('scope 1: ', var1) // Is 'variable 1 value in scope 1'
        })()
        ; (function () {
            // Scope 2
            var1 = 'variable 1 value in scope 2'
            console.log('scope 2: ', var1) // Is 'variable 1 value in scope 2'
        })()

    console.log('Parent scope: ', var1) // Is 'variable 1 value in parent scope'
}
console.log('Global scope: ', var1) // Is undefined

function letFunc() {
    let letVar1 = 'Let variable 1 value in parent scope'
        ; (function () {
            // Scope 1
            let letVar1 = 'Let variable 1 value in scope 1'
            console.log('scope 1: ', letVar1) // Is 'Let variable 1 value in scope 1'
        })()
        ; (function () {
            // Scope 2
            let letVar1 = 'Let variable 1 value in scope 2'
            console.log('scope 2: ', letVar1) // Is 'Let variable 1 value in scope 2'
        })()

    console.log('Parent scope: ', letVar1) // Is 'Let variable 1 value in parent scope'
}
console.log('Global scope: ', letVar1) // Is undefined

function constFunc() {
    const constVar1 = 'const variable 1 value in parent scope'
        ; (function () {
            // Scope 1
            const constVar1 = 'const variable 1 value in scope 1'
            console.log('scope 1: ', constVar1)
            // scope 1:  const variable 1 value in scope 1
        })()

    console.log('Parent scope: ', constVar1)
    // Parent scope:  const variable 1 value in parent scope
}

// forEach

const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.indexOf("Apple")

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length();

// map

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
    return num * 10;
}


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements:
fruits.splice(2, 0, "Lemon", "Kiwi");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();

// Extends

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

mycar = new Model("Ford", "Mustang");
mycar.show();

// Static 

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    static hello() {  // static method
        return "Hello!!";
    }
}

mycar = new Car("Ford");
Car.hello();

// super 

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

mycar = new Model("Ford", "Mustang");
mycar.show();

// for of

let colors = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
for (const {score} of ratings) {
    sum += score;
}

console.log(sum)

// for in

const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

