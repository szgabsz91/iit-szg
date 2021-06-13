select xmlquery(
  'for $personContacts in ora:view("PersonContacts")
  where fn:count($personContacts/ROW/CONTACTS/contacts/phone-number) = 0
  return
    element city {
      $personContacts/ROW/CONTACTS/contacts/address/city/text()
    }'
  returning content
) as result from dual;
