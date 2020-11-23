
# def someFunction(name):
    

# class Greeting:
#     def __init__(self, firstName, lastName, age, city):  #constructor
#         self.firstName  = firstName 
#         self.lastName = lastName 
#         self.age = age 
#         self.city = city
          
#     # functions
#     def say_hello(self):
#         print(f'hello world {self.firstName} {self.lastName}')


# greet = Greeting("Veronica", "Lino", 21, "Houston")  # greet is an object  .Greeting
# # &43567
# greet.say_hello()

# greet1 = Greeting("Mathhew", "Roberts", 21, "Atlanta")
# # &763ww
# greet1.say_hello()

# greet.say_hello()

# greet1 = Greeting()  # greet1 is an object
# greet1.say_hello()

# my_string = "Atlanta"
# my_string = str("Atlanta")


# count = 0
# count1 = 0

# def incrementCount():
#     global count
#     count = count + 1
#     return  count

# def incrementCount1():
#     global count1
#     count1 = count1 + 1
#     return  count1

# incrementCount()

# print(count)

# incrementCount()

# print(count)
# incrementCount()

# print(count)
# incrementCount()

# print(count)


# class Counter:
#     def __init__(self):
#         self.count = 0
        
#     def incrementCount(self):
#         self.count +=1
#         return self.count
        

# count1 = Counter()

# print("count 1 val: ", count1.incrementCount())
# print("count 1 val: ", count1.incrementCount())
# print("count 1 val: ", count1.incrementCount())
# print("count 1 val: ", count1.incrementCount())
# print("count 1 val: ",count1.incrementCount())

# count2 = Counter()

# print("count 2 val: ", count2.incrementCount())
# print("count 2 val: ", count2.incrementCount())


# print("count 1 val: ", count1.incrementCount())


class Person:
    def __init__(self, firstName, lastName, email):
        
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.friends = []
    
    def print_contact_info(self):
        for friend in self.friends:
            print(f'{friend.firstName} {friend.lastName}  {friend.email}')
    
    def add_friend(self, friendObj):
        self.friends.append(friendObj)
        
        
jordan = Person("Jordan", "Rivers", "Jordan@dc.com")

michael = Person("Michel", "Cook", "Michael@dc.com")
micah = Person("Micah", "Peterson", "Micah@dc.com")


# jordan.friends.append(michael)
# jordan.friends.append(micah)

jordan.add_friend(michael)
jordan.add_friend(micah)

jordan.print_contact_info()

print(len(jordan.friends))
   
