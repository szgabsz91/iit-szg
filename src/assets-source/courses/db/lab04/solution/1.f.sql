insert into People values(
  1,
  (select ref(pi) from PersonInfos pi where pi.id = 1),
  CarCollection(
    (select ref(c) from Cars c where c.licensePlateNumber = 'AB12 CDE')
  )
);

insert into People values(
  2,
  (select ref(pi) from PersonInfos pi where pi.id = 2),
  CarCollection(
    (select ref(c) from Cars c where c.licensePlateNumber = 'AB12 CDF'),
    (select ref(c) from Cars c where c.licensePlateNumber = 'AB12 CDG')
  )
);
