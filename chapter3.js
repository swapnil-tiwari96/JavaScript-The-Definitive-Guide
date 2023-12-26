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
        console.log(`Result of isFinite(20) is ${isFinite(20)}`);
        // isFinite() will give true if the number is not Infinity, -Infinity or NaN
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