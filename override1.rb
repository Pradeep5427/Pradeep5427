class Box
def initialize(width, height)
@w, @h = width, height
end
def getArea
@w * @h
end
end
class BigBox < Box
def getArea
@area = @w * @h
puts "Big box area is : #@area"
end
end
box = BigBox.new(15, 50)
box.getArea()

