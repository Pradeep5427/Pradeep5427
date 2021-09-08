class Vehicle 
def self.inherited(car_type)
puts"#{car_type} is a kind of vehicle"
end
end
class Hyundai<Vehicle
end
