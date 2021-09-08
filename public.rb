class Deep
def publicMethod1
puts"1st method called!"
end
public
def publicMethod2
puts"2nd Method2 called!"
end 
end
obj=Deep.new()
obj.publicMethod1()
obj.publicMethod2()
