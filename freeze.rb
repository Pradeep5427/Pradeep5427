class Addition
def initialize(x,y)
@a,@b=x,y
end
def getA
@a
end
def getB
@b
end
def setA=(value)
@a=value
end
def setB=(value)
@b=value
end 
end
add=Addition.new(10,20)
add.freeze
if(add.frozen?)
puts"Addition object is frozen object"
else
puts"Addition object is normal object"
end
add.setA=30
add.setB=50
add.getA()
add.getB()
puts"A is :#{add.getA()}"
puts"B is :#{add.getB()}"
