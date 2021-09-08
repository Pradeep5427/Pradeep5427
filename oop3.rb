class Language
$reader='DEEP'
@@count=0
def initialize(language_name,topic_name)
@language_name=language_name
@topic_name=topic_name
@@count+=1
end
def return_name
@language_name
end
def return_topic
@topic_name
end
def return_count
@@count
end
end
object1=Language.new('Ruby','method')
object2=Language.new('Scala','string')
puts'Language name for object1:'+object1.return_name
puts'Topic name for object1:'+object1.return_topic
puts'Language name for object2:'+object2.return_name
puts'Topic name for object2:'+object2.return_topic
puts'The reader is' + $reader
puts'The number of objects created is' + object1.return_count.to_s
puts'The number of objects created is' + object2.return_count.to_s
