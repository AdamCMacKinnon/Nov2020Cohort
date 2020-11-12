# Consider a program that determines whether people are tall
# enough to ride a roller coaster


# Given the following code that prompts the user for a
# day number (Remember that the int function converts a numeric string to a number)


# Prompt the user for a day of the week just like
# the previous problem. But this time, print "Go to work" if it's
# a work day and "Sleep in" if it's a weekend day. Example session:


# Prompt the user for a number in degrees Celsius,
# and convert the value to degrees in Fahrenheit and display it to the user.

# Use the following formula:
# F = (C * 9/5) + 32
# age = 25

# if (age ==25):
#     print(age)

# name ='Adam'

# if (name == 'Adam'):
#     print(name)

# print('outside of if statement')

# age = 23
# if (age > 21):
#     print('you are old enough to drink! ')
# elif(age >= 18 and age <= 21):
#     print('you\'re not quite old enough!')
# else:
#     print('what are you doing?  You can\'t drink!')

num =int(input('Select a number. Type exit to stop. '))

if (num % 2 == 0):
     print('this is an even number')
elif (num == str('exit')):
    print('you\'re done!')
else:
     print('this is an odd number')
while num != str('exit'):
    num = input('Pick another number! ')
    num = num.lower()

# count = 0

# while count < 10:
#     count += 1
#     print(f'The count is {count}')
# print('done with count')

# answer = ''
# while answer != 'when':
#     answer = input('Say when! ')
#     answer = answer.lower()

# print('cheese')
