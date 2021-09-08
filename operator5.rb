class Array_operators
attr_accessor:arr
def initialize(*arr)
@arr=arr
end 
def [](x)
@arr[x]
end
def []=(x, value)
@arr[x] = value
end
def <<(x)
@arr << x
return ('[0,3,9,27,81]')
end
end
a=Array_operators.new(0,3,9,27,81)
puts a[4]
a[5]=51
puts a<<41
puts a[5]
puts a[6]

