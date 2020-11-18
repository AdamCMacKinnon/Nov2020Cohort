# file_handle = open('hello.txt', 'w')

# file_handle.write('Hello World!\n this is a new line')

# file_handle.close

# file_handle = open('declaration.txt', 'r')

# contents = file_handle.read()

# file_handle.close()

# print(contents)


import pickle

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

# with open('zodiac.pickle', 'wb') as fx:  
#     pickle.dump(zodiac, fx)

with open('zodiac.pickle', 'rb') as fh:
    zodiac = pickle.load(fh)

print(zodiac)