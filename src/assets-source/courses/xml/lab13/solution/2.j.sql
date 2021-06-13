update
  PersonContacts pc
set
  pc.contacts = appendchildxml(pc.contacts, '/contacts', xmltype('<email-address>mike@microsoft.com</email-address>'))
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
