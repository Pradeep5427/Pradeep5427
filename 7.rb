$global_variable1 = "GFG"
class Author
def instance_method
puts "global vars can be used everywhere. see?#{$global_variable1}, #{$another_global_var}"
end 
def self.class_method
$another_global_var = "welcome to Theni"
puts "global vars can be used everywhere. see? #{$global_variable1}"
end 
end   
Author.class_method
Author = Author.new
Author.instance_method 

