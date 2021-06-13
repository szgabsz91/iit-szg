update
  PersonContacts pc
set
  pc.contacts = deletexml(pc.contacts, '/contacts/phone-number')
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
