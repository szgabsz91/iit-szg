select
  p.*
from
  People p inner join
  Messages m on p.id = m."to";
