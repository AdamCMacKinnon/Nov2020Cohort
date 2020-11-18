# # 1. Create a dictionary called zodiac with the following inforation.
# # Each key is the name of the zodiac


# # Aries - The Warrior
# # Taurus - The Builder
# # Gemini - The Messenger
# # Cancer - The Mother
# # Leo - The King
# # Virgo -The Analyst
# # Libra - The Judge
# # Scorpio - The Magician
# # Sagittarius - the Gypsy
# # Capricorn - the Father
# # Aquarius - The Thinker
# # Pisces - TheMystic

# zodiac = {
#     'Aries' : 'The Warrior',
#     'Taurus' : 'The Builder',
#     'Gemini' : 'The Messenger',
#     'Cancer' : 'The Mother',
#     'Leo' : 'The King',
#     'Virgo' : 'The Analyst',
#     'Libra' : 'The Judge',
#     'Scorpio' : 'The Magician',
#     'Sagittarius' : 'The Gypsy',
#     'Capricorn' : 'The Father',
#     'Aquarius' : 'The Thinker',
#     'Pices' : 'The Mystic'
# }

# sign = zodiac['Capricorn']

# print(sign)

# 1a. Retrieve information about your zodiac from the zodiac dictionary

# 2. Given the following dictionary

# phonebook_dict = {
#     'Alice': '703-493-1834',
#     'Bob': '857-384-1234',
#     'Elizabeth': '484-584-2923'
# }




# # 2a. Print Elizabeth's phone number
# liz = phonebook_dict['Elizabeth']
# print(liz)
# # 2b. Add a entry to the dictionary: Kareem's number is 938-489-1234.
# phonebook_dict["Kareem"] = "938-489-1234"
# print(phonebook_dict)
# # 2c. Delete Alice's phone entry.
# del(phonebook_dict)['Alice']
# print(phonebook_dict)
# # 2d. Change Bob's phone number to '968-345-2345'.
# phonebook_dict['Bob'] = '968-489-1234'
# print(phonebook_dict)
# # 2e. Print all the phone entries.
# keys = phonebook_dict.keys()
# values = phonebook_dict.values()

# print(keys)
# print(values)

# 3. Nested dictionaries

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
# 3a. Write a python expression that gets the email address of Ramit.
# email = ramit['email']
# print(email)
# 3b. Write a python expression that gets the first of Ramit's interests.
# interest = ramit['interests'][0]
# print(interest)
# 3c. Write a python expression that gets the email address of Jasmine.
# jemail = ramit['friends'][0]['email']
# print(jemail)
# 3d. Write a python expression that gets the second of Jan's two interests.
# janint = ramit['friends'][1]['interests'][1]
# print(janint)


# 4. Letter Summary
# Write a letter_histogram function that takes a word as its input,
# and returns a dictionary containing the tally of how many times
# each letter in the alphabet was used in the word. For example:

# >>>letter_histogram('banana')
# {'a': 3, 'b': 1, 'n': 2}

# def histogram(word): ## don't forget you can call a dictionary {} like a list [] (line 111 is where I messed up)
#     count = {}
#     for x in word:
#         if x not in count:
#             count[x] = 1
#         else:
#             count[x] +=1
#     return count


# result = histogram('banana')

# print(result)

# Word Summary
# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:

# sentence = 'to be or not to be'

# def wordHistogram(sentence):
#     phrase = {}
#     splitsentence = sentence.split(' ') 
#     for words in splitsentence:
#         if words not in phrase:
#             phrase[words] = 1
#         else:
#             phrase[words] += 1
#     return phrase


# print(wordHistogram(sentence))

# def histogramTally(stringset):
#     stringset = 'to be or not to be do be do be do'
#     phrase = {}
#     stringsetSplit = stringset.split(' ')
#     for words in stringsetSplit:
#         if words not in stringsetSplit:    
#             phrase[words] = 1
#         else:
#             phrase[words] += 1
#     return phraseSort = phrase.sort(words)


