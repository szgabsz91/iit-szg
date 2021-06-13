declare namespace ns = "NS";

for $car in fn:doc("car-database.xml")/ns:car-database/ns:cars/ns:car
where $car/@license-plate-number eq "AB12 CDE"
return
  delete node $car
