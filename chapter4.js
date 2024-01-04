// Chapter 4. Expressions and Operators

// An expression is a phrase of JavaScript that can be evaluated to produce a value.
// A constant embedded literally in your program is a very simple kind of expression. A variable name is also a simple expression that evaluates to whatever value has been assigned to that variable.
// The most common way to build a complex expression out of simpler expressions is with an operator.
// 1. Primary Expressions
    // The simplest expressions, known as primary expressions, are those that stand alone—they do not include any simpler expressions.
    // Primary expressions in JavaScript are constant or literal values, certain language keywords, and variable references.
// 2. Object and Array Initializers
    // Object and array initializers are expressions whose value is a newly created object or array.
    // These initializer expressions are sometimes called object literals and array literals.
    // Unlike true literals, however, they are not primary expressions, because they include a number of subexpressions that specify property and element values.
    // An array initializer is a comma-separated list of expressions contained within square brackets.
    // The value of an array initializer is a newly created array.
    console.log([]); //empty array
    console.log([1,2,3,4]); 
    // The element expressions in an array initializer can themselves be array initializers, which means that these expressions can create nested arrays.
    console.log([[1,2], [3,4], [5,6,7]]); //nested array
    // The element expressions in an array initializer are evaluated each time the array initializer is evaluated.
    // [a,b,c] //if a, b, and c are variables then they would be calculated each time.
    // Undefined elements can be included in an array literal by simply omitting a value between commas.
    // [a,,,b];
    // Object initializer expressions are like array initializer expressions, but the square brackets are replaced by curly brackets, and each subexpression is prefixed with a property name and a colon.
    let p = {x: 1.23, y: 2.33};
    console.log(p.x, p.y);
    // Object literals can be nested.
    let rectangle = {
        upperLeft: {x: 3, y:2},
        upperRight: {x: 4, y: 2},
        lowerLeft: {x: 3, y: 1},
        lowerRight: {x: 4, y: 1}
    }
// 3. Function Definition Expressions
    // A function definition expression defines a JavaScript function, and the value of such an expression is the newly defined function. 
    // In a sense, a function definition expression is a “function literal” in the same way that an object initializer is an “object literal.”
    let square = function(x){return x * x};
    console.log(square(5));
// 4. Property Access Expressions
    // A property access expression evaluates to the value of an object property or an array element.
    // Two syntaxes for property access 
        // expression . identifier = expression specifies the object while the identifier specifies the property
        // expression [ expression ] = the first expression is object or array. The second is the property if object, or the index if array. 
        let obj = {x: 1, y: {z: 3}};
        let arr = [obj, 4, [5,6]];
        console.log(obj.x);
        console.log(obj.y.z);
        console.log(obj["x"]);
        console.log(arr[0].y);
        console.log(arr["1"]);
        console.log(arr[1]);
        console.log(arr[2][0]);
        // The .identifier syntax is the simpler of the two property access options, but notice that it can only be used when the property you want to access has a name that is a legal identifier, and when you know the name when you write the program.
        // If the property name includes spaces or punctuation characters, or when it is a number (for arrays), you must use the square bracket notation. Square brackets are also used when the property name is not static but is itself the result of acomputation.
    // Conditional Property Access
        // expression ?. identifier
        // expression ?.[ expression ]
        // In JavaScript, the values null and undefined are the only two values that do not have properties.
        // In a regular property access expression using . or [], you get a TypeError if the expression on the left evaluates to null or undefined. You can use ?. and ?.[] syntax to guard against errors of this type.
        // This form of property access expression is sometimes called “optional chaining”
        let a = { b: null };
        // console.log(a.b.c.d); // this will give a TypeError
        console.log(a.b?.c.d); // this will give undefined

// 5. Invocation Expressions
    // An invocation expression is JavaScript’s syntax for calling (o executing) a function or method.
    console.log(arr.sort());
    // If the function uses a return statement to return a value, then that value becomes the value of the invocation expression. Otherwise, the value of the invocation expression is undefined.
    // Conditional Expressions
        // You can also invoke a function using ?.() instead of ().
        // With the new ?.() invocation syntax, if the expression to the left of the ?. evaluates to null or undefined, then the entire invocation expression evaluates to undefined and no exception is thrown.

// 6. Object Creation Expressions
    // An object creation expression creates a new object and invokes a function (called a constructor) to initialize the properties of that object.
    // Object creation expressions are like invocation expressions except thatthey are prefixed with the keyword new.
    new Object();

// 7. Operator Overview
    // Operators are used for JavaScript’s arithmetic expressions, comparison expressions, logical expressions, assignment expressions, and more.
    // See Table 4.1 for all the operators.
    // Number of Operands
        // Operators can be categorized based on the number of operands they expect.
        // Most JavaScript operators, like the * multiplication operator, are binary operators that combine two expressions into a single, more complex expression. That is, they expect two operands.
        // JavaScript also supports a number of unary operators, which convert a single expression into a single, more complex expression. The - operator in the expression -x is a unary operator that performs the operation of negation on the operand x.
    // Operand and Result Type
        // Some operators work on values of any type, but most expect their operands to be of a specific type, and most operators return (or evaluate to) a value of a specific type.
        // JavaScript operators usually convert the type of their operands as needed.
        // In JavaScript, variables, properties of objects, and elements of arrays are lvalues.
    