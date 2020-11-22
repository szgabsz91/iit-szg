select
  extractvalue(m.content, '/message/text') as message,
  m."date"
from
  Messages m
where
  to_char(m."date", 'mm') = '10';