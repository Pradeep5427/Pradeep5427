class GeeksforGeeks
def geeks_1
puts "public method geeks_1 is called"
end
public
def geeks_2
puts "public method geeks_2 is called"
end
def geeks_3
puts "public method geeks_3 is called"
geeks_1
self.geeks_1
end		
end
obj = GeeksforGeeks.new
obj.geeks_1
obj.geeks_2
obj.geeks_3

