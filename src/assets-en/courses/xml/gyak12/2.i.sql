select
  p.name
from
  People p inner join
  PersonContacts pc on p.id = pc.person
where
  extractvalue(pc.contacts, '/contacts/emailAddress') LIKE '%z.com' and
  extractvalue(pc.contacts, '/contacts/webSite') LIKE '%z.com';