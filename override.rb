class A 
def a
puts 'deep'
end 
end
class B<A 
def a
puts 'ruby programs'
end 
end
b=B.new
b.a
