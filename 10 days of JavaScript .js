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




    // Day 1: Arithmetic Operators



    /**
     *   Calculate the area of a rectangle.
     *
     *   length: The length of the rectangle.
     *   width: The width of the rectangle.
     *   
     *	Return a number denoting the rectangle's area.
     **/
    function getArea(length, width) {
        let area;
        // Write your code here
        area = length * width
        return area;
    }

    /**
     *   Calculate the perimeter of a rectangle.
     *	
     *	length: The length of the rectangle.
     *   width: The width of the rectangle.
     *   
     *	Return a number denoting the perimeter of a rectangle.
     **/
    function getPerimeter(length, width) {
        let perimeter;
        // Write your code here
        perimeter = 2 * (length + width)
        return perimeter;
    }


    // Day 1: Functions

    /*
     * Create the function factorial here
     */
    function factorial(n) {
        if (n == 1)
            return 1

        return n * factorial(n - 1)
    }

    // Day 1: Let and Const
    function main() {
        // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
        const PI = Math.PI
        let radius = Number(readLine());
        // Print the area of the circle:
        console.log(PI * Math.pow(radius, 2));
        // Print the perimeter of the circle:
        console.log(2 * PI * radius);







        // Day 2: Conditional Statements: If-Else
        function getGrade(score) {
            let grade;
            // Write your code here
            if (score > 25) grade = 'A';
            else if (score > 20) grade = 'B';
            else if (score > 15) grade = 'C';
            else if (score > 10) grade = 'D';
            else if (score > 5) grade = 'E';
            else grade = 'F';
            return grade;

        }
        // Day 2: Conditional Statements: Switch


        function getLetter(s) {
            let letter;
            // Write your code here
            let char = s.charAt(0)
            switch (char) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    letter = 'A';
                    break;
                case 'b':
                case 'c':
                case 'd':
                case 'f':
                case 'g':
                    letter = 'B';
                    break;

                case 'h':
                case 'j':
                case 'k':
                case 'l':
                case 'm':
                    letter = 'C'
                    break;
                case 'n':
                case 'p':
                case 'q':
                case 'r':
                case 's':
                case 't':
                case 'v':
                case 'w':
                case 'x':
                case 'y':
                case 'z':
                    letter = 'D'
                    break;
            }

            return letter;
        }


        // Day 2: Loops


        /*
         * Complete the vowelsAndConsonants function.
         * Print your output using 'console.log()'.
         */
        function vowelsAndConsonants(s) {
            //vowels
            for (let ind = 0; ind < s.length; ind++) {
                if (s.charAt(ind).match(/[aeiou]/)) {
                    console.log(s.charAt(ind));
                }
            }
            //consonants
            for (let ind = 0; ind < s.length; ind++) {
                if (s.charAt(ind).match(/[^aeiou]/)) {
                    console.log(s.charAt(ind));
                }
            }
        }



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

        // Day 3: Try, Catch, and Finally


        /*
         * Complete the reverseString function
         * Use console.log() to print to stdout.
         */
        function reverseString(s) {
            try {
                s = s.split("").reverse().join("");
            } catch (exception) {
                console.log(exception.message);
            } finally {
                console.log(s);

            }

        }



        // Day 3: Throw



        /*
         * Complete the isPositive function.
         * If 'a' is positive, return "YES".
         * If 'a' is 0, throw an Error with the message "Zero Error"
         * If 'a' is negative, throw an Error with the message "Negative Error"
         */
        function isPositive(a) {
            if (a > 0) return "YES";
            else if (a == 0) throw new Error("Zero Error");
            else throw new Error("Negative Error");

        }


        // Day 4: Create a Rectangle Object



        /*
         * Complete the Rectangle function
         */
        function Rectangle(a, b) {
            return {
                length: a,
                width: b,
                perimeter: 2 * (a + b),
                area: a * b
            }

        }
        // Day 4: Count Objects


        /*
         * Return a count of the total number of objects 'o' satisfying o.x == o.y.
         * 
         * Parameter(s):
         * objects: an array of objects with integer properties 'x' and 'y'
         */
        function getCount(objects) {
            let tally = 0;
            for (let num = 0; num < objects.length; num++) {
                if (objects[num].x == objects[num].y) {
                    tally++;
                }
            }
            return tally;
        }