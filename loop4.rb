def lessNumber(num)
throw :numberError if num < 10
puts "Number is Greater than 10!"
end
catch :numberError do
lessNumber(11)
lessNumber(78)
lessNumber(7)
lessNumber(4)
end
puts "Outside Catch Block"

