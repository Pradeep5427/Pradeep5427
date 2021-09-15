def raise_and_rescue
begin
puts 'Before exception arise'
raise 'Exception created'
puts 'After Excution'
rescue
puts 'Finally saved'
end
puts 'outside from the begin block'
end
raise_and_rescue
