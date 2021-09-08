def geeks
attempt_again=true
p 'checking'
begin
p'crash'
raise 'foo'
rescue Exception=>e
if attempt_again
attempt_again=false
retry
end
end
end

