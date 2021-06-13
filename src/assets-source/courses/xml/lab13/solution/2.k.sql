update
  PersonContacts pc
set
  pc.contacts = updatexml(pc.contacts, '/contacts/phone-number', xmltype('<phone-number area-code="206">123-4567</phone-number>'))
where
  pc.id = 2;
