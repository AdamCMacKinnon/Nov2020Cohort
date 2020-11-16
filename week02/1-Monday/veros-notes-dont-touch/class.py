
# a = 5

# b = a

# b = 9


# globalArr = [4, 6, 8, 9, 0, 8]

# a = 4

# def someFunction(arr):
#     arr[0] = 123456
    
#     # var = 99
#     # print(arr)
#     return ""

# print(globalArr)

# someFunction(globalArr)

# print(globalArr)

# print(a)  #4

# someFunction(a)  # val

# print(a) #4


# arr = [0, 3, 5, 6]    #&145678


# someFunction(&145678)

# def funA():
#     return 0 


# def funB():
#     result = funA()  # 0
#     print("")
#     return 
    


# funBReturn = funB()  # None

# def multiple(a, b, c):
    
#     return a * a, b * b, c * c


# var1, var2, var3 = multiple(c=8, a=5, b=2)


# print(var1, var2, var3)

# def square(side):
    
#     if side == 0:
#         return None
    
#     return side / (2* side)

# result = square(0)

# print(result)

# import random


# def getAnswer(answerNumber):
#     if answerNumber == 1:
#         return 'It is certain'
#     elif answerNumber == 2:
#         return 'It is decidedly so'
#     elif answerNumber == 3:
#         return 'Yes'
#     elif answerNumber == 4:
#         return 'Reply hazy try again'
#     elif answerNumber == 5:
#         return 'Ask again later'
#     elif answerNumber == 6:
#         return 'Concentrate and ask again'
#     elif answerNumber == 7:
#         return 'My reply is no'
#     elif answerNumber == 8:
#         return 'Outlook not so good'
#     elif answerNumber == 9:
#         return 'Very doubtful'

# r = random.randint(1, 9)

# fortune = getAnswer(r)

# print(r)
# print(fortune)

#random.randint(1, 9)



# GlobalA = 5

# spam = "global spam"

# def someFunction(a):
#     localA = 5  #local scoped
#     print(a)  #print≈
#     print(GlobalA)
    
#     global spam
#     spam = "local spam"
#     # print(spam)
    
    
# if True:
#     print('hello world')
    
# someFunction(5)  #print(localA)
# someFunction(4)
# someFunction(5)

# # print(localA)

# print(spam)
# print('back in global space')


TAX_RATE = .09  # 9 percent tax
COST_PER_SMALL_WIDGET = 5.00
COST_PER_LARGE_WIDGET = 8.00

def calculateCost(nSmallWidgets, nLargeWidgets):
    subTotal = (nSmallWidgets * COST_PER_SMALL_WIDGET) + (nLargeWidgets * COST_PER_LARGE_WIDGET)
    taxAmount = subTotal * TAX_RATE
    totalCost = subTotal + taxAmount
    return totalCost


total1 = calculateCost(4, 8)  #  4 small and 8 large widgets
print('Total for first order is', total1)
