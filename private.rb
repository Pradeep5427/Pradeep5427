class Deep
private
def privateMethod
puts"privateMethod"
end 
public
def publicMethod
privateMethod
end
end
obj=Deep.new
obj.publicMethod
