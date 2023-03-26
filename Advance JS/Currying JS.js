// Currying is a functional programming technique in JavaScript 
// that involves transforming a function that takes multiple arguments
// into a sequence of functions that take a single argument each.

function add(x) {
    return function (y) {
        return x + y;
    }
}

// Usage:
const addFive = add(5);
console.log(addFive(3)); // Outputs 8


