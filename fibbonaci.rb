# Ruby program for calculating the Nth Fibonacci number.
def Fibonacci(number)

# Base case : when N is less than 2.
if number < 2
	number
else

	# Recursive call : sum of last two Fibonacci's.
	Fibonacci(number - 1) + Fibonacci(number - 2)
end
end

Fibonacci(3)

