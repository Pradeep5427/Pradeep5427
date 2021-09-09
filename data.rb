class Deep
public
def publicMethod
puts "public"
privateMethod
end
private
def privateMethod
puts "Private"
end
end
obj=Deep.new
obj.publicMethod

