threads=[]
4.times do |value|
threads << Thread.new(value) do |a|
raise "oops error" if a==2
print"#{a}\n"
end
end
threads.each{|b| b.join}
