create or replace type Car as object(
  licensePlateNumber char(8),
  manufacturer varchar2(50),
  model varchar2(50),
  price number
) instantiable not final;

create or replace type CarCollection as table of ref Car;

create table Cars of Car;
