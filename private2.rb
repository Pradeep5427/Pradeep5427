class Parent
private
def privateMethod
puts"privateMethod called!"
end 
protected
def protectedMethod
puts"protectedmethod"
end
public
def publicMethod1
puts"publicMethod1 called"
end
def publicMethod2
protectedMethod
privateMethod
end
end
class Child<Parent
def publicMethod3
protectedMethod
end
end
obj1=Parent.new
obj2=Child.new
puts"\nParents method:\n"
obj1.publicMethod1
obj1.publicMethod2
puts"\nChild methods:\n"
obj2.publicMethod1
obj2.publicMethod3
