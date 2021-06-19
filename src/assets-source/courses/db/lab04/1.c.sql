create or replace type PersonInfo as object(
  id int,
  firstName varchar2(50),
  lastName varchar2(50)
);

create table PersonInfos of PersonInfo;
