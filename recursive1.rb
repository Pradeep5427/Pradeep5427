def RecursiveSum(arrayofNumbers)
if arrayofNumbers?
return 0
else
Sum = arrayofNumbers.pop
return Sum + RecursiveSum(arrayofNumbers)
end
end
RecursiveSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

