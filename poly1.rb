class Hotel
def enters
puts "A customer enters"
end
def type(customer)
customer.type
end
def room(customer)
customer.room
end
end
class Single
def type
puts "Room is on the fourth floor."
end
def room
puts "Per night stay is 5 thousand"
end
end
class Couple
def type
puts "Room is on the second floor"
end
def room
puts "Per night stay is 8 thousand"
end
end
hotel= Hotel.new
puts "This visitor is Single."
customer = Single.new
hotel.type(customer)
hotel.room(customer)
puts "The visitors are a couple."
customer = Couple.new
hotel.type(customer)
hotel.room(customer)

