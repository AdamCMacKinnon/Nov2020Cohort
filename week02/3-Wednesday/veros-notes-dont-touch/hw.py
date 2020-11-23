

# def word_count(paragraph):
    
#     word_freq = {}
    
#     paragraphList = paragraph.lower().split(' ')
    
#     for word in paragraphList:
#         if word not in word_freq:
#             word_freq[word] = 1
#         else:
#             word_freq[word] += 1
#     return word_freq


# val = (input('Enter paragraph here: '))
# print(word_count(val))

# Global variable
phoneBook = {}


while True :
    choice = input("""
           1. 
           2. 
           3. 
           4. 
           5. 
           
           """)
    
    if choice == "1":
        name = input('please enter a name')
        # entry = phoneBook.get(name) # phoneBook[name]
        # print(entry)
        isFound = name in phoneBook
        
        if(isFound):
            print(name, phoneBook[name])
        else:
            print('name not found')
        
         
    elif choice == "2":
        newName = input('enter a name')
        newPhone = input('enter a number')
        
        phoneBook[newName] = newPhone
        
        print(f'new entry was entered {newName} {newPhone}')
        
    elif choice == "3":
        delContact = input("who you like delete?")
        
        isFound = delContact in phoneBook
        
        if isFound:
            del phoneBook[delContact]
        else:
            print('name not found')
        
        print(f'{delContact} is no longer in our dictionary')
    elif choice == "4":
        for name, phoneNumber in phoneBook.items():
            print(f'{name} {phoneNumber}')
            
        
    elif choice == "5":
        break
    
        


