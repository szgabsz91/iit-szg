select
  p.name,
  nvl(pn.areaCode, 202) areaCode,
  nvl(pn.phoneNumber, 'N/A') phoneNumber,
  nvl(a.city, 'N/A') city,
  nvl(a.street, 'N/A') street,
  nvl(a.houseNumber, 0) houseNumber,
  nvl(ea.emailAddress, 'N/A') emailaddress,
  nvl(ws.website, 'N/A') website
from
  People p inner join
  PersonContacts pc on p.id = pc.person left join
  xmltable(
    '/contacts/phone-number'
    passing pc.contacts
    columns
      areaCode int path '@area-code',
      phoneNumber varchar2(50) path 'text()'
  ) pn on 1 = 1 left join
  xmltable(
    '/contacts/address'
    passing pc.contacts
    columns
      city varchar2(50) path 'city',
      street varchar2(50) path 'street',
      houseNumber int path 'house-number'
  ) a on 1 = 1 left join
  xmltable(
    '/contacts/email-address'
    passing pc.contacts
    columns
      emailAddress varchar2(50) path 'text()'
  ) ea on 1 = 1 left join
  xmltable(
    '/contacts/website'
    passing pc.contacts
    columns
      website varchar2(50) path 'text()'
  ) ws on 1 = 1
where
  areaCode = 415;
