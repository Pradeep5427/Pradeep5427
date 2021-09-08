class Vehicle
attr_accessor :vehicle_name
attr_accessor :vehicle_color
def initialize(vehicle_name, vehicle_color)
@vehicle_name = vehicle_name
@vehicle_color = vehicle_color
end
end
class Car < Vehicle
attr_accessor :car_model
def initialize(vehicle_name, vehicle_color, car_model)
super(vehicle_name, vehicle_color)
@car_model = car_model
end
end
object = Car.new('Nissan', 'white', 'xyz')
puts object.vehicle_name
puts object.vehicle_color
puts object.car_model

