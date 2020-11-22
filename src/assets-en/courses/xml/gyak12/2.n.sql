select xmlquery(
  'for $pc in ora:view("PersonContacts")
  where fn:count($pc/ROW/CONTACTS/contacts/phoneNumber) = 0
  return
    element city {
      $pc/ROW/CONTACTS/contacts/address/city/text()
    }'
  returning content
) from dual;