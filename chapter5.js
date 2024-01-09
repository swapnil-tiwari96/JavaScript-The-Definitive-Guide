// Chapter 5. Statements

// Statements are JavaScript sentences or commands.
// JavaScript statements are terminated with semicolons.
// Expressions are evaluated to produce a value, but statements are executed to make something happen.
// One way to “make something happen” is to evaluate an expression that has side effects.
// Expressions with side effects, such as assignments and function invocations, can stand alone as statements, and when used this way are known as expression statements.
// A similar category of statements are the declaration statements that declare new variables and define new functions.
// JavaScript programs are nothing more than a sequence of statements to execute.
// JavaScript has a number of statements or control structures which alter this default order of execution (interpreter executes these statements one after another in the order they are written).
    // Conditionals (if and switch statements)
    // Loops (while and for statements)
    // Jumps (break, return and throw statements)
// 1. Expression Statements
    // The simplest kinds of statements in JavaScript are expressions that have side effects.
    // Assignment statements are one major category of expression statements.
    let name = "Swapnil"; 
    let greetings = "Hello " + name;
    console.log(greetings);
    // The increment and decrement operators, ++ and --, are related to assignment statements.
    let counter = 1;
    counter++;
    console.log(counter);
    // The delete operator has the important side effect of deleting an object property.
    let o = {w: 0, x: 1, y: 2, z: 3};
    console.log(o);
    delete o.x; 
    console.log(o);
    // Function calls are another major category of expression statements.
    const debugMessage = () => {
        return "Message";
    }
    console.log(debugMessage());

// 2. Compound and Empty Statements
    // A statement block combines multiple statements into a single compound statement.
    {
        let x = Math.PI;
        let cx = Math.cos(x);
        console.log("cos(π) = " + cx);
    }
    // The empty statement is the opposite: it allows you to include no statements where one is expected.
    // The empty statement is occasionally useful when you want to create a loop that has an empty body.

// 3. Conditionals
    // Conditional statements execute or skip other statements depending on the value of a specified expression. These statements are the decision points of your code, and they are also sometimes known as "branches".
    // if
        // The if statement is the fundamental control statement that allows JavaScript to make decisions, or, more precisely, to execute statements conditionally.
        // if (expression)
            // statement
        // In this form, expression is evaluated. If the resulting value is truthy, statement is executed. If expression is falsy, statement is not executed.
        let username = ""
        if (username === null) {
            username = "John Doe";
        }
        // Similarly you could write,
        if (!username) username = "John Doe";
        // The second form of the if statement introduces an else clause that is executed when expression is false.
        /* if (expression)
            statement1
        else
            statement2 */
        if (username !== "") {
            console.log("Lets Go");
        }
        else {
            console.log("Please fill name");
        }
        // When you have nested if statements with else clauses, some caution is required to ensure that the else clause goes with the appropriate if statement.
    // else if
        let n = 2; 
        if (n == 0) {
            console.log("Sunday");
        }
        else if (n == 1) {
            console.log("Monday");
        }
        else {
            console.log("Not Sunday or Monday");
        }
    // switch
        /* switch(expression) {
                statements
         } */
        switch (n) {
            case 0:
                console.log("Sunday");
                break;
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Not Sunday or Monday (Switch statement)");
                break;
            default: 
                console.log("Enter between 0-6");
                break;
        }
        // The break statement, described later in this chapter, causes the interpreter to jump to the end (or “break out”) of the switch statement and continue with the statement that follows it.
        // If there is no default: label, the switch statement skips the block of code altogether.

// 4. Loops
    // The looping statements are those that bend that path back upon itself to repeat portions of your code.
    // while
        /*while (expression)
            statement */
        // To execute a while statement, the interpreter first evaluates expression. 
        // If the value of the expression is falsy, then the interpreter skips over the statement that serves as the loop body and moves on to the next statement in the program.
        // If, on the other hand, the expression is truthy, the interpreter executes the statement and repeats, jumping back to the top of the loop and evaluating expression again.
        let count = 10;
        let arr = [];
        while (count < 20){
            arr.push(count);
            count ++;
        }
        console.log(arr);
    // do/while
        // The do/while loop is like a while loop, except that the loop expression is tested at the bottom of the loop rather than at the top.
        // This means that the body of the loop is always executed at least once.
        /* do
            statement
        while (expression);*/

    // for
        // for(initialize ; test ; increment)
            // statement
        for (let i = 20; i <= 30; i++) {
            arr.push(i);
        }
        console.log(arr);
        // more complex for loops
        let sum = 0;
        for (let i = 0, j = 10; i<10, j> 0; i++, j--) {
            sum += (i * j);
        }
        console.log(sum);
        // Any of the three expressions may be omitted from a for loop, but the two semicolons are required.

    // for/of
        // It goes through the values and not the iterator.
        // The for/of loop works with iterable objects.
        for (let i of arr) {
            console.log(i);
        }
        // using with objects
        // for object use the Object.keys, Object.values and Object.entries method methods.
        for (let [k,v] of Object.entries(o)) {
            console.log(k, v);
        }
        // using with strings
        let letters = {};
        for (let i of "mississippi") {
            if (letters[i]) {
                letters[i]++;
            }else {
                letters[i] = 1;
            }
        }
        console.log(letters);
        // It can also be used with set and map.
        // set
        let text = "Na na na na na na na na Batman!";
        let wordSet = new Set(text.split(" "));
        let unique = [];
        for(let word of wordSet) {
            unique.push(word);
        }
        console.log(unique);
        // map
        let m = new Map([[1, "one"]]);
        for(let [key, value] of m) {
            console.log(key);
            console.log(value);
        }
        // for/await loop is a variant of for/of loop that works with asynchronous iterator
    // for/in
        // a for/in loop works with any object after the in.
        // it works on the iterator and not the value.
        for (let i in o) {
            console.log(i); //Gives the property name
            console.log(o[i]); //Gives the property value
        }
        for (let i in arr) {
            console.log(i); //its telling how many values are there (iterations) and not the values itself.
            console.log(arr[i]); //this will give the value.
        }

// 5. Jumps
    // As the name implies, these cause the JavaScript interpreter to jump to a new location in the source code.
    // Labeled Statements
        // identifier: statement
        // By labeling a statement, you give it a name that you can use to refer to it elsewhere in your program.
        // You can label any statement, although it is only useful to label statements that have bodies, such as loops and conditionals.
    // break
        // The break statement, used alone, causes the innermost enclosing loop or switch statement to exit immediately.
        // In loops, it is typically used to exit prematurely when, for whatever reason, there is no longer any need to complete the loop.
        // JavaScript also allows the break keyword to be followed by a statement label.
        const getData = () => console.log("Testing"); //although this function should be getting a matrix. Just for testing purposes, logging. 
        let matrix = getData();
        let sum1 = 0, success = false;
        // Start with a labeled statement that we can break out of if errors occur
        computeSum: if (matrix)
        {
            for (let x = 0; x < matrix.length; x++)
            {
                let row = matrix[x];
                if (!row) break computeSum;
                for (let y = 0; y < row.length; y++)
                {
                    let cell = row[y];
                    if (isNaN(cell)) break computeSum;
                    sum += cell;
                }
            }
             success = true;
        }
        // The break statements jump here. If we arrive here with success == false
        // then there was something wrong with the matrix we were given.
        // Otherwise, sum contains the sum of all cells of the matrix.
    // continue
        // The continue statement is similar to the break statement. Instead of exiting a loop, however, continue restarts a loop at the next iteration.
        // The continue statement can also be used with a label.
        // When the continue statement is executed, the current iteration of the enclosing loop is terminated, and the next iteration begins. This means different things for different types of loops.
        // Note the difference in behavior of the continue statement in the while and for loops: a while loop returns directly to its condition, but a for loop first evaluates its increment expression and then returns to its condition.
    // return
        // A return statement within a function specifies the value of invocations of that function.
        // A return statement may appear only within the body of a function. It is a syntax error for it to appear anywhere else.
        // When the return statement is executed, the function that contains it returns the value of expression to its caller.
        function square(x) { return x*x; }
        console.log(square(4));
    // yield
        // The yield statement is much like the return statement but is used only in ES6 generator functions to produce the next value in the generated sequence of values without actually returning.
    // throw
        // An exception is a signal that indicates that some sort of exceptional condition or error has occurred. To throw an exception is to signal such an error or exceptional condition.
        // To catch an exception is to handle it—to take whatever actions are necessary or appropriate to recover from the exception.
        function factorial(x) {
            // If the input argument is invalid, throw an exception!
            if (x < 0) throw new Error("x must not be negative");
            // Otherwise, compute a value and return normally
            let f;
            for(f = 1; x > 1; f *= x, x--) /* empty */ ;
            return f;
            }
            factorial(4); //just testing this is not factorial code though.
        // When an exception is thrown, the JavaScript interpreter immediately stops normal program execution and jumps to the nearest exception handler.
        // Exception handlers are written using the catch clause of the try/catch/finally statement.
    // try/catch/finally
        // The try/catch/finally statement is JavaScript’s exception handling mechanism.
        // The try clause of this statement simply defines the block of code whose exceptions are to be handled.
        // The try block is followed by a catch clause, which is a block of statements that are invoked when an exception occurs anywhere within the try block.
        // The catch clause is followed by a finally block containing cleanup code that is guaranteed to be executed, regardless of what happens in the try block.
        // Both the catch and finally blocks are optional, but a try block must be accompanied by at least one of these blocks.
        try {
            
        } catch (error) {
            
        } finally {

        }

// 6. Miscellaneous statements
    // with
        // not so important statement since it takes more time to execute while it can be done easily with other techniques. 
        // The common use of the with statement is to make it easier to work with deeply nested object hierarchies.
        // document.forms[0].address.value
        /* with(document.forms[0]) {
            name.value = "";
            address.value = "";
            email.value = "";
        } */
        // But this could easily be done by
        // let f = document.forms[0]; //and then you can access this variable. 
    // debugger
        // In practice, this statement acts like a breakpoint: execution of JavaScript code stops, and you can use the debugger to print variables’ values, examine the call stack, and so on.
        function f(o) {
            if (o === undefined) debugger; // Temporary line for debugging purposes
            // The rest of the function goes here.
            }
    // "use strict"
            // "use strict" is a directive introduced in ES5. Directives are not statements.
            // The purpose of a "use strict" directive is to indicate that the code that follows (in the script or function) is strict code.
            // In addition to code explicitly declared to be strict, any code in a class body or in an ES6 module is automatically strictcode.
            // This means that if all of your JavaScript code is written as modules, then it is all automatically strict, and you will never need to use an explicit "use strict" directive.
            // Strict code is executed in strict mode. Strict mode is a restricted subset of the language that fixes important language deficiencies and provides stronger error checking and increased security.
            // Do read all the differences between stict mode and non strict mode from the book. 

// 7. Declarations
    // These keywords are more accurately described as declarations rather than statements. Declarations serve to define new values and give them names that we can use to refer to those values.
    // const, let and var - detailed notes in chapter 4
        // const declares constants, and let declares variables. Prior to ES6, the var keyword was the only way to declare variables and there was no way to declare constants.
    // functions
        // A function declaration creates a function object and assigns it to the specified name.
        // Elsewhere in our program, we can refer to the function—and run the code inside it—by using this name.
        // function declarations are “hoisted” because it is as if they had all been moved up to the top of whatever scope they are defined within.
    // class
        // In ES6 and later, the class declaration creates a new class and gives it a name that we can use to refer to it.
        // Unlike functions, class declarations are not hoisted, and you cannot use a class declared this way in code that appears before the declaration.
    // import and export
        // The import and export declarations are used together to makevalues defined in one module of JavaScript code available in another module. 
        // A module is a file of JavaScript code with its own global namespace, completely independent of all other modules.
        // The only way that a value (such as function or class) defined in one module can be used in another module is if the defining module exports it with export and the using module imports it with import.
        // import directives are used to import one or more values from another file of JavaScript code and give them names within the current module.
        // import Circle from './geometry/circle.js'; //not writing as code since it will throw an error due to circle.js not existing right now. Just an example. 
        const PI = Math.PI;
        const TAU = 2 * PI;
        export { PI, TAU };