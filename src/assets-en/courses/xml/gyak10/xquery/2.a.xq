<tulajdonosok>
{
  for $tulaj in fn:doc("data/cars.xml")/autoDB/tulajdonosok/tulajdonos
  let $nev := fn:concat($tulaj/@vezeteknev, ", ", $tulaj/@keresztnev)
  return
    <tulajdonos>{$nev}</tulajdonos>
}
</tulajdonosok>