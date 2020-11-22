select
  extractvalue(m.content, '/message/text') as message
from
  Messages m
where
  extractvalue(m.content, '/message/subject') = 'XML';