



# class Student(object):
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
#         for student in self.students:
#             print(f'{student.firstName} {student.lastName} {student.campus}')


# dc = Campus()

# dc.addStudent('Adam', 'MacKinnon', 'Atlanta')
# dc.addStudent('Kanny', 'Mohamad', 'Houston')
# dc.addStudent('kim', 'Long', 'Atlanta')

# dc.showCurrentStudents()


class AccountHolder:
    def __init__(self, firstName, accountType, status, balance):
        self.firstName = firstName
        self.accountType = accountType
        self.status = status
        self.balance = balance


class Bank:
    def __init__(self, company, address):
        self.company = company
        self.address = address
        self.accounts = []
    def newAccount(self, firstName, accountType, status, balance):
        openAccount = AccountHolder(firstName, accountType, status, balance)
        self.accounts.append(openAccount)
        
    def showAccounts(self):
        for account in self.accounts:
            print(f'{account.firstName}, {account.accountType}, {account.status}, {account.balance}')
    def showBalance(self):
        for account in self.accounts:
            balance += newAccount
            print(f'{account.firstName}, {account.balance}')

wf = Bank('Wells Fargo', '123 Sesame street')

wf.newAccount('Adam', 'checking', 'OK', 100)
wf.newAccount('Jordan', 'savings', 'BAD', 25)
wf.newAccount('Micah', 'investment', 'OK', 500)


wf.showAccounts()
