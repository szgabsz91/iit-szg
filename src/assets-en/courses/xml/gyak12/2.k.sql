update
  PersonContacts pc
set
  pc.contacts = updatexml(pc.contacts, '/contacts/phoneNumber', xmltype('<phoneNumber districtNumber="48">123-458</phoneNumber>'))
where
  pc.id = 2;