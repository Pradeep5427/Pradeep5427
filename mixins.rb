module Child1
def a1
puts 'this is child one.'
end
end
module Child2
def a2
puts 'this is child two'
end 
end
module Child3
def a3
puts 'this is child three'
end
end
class Parent
include Child1
include Child2
include Child3
def display
puts 'three modules have included.'
end 
end
object=Parent.new
object.display
object.a1
object.a2
object.a3
