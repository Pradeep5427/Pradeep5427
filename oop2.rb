class Language
def initialize(language_name, topic_name)
@language_name=language_name
@topic_name=topic_name
end
def return_name
return @language_name
end
def return_topic
return @topic_name
end 
def modify_topic(value)
@topic_name=value
end
end
object=Language.new('Ruby','method')
puts'Language Name for object:'+ object.return_name
puts'Topic Name is:'+ object.return_topic
object.modify_topic('string')
puts 'New Topic Name is '+  object.return_topic
