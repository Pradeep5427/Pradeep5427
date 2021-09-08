num = 4152	
result = case num
when 1000..2000 then "Lies Between 1000 and 2000"
when 2000..3000 then "Lies Between 2000 and 3000"
when 4000..5000 then "Lies Between 4000 and 5000"
when 6000..7000 then "Lies Between 6000 and 7000"
else "Above 7000"
end	
puts result

