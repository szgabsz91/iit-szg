select xmlquery(
  'for $pc in ora:view("PersonContacts")
  where $pc/ROW/CONTACTS/contacts/phoneNumber = "123-456"
  return $pc/ROW/CONTACTS/contacts/emailAddress'
  returning content
) from dual;