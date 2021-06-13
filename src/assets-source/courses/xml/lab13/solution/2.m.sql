select xmlquery(
  'for $personContacts in ora:view("PersonContacts")
  where $personContacts/ROW/CONTACTS/contacts/phone-number = "123-4567"
  return $personContacts/ROW/CONTACTS/contacts/email-address'
  returning content
) as result from dual;
