module Ruby
def self.prepended(target)
puts"#{self} has been prepended to #{target}"
end
def type
"the type belongs to ruby"
end
end
class Coding
prepend Ruby
end
puts Coding.new.type
