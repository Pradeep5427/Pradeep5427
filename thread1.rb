threads=[]
5.times do |value|
threads << Thread.new(value) do |a|
raise "oops error" if a == 3
print"#{a}\n"
end
end
threads.each do |x|
begin 
x.join
rescue RuntimeError=>y
puts "failed::#{y.message}"
end
end
