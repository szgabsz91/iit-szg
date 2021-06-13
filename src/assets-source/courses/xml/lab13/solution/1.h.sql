select
  m.*
from
  Messages m
where
  existsnode(m.content, '/message/keywords') != 1;
