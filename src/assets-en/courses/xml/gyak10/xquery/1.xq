<autok>
{
  for $auto in fn:doc("data/cars.xml")/autoDB/autok/auto
  where $auto/ar > 5
  order by $auto/gyarto, $auto/ar descending
  return
    $auto
}
</autok>