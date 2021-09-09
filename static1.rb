class Static
@@geek_count=0
def incrementStatic 
@@geek_count+=1
end
def self.getCount
return @@geek_count
end
end
b1=Static.new
b1.incrementStatic()
b2=Static.new
b2.incrementStatic()
b3=Static.new
b3.incrementStatic()
b4=Static.new
b4.incrementStatic()
puts"Total Number of geeks=#{Static.getCount()}"
