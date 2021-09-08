module Ruby
def self.extended(target)
puts "#{self} was extended by #{target}"
end
def Type
"The Type is Ruby"
end
end
class Coding
extend Ruby 
end
puts Coding.Type

