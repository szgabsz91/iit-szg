select
  value(ti).ToString()
from
  TodoItems ti
order by
  ti.priority desc;
