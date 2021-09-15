module Deep1
class Max
end
$a1=:Max
end
module Deep2
Max=5
$a=Max
end
def Max()
end
$a3=:Max
puts $a1.object_id
puts $a2.object_id
puts $a3.object_id
