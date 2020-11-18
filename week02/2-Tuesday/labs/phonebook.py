
import pickle


phonebook = {
    'Adam' : '302-983-4512',
    'Megan' : '484-888-3469',
    'AJ' : '770-427-2491'
}


def searchEntry(name):
    for x in name:
        if x == phonebook.get(name):
            print('Valid entry!')
        else:
            print('not valid')



menu = int(input(

    """
    ELECTRONIC PHONE BOOK
    =====================
    1. Look up an Entry
    2. Set an Entry
    3. Delete an Entry
    4. List all Entries
    5. Quit
    What would you like to do (1-5?)
    """
))




while menu <= 5:
    if (menu == 1):
        name = input('Name to look up? ')
        searchEntry(name)
    elif (menu == 2):
        newName = input('Name to add? ')
        newNum = input('Number to add? ')
    elif (menu == 3):
        delEntry = input('Entry to delete? ')
    elif (menu == 4):
        result = phonebook
        print(result)
        menu += 1
    elif (menu == 5):
        print('Goodbye!')
        break
else:
    print('Enter a valid choice!')

























