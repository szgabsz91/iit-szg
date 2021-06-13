-- This should be a valid existing folder with our XSD/XML files
create directory INPUTFOLDER as '~/courses/xml/lab13';

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
      '<phone-number area-code="415">123-4569</phone-number>' ||
      '<address>' ||
        '<city>San Francisco</city>' ||
        '<street>4th Street</street>' ||
        '<house-number>580</house-number>' ||
      '</address>' ||
    '</contacts>'
  )
);
