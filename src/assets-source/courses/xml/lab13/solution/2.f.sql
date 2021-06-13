select
  t.website
from
  (select
     extractvalue(pc.contacts, '/contacts/website') as website
   from
     PersonContacts pc
   order by
     to_number(extract(pc.contacts, 'count(/contacts/phone-number)')) desc
  ) t
where
  rownum = 1;
