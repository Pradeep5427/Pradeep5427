class Deep 
def initialize
puts "This is Superclass"
end 
def super_method
puts"Method of superclass"
end 
end
class Sudo_placement<Deep
def initialize
puts"This is subclass"
end
end
Deep.new
sub_obj=Sudo_placement.new
sub_obj.super_method
