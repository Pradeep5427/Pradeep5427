module Greetings
def self.included(person_to_be_greeted)
puts"The #{person_to_be_greeted} is welcomed with an open Heart"
end
end
class Person
include Greetings
end
