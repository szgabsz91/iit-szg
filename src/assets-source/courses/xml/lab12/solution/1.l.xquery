declare namespace ns = "NS";

for $car in fn:doc("car-database.xml")/ns:car-database/ns:cars/ns:car
let $newPrice := 2 * fn:number($car/ns:price/text())
return
  replace value of node $car/ns:price with $newPrice
