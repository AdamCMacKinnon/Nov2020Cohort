# Matrix Addition 
# list1[1][0] 2 [1,3, 5, 6]  4
# list2[1][0] 1 
# list1 = [[1,3,5,6], [2,4,4,3]]  # [[], []]  2  
# list2 = [[5,2,1,0], [1,0,3,5]]
# add_list = []    
# for row in range(0, len(list1)):
#     temp = [] # [3,4, 7, 8 ]
#     for column in range(0, len(list1[0])):
#         temp.append(list1[row][column] + list2[row][column])
#     add_list.append(temp)
# print(add_list)

# twoDimList1 = [ [1, 3], [2, 4] ]
# twoDimList2 = [ [5, 2], [1, 0] ]
# result = [ [0, 0], [0, 0] ]  #[[6, 5], [3, 4]]

# for outterIndex in range(len(twoDimList1)):
#     for innerIndex in range(len(twoDimList1[outterIndex])):
#         result[outterIndex][innerIndex] = twoDimList1[outterIndex][innerIndex] + twoDimList2[outterIndex][innerIndex]
# print(result)


# result[1][0] = 6


dblvwl = input("Give me a word to double its long vowels: ")
result = dblvwl

for i in range(0, len(dblvwl) - 1):
    if dblvwl[i] == dblvwl[i+1] :
        result = dblvwl[0:i] + dblvwl[i]*3 + dblvwl[i:]
        break

print(result) 




