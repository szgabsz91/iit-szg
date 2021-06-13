select
  p.name
from
  People p inner join
  PersonContacts pc on p.id = pc.person
where
  existsnode(pc.contacts, '/contacts/website') = 1;
