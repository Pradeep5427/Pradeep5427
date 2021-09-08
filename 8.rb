# Ruby Program to understand global variable
$global_variable1 = "GFG"

# Defining Class
class Author
def instance_method
	puts "global vars can be used everywhere. See? #{$global_variable1}, #{$another_global_var}"
end
def self.class_method
	$another_global_var = "Welcome to GeeksForGeeks"
	puts "global vars can be used everywhere. See? #{$global_variable1}"
end
end

Author.class_method
# "global vars can be used everywhere. See? GFG"
# => "global vars can be used everywhere. See? GFG"

Author = Author.new
Author.instance_method
# "global vars can be used everywhere. See?
# GFG, Welcome to GeeksForGeeks"
# => "global vars can be used everywhere. See?
# GFG, Welcome to GeeksForGeeks"

