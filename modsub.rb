module Deep	
def first
puts "Welcome "
end
def second
puts "Ruby code"
end	
def third
puts "Topic - module"
end
end
class Ruby
include Deep
def mul
x=45*26
puts x
end
end
obj_class=Ruby.new
obj_class.first
obj_class.second
obj_class.third
obj_class.mul
