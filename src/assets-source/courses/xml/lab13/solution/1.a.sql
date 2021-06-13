create table People(
  id int primary key,
  name varchar2(50) not null
);

create table Messages(
  id int primary key,
  "from" int not null references People on delete cascade,
  "to" int not null references People on delete cascade,
  "date" date not null,
  content xmltype not null
);
