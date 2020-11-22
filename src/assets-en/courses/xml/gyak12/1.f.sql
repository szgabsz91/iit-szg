select
  t.message
from
  (select
     extractvalue(m.content, '/message/text') as message
   from
     Messages m
   order by
     length(extractvalue(m.content, '/message/text')) desc
  ) t
where
  rownum = 1;