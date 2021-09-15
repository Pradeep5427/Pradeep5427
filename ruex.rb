class Exception
attr_reader:myname
def initialize(myname)
@myname=myname
end
end
begin 
raise Exception.new("myname"),"this is custome class"
rescue Exception=>e
puts e.message
puts e.myname
end
