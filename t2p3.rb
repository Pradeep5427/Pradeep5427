begin
puts 'no Exception raise'
rescue	
puts 'Finally Saved!'
else
puts 'Else block execute because of no exception raise'
ensure
puts 'ensure block execute'
end	

