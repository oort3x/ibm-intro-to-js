// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);
//console.log(blockLet);
//ReferenceError for blockLet because it cannot be accessed outside the curly brackets due to which it is known as block scoped variables. Such variables can only be accessed within curly brackets. You will see the same error for const as well.

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError


// Variable scope overview:

// Global scope: Variables declared outside any block or function have a global scope and are accessible throughout the entire script.

// Block scope: Variables declared within curly braces {} have block scope, accessible only within that block.

// Function scope: Variables declared within a function have function scope, limited to that function's block.

// Variable declaration and initialization:

// Used var, let, and const to declare and initialize variables in different scopes: global, block, and function.

// Demonstrated the behavior of these variables in respective scopes by accessing them outside their defined scope.

// Output and scope analysis:

// Global variables were accessible everywhere in the script.

// Block-scoped variables (inside {}) had limited accessibility, resulting in ReferenceErrors when accessed outside their blocks.

// Function-scoped variables (inside a function) also led to ReferenceErrors when accessed outside the function.