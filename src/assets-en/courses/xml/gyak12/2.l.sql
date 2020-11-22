update
  PersonContacts pc
set
  pc.contacts = deletexml(pc.contacts, '/contacts/phoneNumber')
where
  exists(
    select
      p.id
    from
      People p
    where
      p.id = pc.person and
      p.name = 'Mike'
  );