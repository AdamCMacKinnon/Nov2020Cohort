
# CRUD 
# myList = [2,       5, 7, 7]

# myList[0] = 99

# myList[1]

# myDictionary = {

#     "firstName": "Veronica",
#     "lastName": "Lino",
#     "age": 21,
#     "accountBalance": {
#         "savings": 3,
#         "checking": [45, 67]
#     },
#     "city": ["Atlanta", "Tampa", "Houston"],
#     False: "Tampa"
# }

# [{}, {}]

# result = myDictionary[2020]
# print(result)

# for k, v in myDictionary.items():
#     print(k)
#     print(v)

# items = myDictionary.items()

# print(items)



# print(myDictionary)

# del myDictionary["lastName"]

# myDictionary["middleName"] = "Celeste"

# print(myDictionary)

# keys = myDictionary.keys()
# values = myDictionary.values()

# print(keys)
# print(values)

# name = myDictionary["middleName"]

# name = myDictionary.get("middleName")
# print(name)

# isValid = "firstName" in myDictionary

# print(isValid)

# myDictionary["firstName"] = "Jacob"

# print(myDictionary)

#[{}, {}]
# contact = [
#     {
#         'first_name': 'Phillip',
#         'last_name': 'Guo',
#         'email': 'phillip.guo@gmail.com',
#         'phone':{
#             'work':'837-494-3948',
#             'cell': '234-897-4933'
#         }
#     },
#     {
#         'first_name': 'Mark',
#         'last_name': 'Guzdial',
#         'email': 'mark.guzdial@gatech.edu',
#         'phone':{
#             'work':'484-569-3466',
#             'cell': '493-485-9845'
#         }
#     }
# ]

# result = contact[1]["phone"]["cell"]

# print(result)

import pickle 


# ramit = {
#     'name': 'Ramit',
#     'email': 'ramit@gmail.com',
#     'interests': ['movies', 'tennis'],
#     'friends': [
#         {
#             'name': 'Jasmine',
#             'email': 'jasmine@yahoo.com',
#             'interests': ['photography', 'tennis']
#         },
#         {
#             'name': 'Jan',
#             'email': 'jan@hotmail.com',
#             'interests': ['movies', 'tv']
#         }
#     ]
# }

# with open('ramit.pickle', 'wb') as fx: 
#     pickle.dump(ramit, fx)
    

with open('ramit.pickle', 'rb') as fh:
    phoneBook = pickle.load(fh)
    
print(phoneBook)






