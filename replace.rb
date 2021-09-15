text="pradeep,  he is a computer science student"
text.gsub!("pradeep", "Pradeep")
text.gsub!(/pradeep/, "Pradeep")
puts "#{text}"

