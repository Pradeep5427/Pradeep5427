class Encapsulation
def initialize(id,name,addr)
@cust_id=id
@cust_name=name
@cust_addr=addr
end
def display_details()
puts "Customer id: #@cust_id"
puts "Customer name: #@cust_name"
puts "customer address: #@cust_addr"
end
end
cust1= Encapsulation.new("1","Deep","my address")
cust2= Encapsulation.new("2","someone","our address")
cust1.display_details()
cust2.display_details()
