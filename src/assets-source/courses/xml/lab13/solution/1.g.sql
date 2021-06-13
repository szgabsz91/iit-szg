-- Decimal point/comma
alter session set nls_numeric_characters = '.,';

select
  t.*
from
  (select
     m.id
   from
     Messages m
   order by
     nvl(extract(m.content, '/message/priority/text()').getnumberval(), 0.0) desc
  ) t
where
  rownum = 1;
