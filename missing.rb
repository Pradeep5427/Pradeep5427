class Ruby 
def method_missing(input, *args)
"#{input} not defined on #{self}"
end 
def Type
"The Type is Ruby"
end 
end
var=Ruby.new
puts var.Type
puts var.Name
