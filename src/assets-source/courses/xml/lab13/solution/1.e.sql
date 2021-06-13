select
  extractvalue(m.content, '/message/content') as message
from
  Messages m
where
  extractvalue(m.content, '/message/subject') = 'XML';
