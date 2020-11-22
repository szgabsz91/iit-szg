for $auto in fn:doc("data/cars.xml")/autoDB/autok/auto
return
  replace node $auto/ar with <price>{$auto/ar/text()}</price>