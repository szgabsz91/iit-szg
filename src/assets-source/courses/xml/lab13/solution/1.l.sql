update
  Messages m
set
  m.content = deletexml(m.content, '/message/keywords')
where
  m.id = 2;
