# # CRUD = CREATE READ UPDATE DELETE

# ## list = [2, 6, 7, 9]
# ## dictionary = {key:value}
# ##          think of it as "Word: Definition"


# # C = CREATE
# my_dictionary = {
#     "firstName" : "Adam",
#     "lastName" : "MacKinnon",
#     "age": 34,
#     "accountBalance" : {
#         "savings": 4,
#         "checking": [45,67]
#     },
#     "city": ["Atlanta", "Tampa", "Houston"],
#     False: "Tampa"
# }



# #result = my_dictionary[2020]

# print(result)
# # name = my_dictionary["firstName"]

# name = my_dictionary.get("middlename")

# # print(name)

# # R = READ
# #get() method = ability to get data from dictionary where we may not know the key.

# # isValid = 'middlename' in my_dictionary ## IN operator allows us to test dictionary and see if key is valid

# # print(isValid)

# # # U = UPDATE
# # my_dictionary['firstName'] = 'Jacob'

# # print(my_dictionary)

# #keys() = gets all keys of a dictionary
# #valudes() = gets all values of dictionary
# #set equal to value, will return as an array.

# # keys = my_dictionary.keys()
# # values = my_dictionary.values()
# # print(keys)
# # print(values)

# # # D = DELETE

# # #del() = delete 

# # print(my_dictionary)
# # del my_dictionary['lastName']

# # print(my_dictionary)

# # ## ADD TO DICTIONARY
# # my_dictionary['middleName'] = 'Corey'

# # print(my_dictionary)

# # items = my_dictionary.items()
# # print(items)

# # #USING FOR LOOPS TO ACCESS DATA IN DICTIONARIES

# # for k, v in my_dictionary.items():

# #     print(k)
# #     print(v)

# #NESTING

contact = [
    {
        'first_name': 'Phillip',
        'last_name': 'Guo',
        'email': 'phillip.guo@gmail.com',
        'phone':{
            'work':'837-494-3948',
            'cell': '234-897-4933'
        }
    },
    {
        'first_name': 'Mark',
        'last_name': 'Guzdial',
        'email': 'mark.guzdial@gatech.edu',
        'phone':{
            'work':'484-569-3466',
            'cell': '493-485-9845'
        }
    }
]

# result = contact[1] # retrieves all of index 1 (MArk's information)
# print(result)

result = contact[1]["phone"] #PRints only Index 1's Phone Number
print(result)
