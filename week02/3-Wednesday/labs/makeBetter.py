

phoneBook = {
    "Levi": "832-291-7066",
    "Tracy": "541-990-0760",
    "Skittles": "666-666-6666"
}

def lookUp(name):
    if name in phoneBook:
        # print(phoneBook[name])
        msg = phoneBook[name]
    else:
        # print("did not find", name)
        msg = (f'did not find {name}')
    return msg
    
def addEntry(name,number):
    if name not in phoneBook.items():
        phoneBook.update({name : number})
        msg = (f'entry for {name} added!')
    else:
        msg = (f'{name} already in phone book')
    return msg
def delEntry(name):
    del phoneBook[name]
    msg = (f'Entry for {name} was deleted.')
    return msg


while True:

    choice = input(
    """
    1. Look up an entry
    2. Set an entry
    3. Delete an entry
    4. List all entrys
    5. Quit
    "What do you want to do (1-5)? 
    """)

    if choice == "1":
        name = input("Name: ")
        print(lookUp(name))
    elif choice == "2":
        name = input("Name: ")
        number = input("Number: ")
        print(addEntry(name,number))    
    elif choice == "3":
        name = input("Name: ")
        print(delEntry(name))
    elif choice == "4":
        for key in d:
            print("Found entry for {}: {}".format(key, d[key]))
        input("")
    elif choice == "5":
        print("Bye!")
        break
    else:
        print("Please enter a valid command")

