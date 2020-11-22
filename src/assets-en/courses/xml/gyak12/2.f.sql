select
  t.webSite
from
  (select
     extractvalue(pc.contacts, '/contacts/webSite') as webSite
   from
     PersonContacts pc
   order by
     to_number(extract(pc.contacts, 'count(/contacts/phoneNumber)')) desc
  ) t
where
  rownum = 1;