/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When the function is contained in the global scope,
    the value of the inside function will be the window object.
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/scopes = scope => {
    console.log(this);
    return `When the function is contained in the ${scope} scope,
    the value of the inside function will be the window object.`;
}
console.log(scopes('Global'));

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding