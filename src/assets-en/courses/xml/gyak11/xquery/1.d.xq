for $auto in fn:doc("data/cars.xml")/autoDB/autok/auto
return
  rename node $auto/ar as "price"