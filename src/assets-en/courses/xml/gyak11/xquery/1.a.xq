for $auto in fn:doc("data/cars.xml")/autoDB/autok/auto
return
  insert node <x>y</x> (: into / after / before / as first into :) as last into $auto