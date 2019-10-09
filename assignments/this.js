/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window/Global Obj Binding:
    When the function is contained in the global scope,
    the value of the inside function will be the window object.

* 2.Implicit Binding: 
    When a function is called before a dot(.), the object before the dot is "this".

* 3.New Binding: 
    In constructor functions, "this" shows us when an object that is created and
    returned by the constructor function.

* 4.Explicit Binding:
    When the "call" & "apply" methods are used, "this" becomes clearly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
scopes = scope => {
    console.log(this);
    return `When the function is contained in the ${scope} scope,
    the value of the inside function will be the window object.`;
}
console.log(scopes('Global'));

// Principle 2

// code example for Implicit Binding
let favFood = {
    opening: `My favorite food`,
    food: function(name) {
        console.log(`${this.opening} is ${name}`);
        console.log(this);
    }
};
console.log(favFood.food('Tacos'));


// Principle 3

// code example for New Binding
function AskMe(name) {
    this.name = name;
    this.ask = function() {
        console.log(`Hey ${this.name}, would you like to dance with me? `);
        console.log(this);
    }
};

let gabbi = new AskMe('Gabbi');
let juan = new AskMe('Juan');

gabbi.ask();
juan.ask();

// Principle 4

// code example for Explicit Binding
gabbi.ask.call(juan);
juan.ask.apply(gabbi);