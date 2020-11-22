create table PersonContacts(
  id int primary key,
  person int not null references People on delete cascade,
  contacts xmltype not null
);