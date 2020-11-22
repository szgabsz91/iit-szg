update
  Messages m
set
  m.content = appendchildxml(m.content, '/message', xmltype('<keywords><keyword>xml</keyword></keywords>'))
where
  m.id = 2;