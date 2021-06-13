declare namespace ns = "NS";

for $car in fn:doc("car-database.xml")/ns:car-database/ns:cars/ns:car
return
  rename node $car/ns:price as "ns:ar"
