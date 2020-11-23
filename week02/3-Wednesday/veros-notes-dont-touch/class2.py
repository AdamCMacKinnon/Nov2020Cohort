




# class Button:
    
#     FontWeight = 'bold'
#     FontColor = 'red'
    
#     def __init__(self, color):
#         self.count = 0
#         self.color = color

#     @classmethod
#     def popUp(cls):
#         print('do you need some help?')
        
#     def click(self):
#         self.count += 1
        
#         if(self.count > 2):
#             Button.popUp()
#             self.count = 0
    
    


# navButton = Button('green')
# helpButton = Button('yellow')

# print(navButton.FontWeight)
# print(helpButton.FontWeight)

# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")


# navButton.click()
# navButton.click()

# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")

# navButton.click()

# helpButton.click()
# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")


# class Test:
#     def __init__(self):
#         self.__a = 'a'
#         self._b = 'b'  #semi private
    
    
#     def _privateMethod(self):
        
#         print(self.__a)
        
    

# firstTest = Test()

# print(firstTest._privateMethod())


# class GoogleMapsAPI:
    
#     def __init__(self, address1, address2):

#         self.address1 = address1
#         self.address2 = address2
     
#     def Map(self):
#         pass 
     
#    def determineLat(self):
#         pass 
    
#     def determineLong(self):
#         pass
        
# map = GoogleMapsAPI("123 my street", 'some other streeet')  

# map.Map
# map.determineLat    

# "hello"

# # sample = "hello"
# # sample.
class OurString(str):
    def __init__(self, word):
        self.word = word
        #super(OurString, self).__init__(word)
        
    def reverse(self):
        
        revString = ''
        
        for char in self.word:
            revString = char + revString  #olleh
            
        return revString
    
myString = OurString('hello')

print(myString.capitalize())

print(myString.reverse())

# class Car:
#     def __init__(self, make, model, color):
#         self.make = make 
#         self.model = model 
#         self.color = color
    
#     def carDetails(self):
        
#         print("Here are the details of this car")
        

# class Hybrid(Car):
    
#     def __init__(self, make, model, color):
#         super(Hybrid, self).__init__(make, model, color) 
    
#     def carType(self):
#         print("I am a hybrid car")
        
#     def carDetails(self):
#         print('this is a hybrid instance of carDetails')
#         super(Hybrid, self).carDetails()
        

# class Electric(Car):
    
#     def carType(self):
#         print("I am an electric car")

# prius = Hybrid("toyota", "prius", "lime green")

# tesla = Electric("tesla", "model-s", "marble")

# print(prius.make)
# prius.carType()
# prius.carDetails()


# print(tesla.make)
# tesla.carType()
# tesla.carDetails()

