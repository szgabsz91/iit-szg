select
  p.name,
  pn.areaCode,
  pn.phoneNumber
from
  People p inner join
  PersonContacts pc on p.id = pc.person left join
  xmltable(
    '/contacts/phone-number'
    passing pc.contacts
    columns
      areaCode int path '@area-code',
      phoneNumber varchar2(50) path 'text()'
  ) pn on 1 = 1
where
  existsnode(pc.contacts, '/contacts/email-address') = 1;
