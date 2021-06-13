update
  Messages m
set
  m.content = updatexml(m.content, '/message/priority', xmltype('<priority>0.5</priority>'))
where
  m.id = 2;
