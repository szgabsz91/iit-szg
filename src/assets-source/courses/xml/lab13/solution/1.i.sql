select
  m.*
from
  Messages m
where
  existsnode(m.content, '/message/keywords/keyword[contains(., "database")]') = 1 and
  m."from" = (select p.id from People p where p.name = 'John');
