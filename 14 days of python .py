# Day 0: Hello, World.
# Read a full line of input from stdin and save it to our dynamically typed variable, input_string.
input_string = input()

# Print a string literal saying "Hello, World." to stdout.
print('Hello, World.')

# TODO: Write a line of code here that prints the contents of input_string to stdout.



print(input_string)

# Day 1: Data Types

# Declare second integer, double, and String variables.

# Read and save an integer, double, and String to your variables.
input_int =int(input())
input_double =float(input())
intput_string =str(input())
# Print the sum of both integer variables on a new line.
print(i + input_int)
# Print the sum of the double variables on a new line.
print(round(d + input_double,1))
# Concatenate and print the String variables on a new line
# The 's' variable above should be printed first.
print(s + intput_string)

# Day 2: Operators
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'solve' function below.
#
# The function accepts following parameters:
#  1. DOUBLE meal_cost
#  2. INTEGER tip_percent
#  3. INTEGER tax_percent
#

def solve(meal_cost, tip_percent, tax_percent):
    # Write your code here
    tip = tip_percent/100 * meal_cost
    tax = tax_percent/100 * meal_cost
    total = round(meal_cost + tip + tax)
    print(total)

if __name__ == '__main__':
    meal_cost = float(input().strip())

    tip_percent = int(input().strip())

    tax_percent = int(input().strip())

    solve(meal_cost, tip_percent, tax_percent)


# Day 3: Intro to Conditional Statements
#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    N = int(input().strip())
    if N%2!= 0:
        print("Weird")
    else:
        if N>=2 and N<=5:
            print("Not Weird")
        elif N>=6 and N<=20:
            print("Weird")
        elif N>20:
            print("Not Weird")
 
        
# Day 4: Class vs. Instance
class Person:
    def __init__(self,initialAge):
        # Add some more code to run some checks on initialAge
        if initialAge < 0:
            self.age = 0
            print("Age is not valid, setting age to 0.")
        else:
            self.age = initialAge
    def amIOld(self):
        # Do some computations in here and print out the correct statement to the console
        if self.age < 13:
            print("You are young.")
        elif self.age >= 13 and self.age < 18:
            print("You are a teenager.")
        else:
            print("You are old.")
    def yearPasses(self):
        # Increment the age of the person in here
        self.age += 1
        


