create table People(
  id int not null primary key,
  personInfo ref PersonInfo,
  cars CarCollection
) nested table cars store as cars_table;
