def RecursiveFactorial(number)
if (0..1).include?(number)
return 1
end
number*RecursiveFactorial(number -1)
end
RecursiveFactorial(6)

