// Function demonstrating the behavior of 'var' within a function scope
function exampleVar() {
    if (true) {
        var x = 'this is var inside the block'; // 'var' is function-scoped, so it can be accessed outside this block within the same function
    }
    console.log(x); // Logs: 'this is var inside the block', because 'var' is function-scoped
}

var x = 'this is var outside the block'; // This declaration does not affect the 'x' inside the function

// Function demonstrating the behavior of 'let' within a block scope
function exampleLet() {
    if (true) {
        let y = "this is let inside the block"; // 'let' is block-scoped, so it cannot be accessed outside this block
    }
    console.log(y); // Throws ReferenceError, because 'let' is block-scoped and 'y' is not accessible here
}

let y = "this is let outside the block"; // This declaration is in the global scope and is separate from the 'y' inside the function

exampleVar(); // Call to the function demonstrating 'var' behavior
exampleLet(); // Call to the function demonstrating 'let' behavior, which results in a ReferenceError
