begin
raise 'Exception Created'
puts 'After Exception'
rescue 
puts 'Finally Saved'
retry
end

