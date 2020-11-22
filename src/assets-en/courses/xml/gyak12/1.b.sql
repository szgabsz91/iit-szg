-- This should be a valid existing folder with our XSD/XML files
create directory INPUTFOLDER as
  'C:\Documents and Settings\xml\workspace\gyak12';

insert into People values(1, 'John');
insert into People values(2, 'Mike');
insert into People values(3, 'Jack');
insert into People values(4, 'James');

insert into Messages values(
  1,
  (select p.id from People p where p.name = 'John'),
  (select p.id from People p where p.name = 'Jack'),
  to_date('2014-09-30', 'yyyy-mm-dd'),
  xmltype(
    bfilename('INPUTFOLDER', '1.b.xml'),
    nls_charset_id('AL32UTF8')
  )
);
insert into Messages values(
  2,
  (select p.id from People p where p.name = 'Mike'),
  (select p.id from People p where p.name = 'James'),
  to_date('2014-10-12', 'yyyy-mm-dd'),
  xmltype(
    '<message>' ||
      '<subject>XML</subject>' ||
      '<text>XML rocks even inside a relational database!</text>' ||
      '<priority>1.0</priority>' ||
    '</message>'
  )
);