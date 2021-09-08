class Tester 
attr_accessor:num
def initialize(num)
@num=num
end
def+(obj)
return self.num+obj.num
end 
def*(obj)
return self.num*obj.num
end
def**(obj)
return self.num**obj.num
end 
end 
a=Tester.new(5)
b=Tester.new(4)
puts a+3
puts a*3
puts a**3
