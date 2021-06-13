select
  p.name
from
  People p inner join
  PersonContacts pc on p.id = pc.person
where
  extractvalue(pc.contacts, '/contacts/email-address') LIKE '%google.com' and
  extractvalue(pc.contacts, '/contacts/website') LIKE '%google.com';
