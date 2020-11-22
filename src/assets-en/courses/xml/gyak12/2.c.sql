select
  p.name,
  pn.districtNumber,
  pn.phoneNumber
from
  People p inner join
  PersonContacts pc on p.id = pc.person left join
  xmltable(
    '/contacts/phoneNumber'
    passing pc.contacts
    columns
      districtNumber int path '@districtNumber',
      phoneNumber varchar2(50) path 'text()'
  ) pn on 1 = 1
where
  existsnode(pc.contacts, '/contacts/emailAddress') = 1;