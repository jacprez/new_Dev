# exercise 1

greeting = "Hello World"

print((greeting + "\n") * 4)


# exercise 2

print(int(99^3) * int(8))


# exercise 3

name = "Jackie"
age = 23
shoe_size = 9
# info = "What's up? My name is " + name + " and I am " + age + " years old and a size " + shoe_size + " in shoes."
info2 = f"What's up? My name is {name} and I am {age} years old and a size {shoe_size} in shoes."


print(info2)

# exercise 4

computer_brand = "Mac"
print(f"I have a {computer_brand} computer.")


# exercise 5

5 < 3
# false
3 == 3
# True
3 == "3"
# True
"3" > 3
# error
"Hello" == "hello"

# exercise 6


height = input("What's your height?")

if int(height) > 35:
	print("Nice, you can ride the rollercoaster!")
else:
	print("Sorry you are too short!")

# exercise 7

num = input("Give me a number and I will tell you if it is odd or even.")

if int(num) % 2 == 0:
	print(f"{num} is an even number.")
else: 
	print(f"{num} is an odd number.")







