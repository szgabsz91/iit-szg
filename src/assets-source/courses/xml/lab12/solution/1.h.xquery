declare namespace ns = "NS";

for $car in fn:doc("car-database.xml")/ns:car-database/ns:cars/ns:car
return
  insert node <ns:x>y</ns:x> as last into $car
