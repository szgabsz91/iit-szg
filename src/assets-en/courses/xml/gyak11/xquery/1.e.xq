for $auto in fn:doc("data/cars.xml")/autoDB/autok/auto
let $ujAr := 2 * fn:number($auto/ar/text())
return
  replace value of node $auto/ar with $ujAr