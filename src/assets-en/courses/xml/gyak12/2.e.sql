select
  extractvalue(pc.contacts, '/contacts/emailAddress') as emailAddress
from
  PersonContacts pc
where
  existsnode(pc.contacts, '/contacts/address') = 0;