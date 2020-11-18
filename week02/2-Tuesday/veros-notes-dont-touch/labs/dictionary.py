# 1. Create a dictionary called zodiac with the following information.
# Each key is the name of the zodiac


# Aries - The Warrior
# Taurus - The Builder
# Gemini - The Messenger
# Cancer - The Mother
# Leo - The King
# Virgo -The Analyst
# Libra - The Judge
# Scorpio - The Magician
# Sagittarius - the Gypsy
# Capricorn - the Father
# Aquarius - The Thinker
# Pisces - TheMystic


# 1a. Retrieve information about your zodiac from the zodiac dictionary

# 2. Given the following dictionary

phonebook_dict = {
    'Alice': '703-493-1834',
    'Bob': '857-384-1234',
    'Elizabeth': '484-584-2923'
}


# phonebook_dict["Kareem"] = "938-489-1234"
# 2a. Print Elizabeth's phone number
# 2b. Add a entry to the dictionary: Kareem's number is 938-489-1234.
# 2c. Delete Alice's phone entry.
# 2d. Change Bob's phone number to '968-345-2345'.
# 2e. Print all the phone entries.


# 3. Nested dictionaries

ramit = {
    'name': 'Ramit',
    'email': 'ramit@gmail.com',
    'interests': ['movies', 'tennis'],
    'friends': [
        {
            'name': 'Jasmine',
            'email': 'jasmine@yahoo.com',
            'interests': ['photography', 'tennis']
        },
        {
            'name': 'Jan',
            'email': 'jan@hotmail.com',
            'interests': ['movies', 'tv']
        }
    ]
}
# 3a. Write a python expression that gets the email address of Ramit.
# 3b. Write a python expression that gets the first of Ramit's interests.
# 3c. Write a python expression that gets the email address of Jasmine.
# 3d. Write a python expression that gets the second of Jan's two interests.


# 4. Letter Summary
# Write a letter_histogram function that takes a word as its input,
# and returns a dictionary containing the tally of how many times
# each letter in the alphabet was used in the word. For example:

# >>>letter_histogram('banana')
# {'a': 3, 'b': 1, 'n': 2}

# def histogram(word):
#     count = {}  # count['a'] = 3  count = {'b': 1, 'a': 3, 'n': 2}
#     for letter in word:
#         if letter not in count:
#             count[letter] = 1
#         else:
#             count[letter] += 1
#     return count


# print(histogram("banana"))

# dc 
# narf


# string = input('Input a word: ')

def histogram(string):
    freq = {} # {'b': 1, 'a': 2, 'n': 1}
    for letter in string: 
        freq[letter] = freq.get(letter, 0) + 1  # freq['a'] = 0 + 1
    return freq


print(histogram('banana'))

# Word Summary
# Write a word_histogram function that takes a paragraph of 
# text as its input, and returns a dictionary containing 
# the tally of how many times each word in the alphabet was 
# used in the text. For example:

# >>> word_histogram('To be or not to be')   ['To', 'be', 'or', 'not', 'to', 'be']

# {'To': 2,
#  'be': 1
#  }
