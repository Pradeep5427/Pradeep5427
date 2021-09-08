BEGIN{
a=5
b=4
c=a+b
puts"this is BEGIN block code"
puts c
}
END{
a=6
b=3
c=a*b
puts "this id END  block code"
puts c
}
puts "main block"
