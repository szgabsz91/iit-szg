for $auto in fn:doc("data/cars.xml")/autoDB/autok/auto
where $auto/@rsz eq "ABC-124"
return
  delete node $auto