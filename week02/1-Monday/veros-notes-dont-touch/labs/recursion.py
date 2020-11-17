# 1. Write a function called power which accepts a base and an exponent.
# The function should return the power of the base to the exponent.

# power(2, 3) --> 8 
# power(2, 2) --> 4
# power(2, 4) --> 16

# def power(base, exponent):
    
#     if exponent == 0:
#         return 1
     
#     return base * power(base, exponent -1)

# result = power(2, 5)

# print(result)

# power(2, 4)
    # 2 * power(2, 3)
# power(2, 3)
    #  2 * power(2, 3)
# power(2, 2)
    # 2 * power(2, 1)
# power(2, 1)



# 2. Write a function factorial which accepts a number and returns
# the factorial of that number.  A factorial is the product of an
# interger and all the integers below it; eg. , factorial four( 4!) is
# equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

# def factorial(n):
#     pass

# result = factorial(4)  # 24



# 3. Write a function called recursiveRange which accepts a number and adds up all
# the numbers from 0 to the number passed to the function

# 5  = 5 + 4 + 3 + 2 + 1 + 0



# 4. Write a recursive function called reverse which accepts
# a string and returns a new string in reverse


# 5. Write a recursive function called isPalindrome which returns
# true if the string passed to it is a palindrome (reads the same forward and backward).
# Otherwise returns false.


# isPalindrome('awesome') // false
# isPalindrome('foobar') // false
# isPalindrome('tacocat') // true
# isPalindrome('amanaplanacanalpanama') // true
# isPalindrome('amanaplanacanalpandemonium') // false


# 6. Write  function called product ofArray which takes in
# an array of numbers and returns the product of them all

# def product(arr):

#     if len(arr) == 1:
#         return arr[0]
    
#     return arr[0] * product(arr[1:])


# result = product([1,2,3,10])

# print(result)

# 7. Write a recursive function called fib which accepts a number and
# returns the nth number in the Fibonacci Sequence. Recall that the
# Fibonacci Sequence is the Sequence of whole numbers 0, 1, 1, 2, 3, 5, 8, ... which
# starts with 1 and 1, and where ever number
# thereafter is equal to the sum of the previous two numbers.

# f(n) = f(n-1) + f(n-2)
# f(n) = f(a) + f(b) where a = n-1 , b = n-2 


# def fib(n):
    
#     arr = [0, 1]
    
#     for index in range(2, n+1):   #[2, 3, 4, 5]
#         a = arr[index - 1]  # arr[3] 2
#         b = arr[index - 2]  # arr[2] 1
        
#         arr.append(a + b)
    
#     return arr[n]
        
        
    
# result = fib(6)

# print(result)

def fib(n):
    
    if n < 2:
        return n
    
    return fib(n-1) + fib (n - 2)


result = fib(6)

print(result)


