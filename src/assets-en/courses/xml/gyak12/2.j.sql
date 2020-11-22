update
  PersonContacts pc
set
  pc.contacts = appendchildxml(pc.contacts, '/contacts', xmltype('<emailAddress>mike@xml.com</emailAddress>'))
where
  exists (
    select
      p.id
    from
      People p
    where
      pc.person = p.id and
      p.name = 'Mike'
  );