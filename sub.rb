class Deep
def super_method
puts"This is Superclass method"
end
end
class Ruby<Deep
def super_method
puts"Override by Subclass"
end
end
obj=Ruby.new
obj.super_method
