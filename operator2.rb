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
puts "Geeks for Geeks"<=>"operator overloading"
