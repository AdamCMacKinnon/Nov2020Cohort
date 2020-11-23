

class Person:
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name, self.name))


# sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
# jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')

# sonny.greet(jordan)
# jordan.greet(sonny)

# print(f'to contact Sonny, use {sonny.email} or {sonny.phone}')
# print(f'to contact Jordan, use {jordan.email} or {jordan.phone}')


# class Button:
#     fontWeight = 'bold' ## global data variables.  will affect any other items in this class.
#     fontColor = 'red'
#     def __init__(self):
#         self.count = 0
#     @classmethod
#     def popUp(cls):
#         print('join our newsletter!')
#     def click(self):
#         self.count += 1
#         if (self.count > 2):
#             cls.popUp()
#             self.count = 0
    


# navButton = Button()
# helpButton = Button()

# print(f'nav {navButton.count}')
# print(f'nav {helpButton.count}')

# navButton.click()
# navButton.click()

# print(f'nav {navButton.count}')
# print(f'nav {helpButton.count}')

# navButton.click()

# print(f'nav {navButton.count}')
# print(f'nav {helpButton.count}')

# class Test:
#     def __init__(self):
#         self.__a = 'a' ## should be considered private.  "Mangles" code. Will return error.  Can be accessed IN class, not globally
#         self._b = 'b' ## Name convention.  Should be considered semi-private to other developers

# firstTest = Test()

# print(firstTest._b) ## will print fine


# class GoogleMaps:
#     def __init__(self, address2, address2):
#         self.address1 = address1
#         self.address2 = address2
#     def determineLat(self): ## made private so it can't be messed up by other developers.
#         pass
#     def determinelong(self):
#         pass
    
# map = GoogleMapsAPI('123 my street', 'some other street')

# 'hello'

# # sample = 'hello'
# # sample.capitalize

# class OurString(str):
#     def reverse(self, word):
#         revString = ''
#         for char in word:
#             revString = char + revString
#         return revString

# myString = OurString('hello')

# print(myString.capitalize())
# print(myString.reverse('hello'))


