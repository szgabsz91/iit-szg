select
  extractvalue(pc.contacts, '/contacts/address/city') as city,
  extractvalue(pc.contacts, '/contacts/address/street') as street,
  extractvalue(pc.contacts, '/contacts/address/houseNumber') as houseNumber
from
  PersonContacts pc
where
  extractvalue(pc.contacts, '/contacts/address/city') = 'C';