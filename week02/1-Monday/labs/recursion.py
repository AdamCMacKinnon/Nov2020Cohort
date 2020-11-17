# 1. Write a function called power which accepts a base and an exponent.
# The function should return the power of the base to the exponent.

# def power(base, exponent):
#     if exponent == 0: 
#         return 1
#     return base * power(base, exponent -1)

# power (2,4)
    # 2 * power(2,3)
# power (2,3)
    # 2 * power (2,2)

## etc.. down to zero, which returns back to 1



# 2. Write a function factorial which accepts a number and returns
# the factorial of that number.  A factorial is the product of an
# interger and all the integers below it; eg. , factorial four( 4!) is
# equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

# def factorial(number):
#     if number == 0:
#         return 1
#     return number * factorial(number -1)

# result = factorial(4)

# print(result)


# 3. Write a function called recursiveRange which accepts a number and adds up all
# the numbers from 0 to the number passed to the function

# def recursiveRange(number):
#     if number == 0:
#         return number
#     return number + recursiveRange(number - 1)

# summary = recursiveRange(4)

# print(summary)

# 4. Write a recursive function called reverse which accepts
# a string and returns a new string in reverse

# def reverse(input_string):
#     if len(input_string) == 1:
#         return input_string
#     return input_string[-1] + reverse(input_string[:-1])
# print(reverse("12345"))

# 5. Write a recursive function called isPalindrome which returns
# true if the string passed to it is a palindrome (reads the same forward and backward).
# Otherwise returns false.

# def isPalindrome(string1):
#     if len(string1) <= 1:
#         return True
#     if string1[0] == string1[-1] and isPalindrome(string1[1:-1]):
#         return True
#     return False

# print(isPalindrome('anna'))


# isPalindrome('awesome') // false
# isPalindrome('foobar') // false
# isPalindrome('tacocat') // true
# isPalindrome('amanaplanacanalpanama') // true
# isPalindrome('amanaplanacanalpandemonium') // false


# 6. Write  function called product ofArray which takes in
# an array of numbers and returns the product of them all

# def productOfArray(arr):
#     if len(arr == 1):
#         return arr[0]
#     return arr[0] * productOfArray(arr[1: ])

# result = productOfArray([1,2,3])

# print(result)
# 7. Write a recursive function called fib which accepts a number and
# returns the nth number in teh Fibonacci Sequence. Recall that the
# Fibonacci Sequence is the Sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which
# starts with 1 and 1, and where ever number
# thereafter is equal to the sum of the previous two numbers.


def fib(n):
    
    arr = [0,1]
    for index in range(2, n+1):
        a = arr[index - 1]
        b = arr[index - 2]

        arr.append(a + b)
    return arr[n]

result = fib(6)

print(result)

fib(5)