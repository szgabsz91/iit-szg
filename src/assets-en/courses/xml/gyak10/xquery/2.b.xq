<elemek>
{
  let $doc := fn:doc("data/cars.xml")
  for $auto in $doc/autoDB/autok/auto
  for $tulaj in $doc/autoDB/tulajdonosok/tulajdonos
  let $rsz := $auto/@rsz
  let $tulajId := $tulaj/@id
  return
    element elem {
      element rendszam {
        text {
          $rsz
        }
      },
      
      element tulajdonos {
        text {
          $tulajId
        }
      }
    }
}
</elemek>