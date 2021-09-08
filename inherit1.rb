class Deep1
def display a=0, b=0
puts"parent class,1st Argument:#{a},2nd Argument:#{b}"  
end
end
class Deep2<Deep1
def display a,b
super
super a
super a,b
super()
puts"Hey!This is subclass method"
end
end
obj=Deep1.new
obj.display"Sudo_placement","Deep"
