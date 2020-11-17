# def callme():
#     if True:
#         pass #base case that will turn something false
#     else:
#         callme()

# for num in range(1,11):
#     print(num)

def loopNtimes(n):
    if (n <=1):
        return 'complete'
    return loopNtimes(n-1)

