from textwrap import dedent
d = {
    "Levi": "832-291-7066",
    "Tracy": "541-990-0760",
    "Skittles": "666-666-6666"
}

def phonebook(d):
    
    print("Electronic Phone Book")
    print("=" * 21)
    print(dedent("""
    1. Look up an entry
    2. Set an entry
    3. Delete an entry
    4. List all entrys
    5. Quit
    """))
    choice = input("What do you want to do (1-5)? ")

    if choice == "1":
        name = input("Name: ")
        if name in d:
            print(d[name])
        else:
            print("{} not found".format(name))
        input("")
        phonebook(d)
    elif choice == "2":
        name = input("Name: ")
        number = input("Number: ")
        d[name] = number
        input("Entry stored for {}".format(name))
        phonebook(d)
    elif choice == "3":
        name = input("Name: ")
        del d[name]
        input("Deleted entry for {}".format(name))
        phonebook(d)
    elif choice == "4":
        for key in d:
            print("Found entry for {}: {}".format(key, d[key]))
        input("")
        phonebook(d)
    elif choice == "5":
        print("Bye!")
    else:
        print("Please enter a valid command")
        phonebook(d)


phonebook(d)
