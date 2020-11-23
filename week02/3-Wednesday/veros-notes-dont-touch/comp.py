

# class Student:
#     def __init__(self, firstName, lastName, campus):
#         self.firstName = firstName
#         self.lastName = lastName
#         self.campus = campus

#     def printStudent(self):
#         print(f"{self.firstName} {self.lastName} campus: {self.campus}")


# class Campus:
#     def __init__(self):
#         self.students = []

#     def addStudent(self, firstName, lastName, campus):
#         student = Student(firstName, lastName, campus)
#         self.students.append(student)

#     def showCurrentStudents(self):
#         for studentObj in self.students:
#             print(f'{studentObj.firstName} {studentObj.lastName} {studentObj.campus}')


# dc = Campus()

# dc.addStudent('Kanny', 'Mohommad', 'Houston')
# dc.addStudent('Matthew', 'Chun', 'Seattle')
# dc.addStudent('Kim', 'Long', 'Atlanta')
# dc.addStudent('Joe', 'Stocks', 'Houston')

# dc.showCurrentStudents()

# cedael = Student('Cedael', 'White', 'Atlanta')
# micah = Student('Micah', 'Peterson', 'Houston')
# ian = Student('Ian', 'Haddock', 'Atlanta')


# student = []

# student.append(cedael)


class AccountHolder:
    def __init__(self, fName, accountType, status, balance):
        self.fName = fName
        self.accountType = accountType
        self.status = status
        self.balance = balance
    

class Bank:
    def __init__(self, name, address):
        self.name = name 
        self.address = address 
        self.accounts = []
        
    def open_new_account(self, fName, accountType, status, balance):
        
        newAccount = AccountHolder(fName, accountType, status, balance)
        
        self.accounts.append(newAccount)
        
    def show_account_holder(self):
        pass # name #status # balance
    
    def show_bank_balance(self):
        pass


Hero   health 8  power 4
Goblin health 4    power 2  


Goblin ==> Hero
Hero --> Goblin

Hero ---> Goblin