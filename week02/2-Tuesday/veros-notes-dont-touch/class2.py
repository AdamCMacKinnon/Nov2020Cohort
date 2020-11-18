
# file_handle = open('hello.txt', 'w')

# file_handle.write('hello world\nthis is a new line')

# file_handle.close()


file_handle = open('declaration.txt', 'r')

contents = file_handle.read()

file_handle.close()


print(contents)