declare namespace ns = "NS";

for $car in fn:doc("car-database.xml")/ns:car-database/ns:cars/ns:car
return
  replace node $car/ns:price with <ns:ar>{$car/ns:price/text()}</ns:ar>
