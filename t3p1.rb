class Deep
def getAge(n)
@geekAge=n
end
def decrementAge()
@geekAge -=2
end
def displayDetails()
puts "Deep age is #@geekAge"
end
end
obj=Deep.new
obj.getAge(24)
obj.displayDetails()
obj.decrementAge()
obj.displayDetails()
