class Tester 
attr_accessor:num
def initialize(num)
@num=num
end
def+(obj)
return @num+obj
end 
def*(obj)
return @num*obj
end
def**(obj)
return @num**obj
end 
end 
a=Tester.new(5)
puts a+3
puts a*3
puts a**3
