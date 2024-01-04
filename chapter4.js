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
    // Operator side effect
        // their evaluation may affect the result of future evaluations.
        // Examples: Assignment operator, ++, --, delete, (function invocation and object invocation) if their body has any opertors with side effects
    // Operator precedence
        // Operators with higher precedence are performed before those with lower precedence.
        // Operator precedence can be overridden with the explicit use of parentheses.
    // Operator Associativity
        // The associativity of an operator specifies the order in which operations of the same precedence are performed.
        // Left-to-right associativity means that operations are performed from left to right and vice versa. 
    // Order of Evaluation
        // Operator precedence and associativity specify the order in which operations are performed in a complex expression, but they do not specify the order in which the subexpressions are evaluated.
        // JavaScript always evaluates expressions in strictly left-to-right order.
        // Order of evaluation only makes a difference if any of the expressions being evaluated has side effects that affect the value of another expression.

// 8. Arithmatic Expressions
    // The basic arithmetic operators are ** (exponentiation), * (multiplication), / (division), % (modulo: remainder after division), + (addition), and - (subtraction).
    // Unary Arithmetic Operators
        // Unary plus (+)
        // Unary minus (-)
        // Increment (++)
        // Decrement (--)
    // Bitwise Operators
        // The bitwise operators perform low-level manipulation of the bits in the binary representation of numbers.
        // The bitwise operators expect integer operands and behave as if those values were represented as 32-bit integers.
        // Bitwise AND (&)
        // Bitwise OR (|)
        // Bitwise XOR (^)
        // Bitwise NOT (~)
        // Shift left (<<)
        // Shift right with sign (>>)
        // Shift right with zero fill (>>>)

// Relational Expressions
    // These operators test for a relationship (such as “equals,” “less than,” or “property of”) between two values and return true or false depending on whether that relationship exists.
    // Equality and Inequality Operators
        // The == and === operators check whether two values are the same, using two different definitions of sameness.
        // The != and !== operators test for the exact opposite of the == and === operators.
        // == allows type conversion whereas === is strick checking of equality. 
    // Comparison Operators
        // Less than (<)
        // Greater than (>)
        // Less than or equal (<=)
        // Greater than or equal (>=)
    // The in Operator
        // The in operator expects a left-side operand that is a string, symbol, or value that can be converted to a string. It expects a right-side operand that is an object.
        // It evaluates to true if the left-side value is the name of a property of the right-side object.
        console.log("x" in {x: 1, y: 2});
    // The instanceof Operator
        // The instanceof operator expects a left-side operand that is an object and a right-side operand that identifies a class of objects.
        // The operator evaluates to true if the left-side object is an instance of the right-side class and evaluates to false otherwise.
    let d = new Date();
    console.log(d instanceof Date);
    console.log(d instanceof Object);
    console.log(d instanceof Number);

// Logical Expressions
    // Logical AND (&&):
        // At the simplest level, when used with boolean operands,&& performs the Boolean AND operation on the two values: it returns true if and only if both its first operand and its second operand are true.
            // If one or both of these operands is false, it returns false.
        // The second level at which && can be understood is as a Boolean AND operator for truthy and falsy values.
        // The third level: This operator starts by evaluating its first operand, the expression on its left. 
            // If the value on the left is falsy, the value of the entire expression must also be falsy, so && simply returns the value on the left and does not even evaluate the expression on the right.
            // On the other hand, if the value on the left is truthy, then the overall value of the expression depends on the value on the righthand side.
            // If the value on the right is truthy, then the overall value must be truthy,and if the value on the right is falsy, then the overall value must be falsy.
            console.log({x: 1} && {x: 3}); //first value is true
            console.log(null && {x: 1}); //second value is true
        // The behavior of && is sometimes called short circuiting, and you may sometimes see code that purposely exploits this behavior to conditionally execute code.    
    // Logical OR (||):
        // If one or both operands is truthy, it returns a truthy value. If both operands are falsy, it returns a falsy value.
        // Short Circuiting is vice versa from &&. 
        console.log({x: 1} || {x: 3}); //first value is true
        console.log(null || {x: 1}); //second value is true
    // Logical NOT (!)
        // The ! operator is a unary operator; it is placed before a single operand. Its purpose is to invert the boolean value of its operand.

// Assignment Operator
    // JavaScript uses the = operator to assign a value to a variable or property.
    // The = operator expects its left-side operand to be an lvalue: a variable or object property (or array element). It expects its right-side operand to be an arbitrary value of any type.
    // The assignment operator has right-to-left associativity.
    // Assignment with Operation
        // +=
        // -=
        // *=
        // /= and a few more
        // result = result + marks can be written as result +=marks

// Evaluation Expressions
    // Like many interpreted languages, JavaScript has the ability to interpret strings of JavaScript source code, evaluating them to produce a value.
    // JavaScript does this with the global function eval().
    console.log(eval("3 + 2"));
    // Dynamic evaluation of strings of source code is a powerful language feature that is almost never necessary in practice. If you find yourself using eval(), you should think carefully about whether you really need to use it.
    // Some web servers use the HTTP “Content-Security- Policy” header to disable eval() for an entire website.
    // eval(), global eval() and strict eval. Read it if super necessary. 

// Miscellaneous Operators
    // The Conditional Operator (?:)
        // The conditional operator is the only ternary operator (three operands) in JavaScript and is sometimes actually called the ternary operator.
        // The operands of the conditional operator may be of any type. The first operand is evaluated and interpreted as a boolean. 
        // If the value of the first operand is truthy, then the second operand is evaluated, and its value is returned. 
        // Otherwise, if the first operand is falsy, then the third operand is evaluated and its value is returned. Only one of the second and third operands is evaluated; never both.
        console.log(7>0?"positive": "negative");
        console.log(-7>0?"positive": "negative");
    // First-defined(??)
        // The first-defined operator ?? evaluates to its first defined operand: if its left operand is not null and not undefined, it returns that value. Otherwise, it returns the value of the right operand.
        // Like the && and || operators, ?? is short-circuiting: it only evaluates its second operand if the first operand evaluates to null or undefined.
    // The typeof Operator
        // typeof is a unary operator that is placed before its single operand, which can be of any type. Its value is a string that specifies the type of the operand.

// The delete Operator
    // delete is a unary operator that attempts to delete the object property or array element specified as its operand. Like the assignment, increment, and decrement operators, delete is typically used for its property deletion side effect and not for the value it returns 
    let o = { x: 1, y: 2};
    delete o.x;
    console.log("x" in o);
    let arr1 = [0,1,2,4];
    delete arr1[1];
    console.log(1 in arr1);
    // Deleting an array element leaves a “hole” in the array and does not change the array’s length.
    // delete expects its operand to be an lvalue. If it is not an lvalue, the operator takes no action and returns true.
    // In strict mode, delete raises a SyntaxError if its operand is an unqualified identifier such as a variable, function, or function parameter: it only works when the operand is a property access expression.

// The await Operator
    // await expects a Promise object (representing an asynchronous computation) as its sole operand, and it makes your program behave as if it were waiting for the asynchronous computation to complete
    // But it does this without actually blocking, and it does not prevent other asynchronous operations from proceeding at the same time.
    // This operator is unusual and infrequently used; it evaluates its operand, then discards the value and returns undefined.

// The comma operator
    // It evaluates its left operand, evaluates its right operand, and then returns the value of the right operand.
    for (let i = 0, j = 10; i < j; i++, j--)
    {
        console.log(i + j);
    }