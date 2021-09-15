begin
raise 'Exception created'
puts 'After Exception'
rescue
puts 'Finally Saved'
ensure
puts 'ensure block execute'
end
