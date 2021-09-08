def deep(*var)
puts"Number of parameters is: #{var.length}"
for i in 0...var.length
puts "parameters are:#{var[i]}"
end 
end
deep "123","456"
deep "Deep's world"
