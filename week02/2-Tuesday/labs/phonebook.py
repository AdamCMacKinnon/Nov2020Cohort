
import pickle


phonebook = {
    'Adam' : '302-983-4512',
    'Megan' : '484-888-3469',
    'AJ' : '770-427-2491'
}


# def searchEntry(name):
#     for x in name:
#         if x == phonebook.get(name):
#             print('Valid entry!')
#         else:
#             print('not valid')



while True:

    menu = input(

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
)

    if (menu == '1'):
        name = input('please enter a name. ')
        # entry = phonebook.get(name)
        # print(entry)
        isFound = name in phonebook
        if(isFound):
            print(f'{name} found!')
        else:
            print('not valid')
    elif (menu == '2'):
        newName = input('Enter a name ')
        newNum = input('Enter a number ')
        phonebook[newName] = newNum
        print(f'entry for {newName} complete!')

    elif (menu == '3'):
        delContact = input('Who are you deleting? ')
        del phonebook[delContact]
        isFound = delContact in phonebook
        if isFound:
            del phonebook[delContact]
        else:
            print('name not found')
        print('The entry was deleted')

    elif (menu == '4'):
        for key,value in phonebook.items():
            print(f'{key}  {value}')
    elif (menu == '5'):
        print('Goodbye!')
        break
else:
    print('Enter a valid choice!')

























