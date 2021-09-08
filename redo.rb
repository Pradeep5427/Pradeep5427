restart=false
for x in 2..20
if x==15
if restart==false
puts "Re-doing when x="+x.to_s
restart=true
redo
end
end
puts x
end
