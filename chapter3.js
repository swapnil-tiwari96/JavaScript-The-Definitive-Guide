// Chapter 3. Types, Values, and Variables

// The kinds of values that can be represented and manipulated in a programming language are known as types, and one of the most fundamental characteristics of a programming language is the set of types it supports.
// When a program needs to retain a value for future use, it assigns the value to (or “stores” the value in) a variable.
// JavaScript’s primitive types include numbers, strings of text (known as strings), and Boolean truth values (known as booleans).
// JavaScript values null and undefined are primitive values, but they are not numbers, strings, or booleans.
// Any JavaScript value that is not a number, a string, a boolean, a symbol, null, or undefined is an object.
// An ordinary JavaScript object is an unordered collection of named values.
// Array, that represents an ordered collection of numbered values.
// A Set object represents a set of values. A Map object represents a mapping from keys to values.
// Various “typed array” types facilitate operations on arrays of bytes and other binary data. 
// The RegExp type represents textual patterns and enables sophisticated matching, searching, and replacing operations on strings.
// The Date type represents dates and times and supports rudimentary date arithmetic. 
// Error and its subtypes represent errors that can arise when executing JavaScript code.
// Like any JavaScript value that is not a primitive value, functions and classes are a specialized kind of object.
// The JavaScript interpreter performs automatic garbage collection for memory management.
// JavaScript supports an object-oriented programming style. Loosely, this means that rather than having globally defined functions to operate on values of various types, the types themselves define methods for working with values.
// JavaScript’s object types are mutable and its primitive types are immutable.
// JavaScript constants and variables are untyped: declarations do not specify what kind of values will be assigned.

// Numbers

// 64-bit floating-point format
// When a number appears directly in a JavaScript program, it’s called a numeric literal.
// JavaScript supports numeric literals in several formats: 
    // 1. Integer Literals -  base 10, hexadecimal integers
    // 2. Floating Points Literals: [digits][.digits][(E|e)[(+|-)]digits]
    // 3. Arithmetic: +, -, *, /, %, ** are the arithmatic operations
        // JavaScript supports more complex mathematical operations through a set of functions and constants defined as properties of the Math object
        console.log(`Result of Math.pow(2, 53) is ${Math.pow(2, 53)}`);
        console.log(`Result of Math.round(45.67) is ${Math.round(45.67)}`); //there are many more in Math object to explore
        // Arithmetic in JavaScript does not raise errors in cases of overflow, underflow, or division by zero.
        // When the result of a numeric operation is larger than the largest representable number (overflow), the result is a special infinity value, Infinity. For negative, it's -Infinity
        console.log(`Result of Infinity is ${Infinity}`);
        console.log(`Result of -Infinity is ${-Infinity}`);
        console.log(`Result of typeof Infinity is ${typeof Infinity}`);
        console.log(`Result of typeof -Infinity is ${typeof -Infinity}`);
        // Underflow occurs when the result of a numeric operation is closer to zero than the smallest representable number.
        // Division by zero is not an error in JavaScript: it simply returns infinity or negative infinity.
        console.log(`Result of 1/0 is ${1/0}`);
        // zero divided by zero does not have a well-defined value, and the result of this operation is the special not-a-number value, NaN.
        console.log(`Result of 0/0 is ${0/0}`);
        // NaN also arises if you attempt to divide infinity by infinity, take the square root of a negative number, or use arithmetic operators with non-numeric operands that cannot be converted to numbers.
        console.log(`Result of Infinity/Infinity is ${Infinity/Infinity}`);
        console.log(`Result of -Infinity/-Infinity is ${-Infinity/-Infinity}`);
        console.log(`Result of Infinity/-Infinity) is ${Infinity/-Infinity}`);
        console.log(`Result of Infinity/0 is ${Infinity/0}`);
        console.log(`Result of 0/Infinity is ${0/Infinity}`);
        console.log(`Result of typeof NaN is ${typeof NaN}`);
        // The not-a-number value has one unusual feature in JavaScript: it does not compare equal to any other value, including itself.
        console.log(`Result of Nan === NaN is ${NaN === NaN}`);
        // To check if number is NaN or not
        console.log(`Result of Number.isNaN(Infinity/Infinity) is " ${Number.isNaN(Infinity/Infinity)}`);
        console.log(`Result of Number.isNaN(NaN) is ${Number.isNaN(NaN)}`);
        console.log(`Result of isNaN(NaN) is ${isNaN(NaN)}`);
        console.log(`Result of isNaN(100) is ${isNaN(100)}`);
        // isFinite() will give true if the number is not Infinity, -Infinity or NaN
        console.log(`Result of isFinite(20) is ${isFinite(20)}`);
        console.log(`Result of isFinite(Infinity) is ${isFinite(Infinity)}`);
        // checking if 0 and -0 are same
        console.log(`Result of 0 === -0 is ${(0 === -0)}`);
        console.log(`Result of 1/0 === 1/-0 is ${1/0 === 1/-0}`);
    // 4. Binary Floating-Point and Rounding Errors
        // When you’re working with real numbers in JavaScript, the representation of the number will often be an approximation of the actual number.
        // JavaScript numbers have plenty of precision and can approximate 0.1 very closely. But the fact that this number cannot be represented exactly can lead to problems.
        let x = .3 - .2;
        let y = .2 - .1; 
        console.log(`Result of x === y is ${x === y}`);
        console.log(`Result of x === .1 is ${x === .1}`);
        console.log(`Result of y === .1 is ${y === .1}`);
    // 5. Arbitary Precision Integers with BigInt
        // BigInt is a numeric type whose values are integers.
        // The type was added to JavaScript mainly to allow the representation of 64-bit integers, which are required for compatibility with many other programming languages and APIs.
        // that BigInt implementations are not suitable for cryptography because they do not attempt to prevent timing attacks.
        // BigInt literals are written as a string of digits followed by a lowercase letter n.
        // By default, the are in base 10, but you can use the 0b, 0o, and 0x prefixes for binary, octal, and hexadecimal BigInts:
        console.log(`Result of 1234n is ${1234n}`);
        console.log(`Result of 0x8000000000000000n is ${0x8000000000000000n}`);
        // You can use BigInt() as a function for converting regular JavaScript numbers or strings to BigInt values
        console.log(`Result of BigInt(Number.MAX_SAFE_INTEGER) is ${BigInt(Number.MAX_SAFE_INTEGER)}`);
        // Although the standard +, -, *, /, %, and ** operators work with BigInt, it is important to understand that you may not mix operands of type BigInt with regular number operands.
        // None of the functions of the Math object accept BigInt operands
    // 6. Dates and Time
        // JavaScript defines a simple Date class for representing and manipulating the numbers that represent dates and times.
        // JavaScript Dates are objects, but they also have a numeric representation as a timestamp that specifies the number of elapsed milliseconds since January 1, 1970.
        console.log(`Result of Date.now() is ${Date.now()}`);
        let now = new Date();
        console.log(`Result of now is ${now}`);
        console.log(`Result of now.getTime() is ${now.getTime()}`);
        console.log(`Result of now.toISOString() is ${now.toISOString()}`);

// Text

// The JavaScript type for representing text is the string.
// A string is an immutable ordered sequence of 16-bit values, each of which typically represents a Unicode character.
// The length of a string is the number of 16-bit values it contains. 
// JavaScript’s strings (and its arrays) use zero based indexing: the first 16-bit value is at position 0, the second at position 1, and so on.
// The empty string is the string of length 0.
    // 1. String Literals
        // To include a string in a JavaScript program, simply enclose the characters of the string within a matched pair of single or double quotes or backticks (' or " or `).
        console.log('name="myform"');
        console.log(`"She said 'hi'", he said.`);
        // Strings delimited with backticks are a feature of ES6, and allow JavaScript expressions to be embedded within (or interpolated into) the string literal.
        // As of ES5, however, you can break a string literal across multiple lines by ending each line but the last with a backslash (\).
        console.log('two\nlines');
        console.log("one\
        two\
        three");
        console.log(`now this can be done
        with just backticks`); 
    // 2. Escape Sequences in String Literals
        // The backslash character (\) has a special purpose in JavaScript strings. Combined with the character that follows it, it represents a character that is not otherwise representable within the string.
        // Since the apostrophe is the same as the single-quote character, you must use the backslash character (\) to “escape” any apostrophes that appear in single-quoted strings.
        console.log('You\'re right, it can\'t be a quote');
        // Three escape sequences are generic and can be used to represent any character by specifying its Unicode character code as a hexadecimal number.
        console.log("\xA9");
        // the \u escape represents an arbitrary Unicode character specified by four hexadecimal digits or one to five digits when the digits are enclosed in curly braces
        console.log("\u03c0");
        console.log("\u{1f600}");
    // 3. Working with strings
        // if you use + operator on strings, it joins them by appending the second to the first.
        console.log("First " + "Second");
        // Strings can be compared with the standard === equality and !== inequality operators: two strings are equal if and only if they consist of exactly the same sequence of 16-bit values.
        // String comparison is done simply by comparing the 16-bit values.
        // To determine the length of a string—the number of 16-bit values it contains—use the length property of the string.
        let str = "Hello World!";
        console.log(str.length);
        console.log(`Result of str.includes("ello") is ${str.includes("ello")}`);
        console.log(`Result of str.toUpperCase() is ${str.toUpperCase()}`);
        console.log(`Result of str.replace("ello","qwerty") is ${str.replace("ello","qwerty")}`);
        // JavaScript provides a rich API for working with strings. For more see the MDN Docs
        // Remember that strings are immutable in JavaScript. Methods like replace() and toUpperCase() return new strings: they do not modify the string on which they are invoked.
    // 4. Template Literal
        // Everything between the ${ and the matching } is interpreted as a JavaScript expression.Everything outside the curly braces is normal string literal text.
        // The expression inside the braces is evaluated and then converted to a string and inserted into the template, replacing the dollar sign, the curly braces, and everything in between them.
        // A template literal may include any number of expressions. It can use any of the escape characters that normal strings can, and it can span any number of lines, with no special escaping required.
        console.log(`Tempelate literal ${1 + 2}`);
        // TAGGED TEMPLATE LITERALS - see this later
    // 5. Pattern Matching
        // JavaScript defines a datatype known as a regular expression (or RegExp) for describing and matching patterns in strings of text.
        // Text between a pair of slashes constitutes a regular expression literal.
        let text = "testing: 1, 2, 3";
        let pattern = /\d+/g;
        console.log(`Result of pattern.test(text) is ${pattern.test(text)}`);
        console.log(`Result of text.search(pattern) is ${text.search(pattern)}`);
        console.log(`Result of text.match(pattern) is ${text.match(pattern)}`);
        console.log(`Result of text.replace(pattern, "#") is ${text.replace(pattern, "#")}`);
        console.log(`Result of text.split(/\D+/) is ${text.split(/\D+/)}`);
// Boolean Values
    // A boolean value represents truth or falsehood, on or off, yes or no.
    // There are only two possible values of this type. The reserved words true and false evaluate to these two values.        // false, and the six values (undefined, null, 0, -0, NaN, "") that convert to it, are sometimes called falsy values, and all other values are called truthy.
    if (undefined || NaN || null || 0 || -0 || "") {
        console.log(`Result of if (undefined || NaN || null || 0 || -0 || "") is ${true}`);
    } else {
        console.log(`Result of if (undefined || NaN || null || 0 || -0 || "") is ${false}`);
    }
    // Three important operators: ||, &&, !
    
// null and undefined
    // null is a language keyword that evaluates to a special value that is usually used to indicate the absence of a value.
    // null is a special object value that indicates "no object". "No value" for numbers and strings as well as objects.
    console.log(`Result of typeof null is ${typeof null}`);
    // JavaScript also has a second value that indicates absence of value - undefined. 
    // It is the value of variables that have not been initialized and the value you get when you query the value of an object property or array element that does not exist.
    // The undefined value is also the return value of functions that do not explicitly return a value and the value of function parameters for which no argument is passed.
    // undefined is a predefined global constant (not a language keyword like null) that is initialized to the undefined value.
    // If you apply the typeof operator to the undefined value, it returns “undefined”, indicating that this value is the sole member of a special type.
    console.log(`Result of typeof undefined is ${typeof undefined}`);
    // null and undefined both indicate an absence of value and can often be used interchangeably.
    console.log(`Result of null == undefined is ${null == undefined}`);
    console.log(`Result of null === undefined is ${null === undefined}`);
    // I consider undefined to represent a system-level, unexpected, or error-like absence of value and null to represent a program-level, normal, or expected absence of value.

// Symbols
    // Symbols were introduced in ES6 to serve as non-string property names.
    // To understand Symbols, you need to know that JavaScript’s fundamental Object type is an unordered collection of properties,where each property has a name and a value. 
    // Property names are typically (and until ES6, were exclusively) strings. But in ES6 and later, Symbols can also serve this purpose.
    let strName = "String Name";
    let symName = Symbol(strName);
    console.log(symName);
    console.log(`Result of typeof symName is ${typeof symName}`);
    let obj = {};
    obj[strName] = 1;
    obj[symName] = 2;
    console.log(obj);
    // To obtain a Symbol value, you call the Symbol() function.
    // This function never returns the same value twice, even when called with the same argument. 
    // This means that if you call Symbol() to obtain a Symbol value, you can safely use that value as a property name to add a new property to an object and do not need to worry that you might be overwriting an existing property with the same name.

// Global Object
    // The global object is a regular JavaScript object: the properties of this object are the globally defined identifiers that are available to a JavaScript program.
    console.log(global);
    console.log(globalThis); //always use this
    console.log(global === globalThis);
// Immutable Primitive Values and Mutable Object References
    // Primitives (undefined, null, booleans, numbers, and strings) are immutable: there is no way to change (or “mutate”) a primitive value.
    // All string methods that appear to return a modified string are, in fact, returning a new string value.
    // If two distinct string values are compared, JavaScript treats them as equal if, and only if, they have the same length and if the character at each index is the same.
    console.log(str.toUpperCase()); //here the original string is not changed. This is a new string now attached to the string. 
    // Objects are different than primitives. First, they are mutable—their values can change.
    // Objects are not compared by value: two distinct objects are not equal even if they have the same properties and values. 
    // Two distinct arrays are not equal even if they have the same elements in the same order.
    // Objects are sometimes called reference types to distinguish them from JavaScript’s primitive types. Using this terminology, object values are references, and we say that objects are compared by reference: two object values are the same if and only if they refer to the same underlying object. 
    let a = [2,3,4,5];
    let b = a;
    b[0] = 1;
    console.log(a);
    console.log(`Result of a === b is ${a === b}`);
    // Assigning an object (or array) to a variable simply assigns the reference: it does not create a new copy of the object.
    // If you want to make a new copy of an object or array, you must explicitly copy the properties of the object or the elements of the array.
    console.log(Array.from(a));
    // Similarly, if we want to compare two distinct objects or arrays, we must compare their properties or elements.

// Type Conversions
    // Some values (“truthy” values) convert to true and others (“falsy” values) convert to false in case of booleans as seen above.
    // The same is true for other types: if JavaScript wants a string, it will convert whatever value you give it to a string.
    // If JavaScript wants a number, it will try to convert the value you give it to a number (or to NaN if it cannot perform a meaningful conversion).
    console.log(10 + " lets go");
    console.log("10" * "7");
    // refer the table for type conversions (Table 3.2)
    // 1. Conversions and Equality
        // The “strict equality operator,” ===, does not consider its operands to be equal if they are not of the same type.
        // the == operator is flexible with the type.
        console.log(`Result of null == undefined is ${null == undefined}`);
        console.log(`Result of null === undefined is ${null === undefined}`);
        console.log(`Result of 0 == "0" is ${0 == "0"}`);
        console.log(`Result of 0 === "0" is ${0 === "0"}`);
    // 2. Explicit Conversions
        // The simplest way to perform an explicit type conversion is to use the Boolean(), Number(), and String() functions. 
        console.log(Boolean(undefined));
        console.log(Boolean("undefined"));
        console.log(Number("5"));
        console.log(String(5));
        // Any value other than null or undefined has a toString() method, and the result of this method is usually the same as that returned by the String() function.
        // As an aside, note that the Boolean(), Number(), and String() functions can also be invoked—with new—as constructor.
        let abc = new Number("56");
        console.log(abc);
        // If one operand of the + operator is a string, it converts the other one to a string.
        // The unary + operator converts its operand to a number.
        // And the unary ! operator converts its operand to a boolean and negates it.
        // The toString() method defined by the Number class accepts an optional argument that specifies a radix, or base, for the conversion.
        // If you do not specify the argument, the conversion is done in base 10.
        let n = 123456.789;
        console.log("0b" + n.toString(2));
        console.log("0o" + n.toString(8));
        console.log("0x" + n.toString(16));
        // toFixed() converts a number to a string with a specified number of digits after the decimal point.
        // toExponential() converts a number to a string using exponential notation, with one digit before the decimal point and a specified number of digits after the decimal point (which means that the number of significant digits is one larger than the value you specify).
        // toPrecision() converts a number to a string with the number of significant digits you specify.
        console.log(n.toFixed(0));
        console.log(n.toFixed(2));
        console.log(n.toFixed(5));
        console.log(n.toExponential(1));
        console.log(n.toExponential(3));
        console.log(n.toPrecision(4));
        console.log(n.toPrecision(7));
        console.log(n.toPrecision(10));
        // Number() only works for base-10 integers and does not allow trailing characters that are not part of the literal.
        // parseInt() parses only integers, while parseFloat() parses both integers and floating-point numbers. If a string begins with “0x” or “0X”, parseInt() interprets it as a hexadecimal number.
        // Both parseInt() and parseFloat() skip leading whitespace, parse as many numeric characters as they can, and ignore anything that follows.
        console.log(parseInt(" 3.14 meters"));
        console.log(parseFloat(" 3.14 meters"));
        console.log(parseInt(".1"));
        console.log(parseFloat("&14"));
        // parseInt() accepts an optional second argument specifying the radix (base) of the number to be parsed. Legal values are between 2 and 36.
        console.log(parseInt("11", 2));
    // 3. Object to Primitive Conversions
        // Read this later

// Variable Declaration and Assignment
    // Binding a name to a value gives us a way to refer to that value and use it in the programs we write. When we do this, we typically say that we are assigning a value to a variable.
    // If we permanently assign a value to a name, then we call that name a constant instead of a variable.
    // In modern JavaScript (ES6 and later), variables are declared with the let keyword. 
    let i, sum; //declaring multiple variables in a single line.
    // If you don’t specify an initial value for a variable with the let statement, the variable is declared, but its value is undefined until your code assigns a value to it.
    // To declare a constant instead of a variable, use const instead of let. const works just like let except that you must initialize the constant when you declare it.
    const AU = 1.496E8;
    // As the name implies, constants cannot have their values changed, and any attempt to do so causes a TypeError to be thrown.
    // It is a common (but not universal) convention to declare constants using names with all capital letters such as H0 or HTTP_NOT_FOUND as a way to distinguish them from variables.
    // Variable and Constant Scope
        // The scope of a variable is the region of your program source code in which it is defined. Variables and constants declared with let and const are block scoped.
        // Block scoped - if a variable or constant is declared within a set of curly braces, then those curly braces delimit the region of code in which the variable or constant is defined.
        // When a declaration appears at the top level, outside of any code blocks, we say it is a global variable or constant and has global scope.
    // Repeated Declarations
        // It is a syntax error to use the same name with more than one let or const declaration in the same scope.
        // It is legal (though a practice best avoided) to declare a new variable with the same name in a nested scope.
    // Declarations and Types
        // there is no type associated with JavaScript’s variable declarations. A JavaScript variable can hold a value of any type.
    // Variable Declaration with var
        // In versions of JavaScript before ES6, the only way to declare a variable is with the var keyword, and there is no way to declare constants.
        // Variables declared with var do not have block scope. Instead, they are scoped to the body of the containing function no matter how deeply nested they are inside that function.
        // Globals declared with var are implemented as properties of the global object. The global object can be referenced as globalThis.
        // the properties created with global var declarations cannot be deleted with the delete operator.
        // Global variables and constants declared with let and const are not properties of the global object.
        // Unlike variables declared with let, it is legal to declare the same variable multiple times with var.
        // One of the most unusual features of var declarations is known as hoisting.
        // The initialization of the variable remains where you wrote it, but the definition of the variable moves to the top of the function. So variables declared with var can be used, without error, anywhere in the enclosing function.
    // Destructuring Assignment
        // ES6 implements a kind of compound declaration and assignment syntax known as destructuring assignment.
        // In a destructuring assignment, the value on the righthand side of the equals sign is an array or object (a “structured” value), and the lefthand side specifies one or more variable names using a syntax that mimics array and object literal syntax.
        let [xy, yz] = [1,2];
        console.log(xy, yz);
        // Very useful with functions that return multiple data
        // Extra variables on the left are set to undefined, and extra values on the right are ignored.
        // If you want to collect all unused or remaining values into a single variable when destructuring an array, use three dots (...) before the last variable name on the left-hand side.
        // You can use any iterable object on the righthand side of the assignment; any object that can be used with a for/of loop can also be destructured.
        let [first, ...rest] = "Hello";
        console.log(first, rest);
        // Destructuring assignment can also be performed when the righthand side is an object value.
        // Each of the identifiers on the lefthand side of an object destructuring assignment can also be a colon-separated pair of identifiers, where the first is the name of the property whose value is to be assigned and the second is the name of the variable to assign it to