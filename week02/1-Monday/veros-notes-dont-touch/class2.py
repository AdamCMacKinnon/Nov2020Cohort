

# def callMe():
#     if False:
#         pass # base
#     else:
#         callMe()


# callMe()


# for num in range(1, 11):
#     print(num)
    


def loopNTimes(n):
    if (n <=1):
        return 'complete'
    
    loopNTimes(n-1)

result = loopNTimes(5)

print(result)
