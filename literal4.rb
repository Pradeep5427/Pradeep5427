hash1 = Hash.new
hash2 = {}
hash1 = {"Quill" => 100, "Drax" => 200, "Gamora" => 300}
hash2 = {Quill:1, Gamora:2}
print(hash1.keys, "\n")
print(hash2.keys, "\n")
for i in hash2.keys do
if i==:Quill
print(i, "=>", hash2[i], "\n")
end
end

