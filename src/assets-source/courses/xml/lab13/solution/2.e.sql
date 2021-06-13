select
  extractvalue(pc.contacts, '/contacts/email-address') as emailAddress
from
  PersonContacts pc
where
  existsnode(pc.contacts, '/contacts/address') = 0;
