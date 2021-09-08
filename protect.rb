class Parent
protected
def protectedMethod
puts"protect method"
end
end
class Deep<Parent
def publicMethod
self.protectedMethod
end
end
obj=Deep.new
obj.publicMethod
