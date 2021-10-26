// Day 0: Hello, World!


/**
 *   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
 *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
 *
 *	Parameter:
 *   parameterVariable - A string of text.
 **/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);



    // Day 0: Data Types


    /**
     *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
     *   Print three lines:
     *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
     *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
     *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
     *
     *	Parameter(s):
     *   secondInteger - The string representation of an integer.
     *   secondDecimal - The string representation of a floating-point number.
     *   secondString - A string consisting of one or more space-separated words.
     **/
    function performOperation(secondInteger, secondDecimal, secondString) {
        // Declare a variable named 'firstInteger' and initialize with integer value 4.
        const firstInteger = 4;

        // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
        const firstDecimal = 4.0;

        // Declare a variable named 'firstString' and initialize with the string "HackerRank".
        const firstString = 'HackerRank ';

        // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
        console.log(firstInteger + Number(secondInteger));

        // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
        console.log(firstDecimal + Number(secondDecimal));

        // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
        console.log(firstString + secondString);
    }


    // Day 2: Operators
    'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';
    let currentLine = 0;

    process.stdin.on('data', function(inputStdin) {
        inputString += inputStdin;
    });

    process.stdin.on('end', function() {
        inputString = inputString.split('\n');

        main();
    });

    function readLine() {
        return inputString[currentLine++];
    }

    /*
     * Complete the 'solve' function below.
     *
     * The function accepts following parameters:
     *  1. DOUBLE meal_cost
     *  2. INTEGER tip_percent
     *  3. INTEGER tax_percent
     */

    function solve(meal_cost, tip_percent, tax_percent) {
        // Write your code here
        const tip = (tip_percent / 100) * meal_cost;
        let tax = (tax_percent / 100) * meal_cost;
        let total = Math.round(meal_cost + tip + tax);

        console.log(total);
    }

    function main() {
        const meal_cost = parseFloat(readLine().trim());

        const tip_percent = parseInt(readLine().trim(), 10);

        const tax_percent = parseInt(readLine().trim(), 10);

        solve(meal_cost, tip_percent, tax_percent);
    }

    // Day 3: Arrays


    /**
     *   Return the second largest number in the array.
     *   @param {Number[]} nums - An array of numbers.
     *   @return {Number} The second largest number in the array.
     **/
    function getSecondLargest(nums) {
        // Complete the function
        var max = 0,
            secondmax = 0;

        for (var i = 0; i < nums.length; i++) {

            if (nums[i] > max) {
                secondmax = max;
                max = nums[i];
            } else if (nums[i] < max && nums[i] > secondmax) {
                secondmax = nums[i];
            }

        }
        return secondmax;
    }


    // Day 3: Intro to Conditional Statements
    'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';
    let currentLine = 0;

    process.stdin.on('data', function(inputStdin) {
        inputString += inputStdin;
    });

    process.stdin.on('end', function() {
        inputString = inputString.split('\n');

        main();
    });

    function readLine() {
        return inputString[currentLine++];
    }




    function main() {
        const N = parseInt(readLine().trim(), 10);
        if (N % 2 !== 0) {
            return console.log('Weird')
        } else {
            if (N >= 2 && N <= 5) {
                return console.log('Not Weird')
            } else if (N >= 6 && N <= 20) {
                return console.log('Weird')
            } else if (N > 20) {
                return console.log('Not Weird')
            }
        }
    }


    'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';
    let currentLine = 0;

    process.stdin.on('data', function(inputStdin) {
        inputString += inputStdin;
    });

    process.stdin.on('end', function() {
        inputString = inputString.split('\n');

        main();
    });


    // Day 3: Intro to Conditional Statements



    function readLine() {
        return inputString[currentLine++];
    }




    function main() {
        const N = parseInt(readLine().trim(), 10);
        if (N % 2 !== 0) {
            return console.log('Weird')
        } else {
            if (N >= 2 && N <= 5) {
                return console.log('Not Weird')
            } else if (N >= 6 && N <= 20) {
                return console.log('Weird')
            } else if (N > 20) {
                return console.log('Not Weird')
            }
        }
    }



    // Day 4: Class vs. Instance


    function Person(initialAge) {
        // Add some more code to run some checks on initialAge
        if (initialAge < 0) {
            initialAge = 0
            console.log("Age is not valid, setting age to 0.")
        } else {
            age = initialAge
        }

        this.amIOld = function() {
            // Do some computations in here and print out the correct statement to the console
            if (initialAge < 13) {
                console.log("You are young.")
            } else if (initialAge >= 13 && initialAge < 18) {
                console.log("You are a teenager.")
            } else {
                console.log("You are old.")
            }


        };
        this.yearPasses = function() {
            // Increment the age of the person in here

            initialAge += 1
        };
    }