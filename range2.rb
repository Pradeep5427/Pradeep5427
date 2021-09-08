ranges=6..8
puts ranges.include?(3)
ans=ranges.max
puts "maximum value=#{ans}"
ans=ranges.min
puts "minimum value=#{ans}"
ranges.each do |digit|
puts "In Loop #{digit}"
end
