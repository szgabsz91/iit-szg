select
  p.name,
  nvl(pn.districtNumber, 46) districtNumber,
  nvl(pn.phoneNumber, 'N/A') phoneNumber,
  nvl(a.city, 'N/A') city,
  nvl(a.street, 'N/A') street,
  nvl(a.houseNumber, 0) houseNumber,
  nvl(ea.emailAddress, 'N/A') emailaddress,
  nvl(ws.webSite, 'N/A') webSite
from
  People p inner join
  PersonContacts pc on p.id = pc.person left join
  xmltable(
    '/contacts/phoneNumber'
    passing pc.contacts
    columns
      districtNumber int path '@districtNumber',
      phoneNumber varchar2(50) path 'text()'
  ) pn on 1 = 1 left join
  xmltable(
    '/contacts/address'
    passing pc.contacts
    columns
      city varchar2(50) path 'city',
      street varchar2(50) path 'street',
      houseNumber int path 'houseNumber'
  ) a on 1 = 1 left join
  xmltable(
    '/contacts/emailAddress'
    passing pc.contacts
    columns
      emailAddress varchar2(50) path 'text()'
  ) ea on 1 = 1 left join
  xmltable(
    '/contacts/webSite'
    passing pc.contacts
    columns
      webSite varchar2(50) path 'text()'
  ) ws on 1 = 1
where
  districtNumber = 47;