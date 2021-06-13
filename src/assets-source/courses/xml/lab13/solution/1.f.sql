select
  t.message
from
  (select
     extractvalue(m.content, '/message/content') as message
   from
     Messages m
   order by
     length(extractvalue(m.content, '/message/content')) desc
  ) t
where
  rownum = 1;
