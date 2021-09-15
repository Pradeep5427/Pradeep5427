puts "type-1\n"
begin
raise
rescue
puts 'Tony got rescued.'
end
puts 'Tony returned safely'
puts "\ntype-2\n"
begin
raise 'Quill got rescued.'
puts 'quill' 
rescue StandardError => e
puts e.message
end
puts 'Quill is back to ship.'
puts "\ntype-3\n"
begin
raise StandardError.new 'Groot got rescued.'
rescue StandardError => e 
end
puts "\ntype-4\n"
begin
a = 30
b = 0
raise ZeroDivisionError.new 'b should not be 0' if b == 0
puts a/b
rescue StandardError => e
puts e.message
end
puts
begin
a = 30
b = 2
raise ZeroDivisionError.new 'b should not be 0' if b == 0
print "a/b = ", a / b
rescue StandardError => e
puts e.message
end

