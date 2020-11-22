insert into PersonContacts values(
  1,
  (select p.id from People p where p.name = 'John'),
  xmltype(
    bfilename('INPUTFOLDER', '2.b.xml'),
    nls_charset_id('AL32UTF8')
  )
);

insert into PersonContacts values(
  2,
  (select p.id from People p where p.name = 'Mike'),
  xmltype(
    '<contacts>' ||
      '<phoneNumber districtNumber="47">123-458</phoneNumber>' ||
      '<address>' ||
        '<city>C</city>' ||
        '<street>S</street>' ||
        '<houseNumber>1</houseNumber>' ||
      '</address>' ||
    '</contacts>'
  )
);