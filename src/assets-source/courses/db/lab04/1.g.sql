select
  deref(p.personInfo).firstName || ' ' || deref(p.personInfo).lastName as name,
  sum(deref(c.column_value).price) as totalPrice
from
  People p,
  table(p.cars) c
group by
  deref(p.personInfo).firstName || ' ' || deref(p.personInfo).lastName;
