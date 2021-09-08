class Deep
def initialize
@inst_1 = "GeeksforGeeks"
@inst_2 = "Sudo Placement"
end
def display
puts "Value of First instance variable is: #{@inst_1}"
puts "Value of Second instance variable is: #{@inst_2}"
end
end
obj1 = Deep.new()
obj1.display()

