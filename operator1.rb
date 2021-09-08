class Comparable_operator
include Comparable
attr_accessor:name
def initialize(name)
@name=name
end 
def<=>(obj)
return self.name<=>obj.name
end 
end
a=Comparable_operator.new("Geeks for Geeks")
b=Comparable_operator.new("operator overloading")
puts a<=>b
